import React from 'react';
import Geosuggest from 'react-geosuggest';

export default class WeatherSearchForm extends React.Component {
	
	onSuggestSelect(suggest) {
		var newLocationCoords = {
			lat: suggest.location.lat,
			lng: suggest.location.lng
		};
		
		this.props.addLocation(newLocationCoords);
	}

	
	render() { 
		return(
			<form className="weather-form">
				<Geosuggest 
					placeholder="Add another place"
					onSuggestSelect={this.onSuggestSelect.bind(this)}
					/>
			</form>
		); 
	}
}