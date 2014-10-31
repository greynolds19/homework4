var map = L.map('map').setView([40.68025, -74.00155], 13);

L.tileLayer('http://{s}.tiles.mapbox.com/v3/examples.map-i875mjb7/{z}/{x}/{y}.png', {
    maxZoom: 18
}).addTo(map);


//define parks icon
var parksIcon = L.icon({
    iconUrl: 'img/parkIcon.png',
    //shadowUrl: 'leaf-shadow.png',

    iconSize:     [32, 37], // size of the icon
    shadowSize:   [51, 37], // size of the shadow
    iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
    shadowAnchor: [20, 37],  // the same for the shadow
    popupAnchor:  [0, -37] // point from which the popup should open relative to the iconAnchor
});



//create markers for parks
var centralParkMarker = L.marker([40.783462, -73.964767], {icon: parksIcon}).addTo(map);
//centralParkMarker.bindPopup("Larry's house").openPopup();

var riversideParkMarker = L.marker([40.800097, -73.971977],{icon: parksIcon}).addTo(map);

var prospectParkMarker = L.marker([40.664769, -73.970432],{icon: parksIcon}).addTo(map);


//listeners for sidebar hovers
$('.park').on('mouseover',function(){
  $(this).css('background','#8ECEFA');
});

$('.park').on('mouseout',function(){
  $(this).css('background','#46B3FE');
});

//Central Park Click listener
$('.centralPark').on('click',function(){
  map.panTo(new L.LatLng(40.778997, -73.968973),{animate: true, duration: 1.0});
});

//Riverside Park Click listener
$('.riversidePark').on('click',function(){
  map.panTo(new L.LatLng(40.800097, -73.971977),{animate: true, duration: 1.0});
});

//Prospect Park Click listener
$('.prospectPark').on('click',function(){
  map.panTo(new L.LatLng(40.664769, -73.970432),{animate: true, duration: 1.0});
});

//listeners for map hover
centralParkMarker.on('mouseover',function(){
	$('.centralPark').toggleClass('hover');
})
	.on('mouseout',function(){
		$('.centralPark').toggleClass('hover');
	});

riversideParkMarker.on('mouseover',function(){
	$('.riversidePark').toggleClass('hover');
})
	.on('mouseout',function(){
		$('.riversidePark').toggleClass('hover');
	});

prospectParkMarker.on('mouseover',function(){
	$('.prospectPark').toggleClass('hover');
})
	.on('mouseout',function(){
		$('.prospectPark').toggleClass('hover');
	});


