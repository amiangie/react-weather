import React from 'react';
import WeatherPanelsList from './WeatherPanelsList'
import WeatherSearchForm from './WeatherSearchForm'

export default class WeatherApp extends React.Component {
	render() { 
		return(
			<div className="weather-app">
				<section className="weather-panels">
					<WeatherPanelsList></WeatherPanelsList>
				</section>
				<section className="weather-form-holder">
					<WeatherSearchForm
						className="weather-form-holder"></WeatherSearchForm>
				</section>
			</div>
		); 
	}
}