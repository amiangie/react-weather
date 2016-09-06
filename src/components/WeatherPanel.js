import React from 'react';
import WeatherData from '../utils/WeatherData';

export default class WeatherPanel extends React.Component {
	
	constructor() {
		super();
		this.state = {
			loading: true
		};
	}
	
	componentWillMount() {
		// get information based on lat/lng:
		// name, temperature, text, icon
//		this._getL
	}
	
	componentDidMount() {
		// subscribe to updates once in 5 min	
//		WeatherData.subscribeToWeather();
//		WeatherData.subscribeToWeather(this.props.lat, this.props.lng, this._onChange());
	}
	
	componentWillUnmount() {
		// unsubscrive from weather updates
		
	}
	
	_onChange(state) {
		this.setState({
			loading: false,
			weather: state
		});
	}
	
	_handleRemove() {
		
	}
	
	render() { 
		return(
			<article className="weather-panel">
				{ this._renderPanelContents() }
				<a href="" className="weather-panel__remove">
					<span className="visuallyhidden">remove</span>
				</a>
			</article>
		); 
	}
	
	_renderPanelContents() {
		if (this.state.loading) {
			return this._renderSpinner();
		}
		else {
			return this._renderWeather();
		}
	}
	
	_renderSpinner() {
		return(
			<div className="loader">
				<span className="visuallyhidden">Loading...</span>
			</div>
		);
	}
	
	_renderWeather() {
		let weather = this.state.weather;
		return(
			<div>
				<div className="weather-panel-icon">
					<i className="wi wi-day-sunny"></i>
				</div>
				<div className="weather-panel-info">
					<h1 className="weather-panel__title">Tallinn</h1>
					<p>
						<span className="weather-panel__temp">+20</span> | 
						<span className="weather-panel__desc">sunny</span>
					</p>
				</div>
			</div>
			
		);
	}
}