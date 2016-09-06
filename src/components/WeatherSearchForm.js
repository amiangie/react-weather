import React from 'react';
import Geosuggest from 'react-geosuggest';

export default class WeatherSearchForm extends React.Component {
	
	// data from here should be added to WeatherApp state
	// should really be onBlur() ?
	_handleSubmit(suggest) {
//		event.preventDefault();
		
		console.log(suggest)
//		LocationActions.create(location, interval);
//		element.value = '';
	}
	
	onSuggestSelect(suggest) {
		var newLocationCoords = {
			lat: suggest.location.lat,
			lng: suggest.location.lng
		};
		
		console.log(newLocationCoords)
		this.props.addLocation(newLocationCoords);
	}

	
	render() { 
		return(
			<form onSubmit={this._handleSubmit} className="weather-form">
				<Geosuggest 
					placeholder="Add another place"
					onSuggestSelect={this.onSuggestSelect.bind(this)}
					location={new google.maps.LatLng(53.558572, 9.9278215)}
          			radius='20'
					/>
			</form>
		); 
	}

//	<input id="weather-search-input" ref="location" placeholder="Add another place" type="text" className="weather-form__input"></input>
}