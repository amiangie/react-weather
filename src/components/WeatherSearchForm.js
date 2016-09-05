import React from 'react';

export default class WeatherSearchForm extends React.Component {
	render() { 
		return(
			<form action="" className="weather-form">
				<input id="weather-search-input" placeholder="Add another place" onFocus="geolocate()" type="text" className="weather-form__input" autocomplete="off"></input>
			</form>
		); 
	}
}