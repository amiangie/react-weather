import React from 'react';
import Geosuggest from 'react-geosuggest';
import LocationData from '../utils/LocationData';

export default class WeatherSearchForm extends React.Component {
	
	constructor() {
		super();
		this.state = {
			locationCoords: {}
		};
	}
	
	componentWillMount() {
		LocationData._getGeolocationCoords().then((geoCoords) => {
			this.setState({
				locationCoords: geoCoords
			});
		});
	}
	
	onSuggestSelect(suggest) {
		var newLocationCoords = {
			lat: suggest.location.lat,
			lng: suggest.location.lng
		};
		this.props.addLocation(newLocationCoords);
		this.refs.geosuggest.clear();
	}

	
	render() { 
		const coordsLat = this.state.locationCoords.lat;
		const coordsLng = this.state.locationCoords.lng;
		return(
			<form className="weather-form">
				<Geosuggest 
					ref="geosuggest"
					placeholder="Add another place"
					onSuggestSelect={this.onSuggestSelect.bind(this)}
					location={new google.maps.LatLng(coordsLat, coordsLng)}
          			radius="100"
					/>
			</form>
		); 
	}
}