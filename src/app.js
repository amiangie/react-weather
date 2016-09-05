import React from 'react';
import ReactDOM from 'react-dom';
import WeatherApp from './components/WeatherApp'


jQuery(function() {
	ReactDOM.render(
		<WeatherApp />,
		document.getElementById('weather-app')
	);
})