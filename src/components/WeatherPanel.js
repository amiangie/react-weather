import React from 'react';

export default class WeatherPanelsList extends React.Component {
	render() { 
		return(
			<article className="weather-panel">
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
				<a href="" className="weather-panel__remove">
					<span className="visuallyhidden">remove</span>
				</a>
			</article>
		); 
	}
}