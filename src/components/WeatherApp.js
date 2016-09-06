import React from 'react';
import axios from 'axios';
import WeatherPanel from './WeatherPanel';
import WeatherSearchForm from './WeatherSearchForm';
//import LocData from '../utils/LocData';

export default class WeatherApp extends React.Component {
	
	constructor() {
		super();
		this.state = {
			locations: []
		};
	}
	
	componentWillMount() {
		this._setInitialState();
	}
	
	_setInitialState() {
		const data = JSON.parse(localStorage.getItem('WeatherLocations')) || [];
		
		if(!data.length) {
			this._getGeolocationCoords().then((geoCoords) => {
				const locationItem = {
					id: 1,
					coords: geoCoords
				}
				this.setState({
					locations: this.state.locations.concat([locationItem])
				});
				this._saveState();
			});
		}
		else {
			this.setState({
				locations: data
			});
		}	
	}
	
	_getGeolocationCoords() {
		return new Promise(function(resolve, reject){
			let coords = {};
			if (navigator.geolocation) {
				// trying to use browser geolocation
				navigator.geolocation.getCurrentPosition(
					function resolveLocation(position) {
						coords = {
							lat: position.coords.latitude,
							lng: position.coords.longitude
						};
						resolve(coords);
					},
					function resolveLocationError(error) {
						// some error like user doesn't want to share location.
						// nice try, user!
						axios.get('http://ipinfo.io')
							.then(function(response) { 
								coords = {
									lat: parseFloat(response.data.loc.split(',')[0]),
									lng: parseFloat(response.data.loc.split(',')[1])
								};
								resolve(coords);
							})
							.catch(function(error){
								console.log(error);
							});
					}
				);
			}
			else {
				// falling back to ipinfo
				// todo: add ipinfo here as well
			}
		});
	}
	
	_addLocation() {
		// ...
		this._saveState();
	}
	
	_removeLocation(id) {
		// ...
		this._saveState();
	}
	
	_saveState() {
		// ...
		localStorage.setItem('WeatherLocations', JSON.stringify(this.state.locations));
	}
	
	_getWeatherPanels() {
		return this.state.locations.map((location) => {
			return(
				<WeatherPanel id="{location.id}"></WeatherPanel>
			);
		});
	}
	
	render() { 
//		const weatherPanels = this._getWeatherPanels();
		return(
			<div className="weather-app">
				<section className="weather-panels">

				</section>
				<section className="weather-form-holder">
					<WeatherSearchForm></WeatherSearchForm>
				</section>
			</div>
		); 
	}
}