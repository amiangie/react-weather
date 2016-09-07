import React from 'react';
import WeatherData from '../utils/WeatherData';

export default class WeatherPanel extends React.Component {
	
	constructor() {
		super();
		this.state = {
			loading: true
		};
	}
	
	componentDidMount() {
		WeatherData._getWeather(this.props.lat, this.props.lng, this._onChange.bind(this));
	}
	
	_onChange(state) {
		this.setState({
			loading: false,
			weather: state
		});
	}
	
	_handleRemove(e) {
		e.preventDefault();
		this.props.onDelete(this.props.id);
	}
	
	render() { 
		return(
			<article className="weather-panel">
				{ this._renderPanelContents() }
				<a href="" className="weather-panel__remove"
					onClick={this._handleRemove.bind(this)} >
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
		const weather = this.state.weather;
		let iconClass = `wi wi-owm-${weather.icon}`;
		return(
			<div>
				<div className="weather-panel-icon">
					<i className={iconClass}></i>
				</div>
				<div className="weather-panel-info">
					<h1 className="weather-panel__title">{weather.locationName}</h1>
					<p>
						<span className="weather-panel__temp">{parseInt(weather.temperature)}°</span> | <span className="weather-panel__desc">{weather.description}</span>
					</p>
				</div>
			</div>
			
		);
	}
}
