import React from 'react';
import axios from 'axios';
import WeatherPanel from './WeatherPanel';
import WeatherSearchForm from './WeatherSearchForm';
import LocationData from '../utils/LocationData';

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
			LocationData._getGeolocationCoords().then((geoCoords) => {
				const locationItem = {
					id: this._generateId(),
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
	
	_addLocation(locationCoords) {
		const location = {
			id: this._generateId(),
			coords: locationCoords
		};

		this.setState({
			locations: this.state.locations.concat([location])
		});
		
		this._saveState();
	}
	
	_removeLocation(id) {
		const locations = this.state.locations.filter(
			location => location.id !== id
		);
		
		this.setState({ 
			locations: locations
		}, function() {
			this._saveState();
		});
	}
	
	_saveState() {
		localStorage.setItem('WeatherLocations', JSON.stringify(this.state.locations));
	}
	
	_generateId() {
		return (new Date().getTime()).toString(36);
	}
	
	_getWeatherPanels() {
		return this.state.locations.map((location) => {
			return <WeatherPanel id={location.id}
			 					 key={location.id}
								 lat={location.coords.lat}
								 lng={location.coords.lng}
								 onDelete={this._removeLocation.bind(this)}/>
		});
	}
	
	render() { 
		const weatherPanels = this._getWeatherPanels();
		return(
			<div className="weather-app">
				<section className="weather-panels">
					{weatherPanels}
				</section>
				<section className="weather-form-holder">
					<WeatherSearchForm addLocation={this._addLocation.bind(this)}></WeatherSearchForm>
				</section>
			</div>
		); 
	}
}
