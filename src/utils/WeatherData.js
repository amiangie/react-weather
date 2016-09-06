import axios from 'axios';

const API_KEY = '89f1cc71c0fb34ac8175066eea307175';

class WeatherData {
	constructor() {
		this._locations = [];
	}
	
	_getWeather(lat, lng, onChange) {
		const locationId = this._locations.length;
		const location = {
			id: locationId,
			coords: {
				lat: lat,
				lng: lng
			},
			onchange: onChange
		};
		this._locations.push(location);
		this._fetchWeather(location.id, location.coords.lat, location.coords.lng);
	}
	
	_fetchWeather(locationId, locationLat, locationLng) {
		axios.get(this._generateApiUrl(locationLat, locationLng))
			.then((response) => {
				const parsedWeatherState = this._parseJsonResponse(response.data);
				this._locations[locationId].onchange(parsedWeatherState);
			})
			.catch((error) => {
				console.log(error)
			});
	}
	
	_generateApiUrl(lat, lng) {
		return `http://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lng}&APPID=${API_KEY}`;
	}
	
	_parseJsonResponse(json) {
		if (json.cod === '404') {
			return {error: 'Oops, location not found :('};
		}

		return {
			locationName: json.name,
			temperature: json.main.temp,
			description: json.weather[0].main,
			icon: json.weather[0].id
		};
}
	
}

export default new WeatherData();