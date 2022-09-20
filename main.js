let latitude, longitude, destination;

// Initializing Mapbox
 

/*map.addControl(
	new mapboxgl.GeolocateControl({
		positionOptions: {
			enableHighAccuracy: true
		},
		trackUserLocation: true
	})
);*/

$(function(){
	$("#navigate-button").click(function(){
		window.location.href=`ar_navigation.html?source=${latitude};${longitude}&destination=${destination.lat};${destination.lng}`
	})
})
$(document).ready(function(){
	alert("Please allow the device to know your location.")
	initGeolocation()
})
function initGeolocation(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(success)
	}else{
		alert("Sorry, your browser does not support GEOLOCATION Services.")
	}
};
function success(position){
	longitude=position.coords.longitude;
	latitude=position.coords.latitude;
	mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

	var map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/mapbox/streets-v11',
		center: [longitude, latitude],
		zoom: 16
	});
	map.addControl(
		new MapboxDirections({
			accessToken: mapboxgl.accessToken
		}),
		'top-left'
	);
	map.on('click',function(e){
		destination = e.lngLat
	})
}