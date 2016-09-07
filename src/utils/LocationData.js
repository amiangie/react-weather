import axios from 'axios';

class LocationData {
	
	constructor() {
		
	}
	
	_getGeolocationCoords() {
		return new Promise(function(resolve, reject){
			let coords = {};
			if (navigator.geolocation) {
				// trying to use browser geolocation
				navigator.geolocation.getCurrentPosition(
					function resolveLocation(position) {
						coords = {
							lat: position.coords.latitude,
							lng: position.coords.longitude
						};
						resolve(coords);
					},
					function resolveLocationError(error) {
						// some error like user doesn't want to share location.
						// nice try, user!
						axios.get('http://ipinfo.io')
							.then(function(response) { 
								coords = {
									lat: parseFloat(response.data.loc.split(',')[0]),
									lng: parseFloat(response.data.loc.split(',')[1])
								};
								resolve(coords);
							})
							.catch(function(error){
								console.log(error);
							});
					}
				);
			}
			else {
				// falling back to ipinfo
				axios.get('http://ipinfo.io')
					.then(function(response) { 
						coords = {
							lat: parseFloat(response.data.loc.split(',')[0]),
							lng: parseFloat(response.data.loc.split(',')[1])
						};
						resolve(coords);
					})
					.catch(function(error){
						console.log(error);
					});
			}
		});
	}
}

export default new LocationData();