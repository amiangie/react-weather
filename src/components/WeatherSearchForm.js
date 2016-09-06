import React from 'react';

export default class WeatherSearchForm extends React.Component {
	
	// data from here should be added to WeatherApp state
	// should really be onBlur() ?
	_handleSubmit(event) {
		event.preventDefault();
		
		LocationActions.create(location, interval);
		element.value = '';
	}
	
	render() { 
		return(
			<form onSubmit={this._handleSubmit} className="weather-form">
				<input id="weather-search-input" ref="location" placeholder="Add another place" type="text" className="weather-form__input"></input>
			</form>
		); 
	}
}