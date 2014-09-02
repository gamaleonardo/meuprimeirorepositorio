(function() { 
	window.onload = function() { 
	var mapDiv = document.getElementById('map'); 
	var latlng = new google.maps.LatLng(-13.00144902359713, -38.507767111778264); 
	
	// Creating an object literal containing the properties
	// we want to pass to the map
	var options = { 
		center: latlng, 
		zoom: 18, 
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		disableDefaultUI: false,
		mapTypeControl: true,
		mapTypeControlOptions: {
			/*style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
			position: google.maps.ControlPosition.LEFT,*/
			mapTypeIds: [
				google.maps.MapTypeId.ROADMAP,
				google.maps.MapTypeId.SATELLITE
			]
		},
		scaleControl: true,
		scaleControlOptions: {
			position: google.maps.ControlPosition.TOP
		},
		draggableCursor: 'move'

	}; 
	
	//Creating the map
	var map = new google.maps.Map(mapDiv, options);

	document.getElementById('getValues').onclick = function() {
		alert('Current Zoom level is ' + map.getZoom());
		alert('Current Center is ' + map.getCenter());
	}

	// Adding a marker to the map
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(-13.000949405165471, -38.50774531883002),
		map: map,
		title: 'Câmera do PAF I',
		icon: 'img/camera_teste.png'
	});

} 
})(); 