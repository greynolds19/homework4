var map = L.map('map').setView([40.68025, -74.00155], 13);

L.tileLayer('http://{s}.tiles.mapbox.com/v3/examples.map-i875mjb7/{z}/{x}/{y}.png', {
    maxZoom: 18
}).addTo(map);


//from Lyzie's blog: this adds the a geojson file I created to leaflet using a method created by some guy named Calvin Metcalf

function popUp(feature, layer) {
    layer.bindPopup(feature.properties.name);
  }

var geojsonLayer = new L.GeoJSON.AJAX("./js/polygons.json", {onEachFeature:popUp});

geojsonLayer.addTo(map);



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
var GroverClevelandMarker = L.marker([40.710906, -73.911338], {icon: parksIcon}).addTo(map);
//centralParkMarker.bindPopup("Larry's house").openPopup();

var MorschersMarker = L.marker([40.702420, -73.901414],{icon: parksIcon}).addTo(map);

var GroceryMarker = L.marker([40.707814, -73.897845],{icon: parksIcon}).addTo(map);


//listeners for sidebar hovers
$('.place').on('mouseover',function(){
  $(this).css('background','#8ECEFA');
});

$('.place').on('mouseout',function(){
  $(this).css('background','#46B3FE');
});

//Grover Cleveland Click listener
$('.GroverCleveland').on('click',function(){
  map.panTo(new L.LatLng(40.710906, -73.911338),{animate: true, duration: 1.0});
});

//Morschers Click listener
$('.Morschers').on('click',function(){
  map.panTo(new L.LatLng(40.702420, -73.901414),{animate: true, duration: 1.0});
});

//Grocery Click listener
$('.Grocery').on('click',function(){
  map.panTo(new L.LatLng(40.707814, -73.897845),{animate: true, duration: 1.0});
});

//listeners for map hover
GroverClevelandMarker.on('mouseover',function(){
	$('.GroverCleveland').toggleClass('hover');
})
	.on('mouseout',function(){
		$('.GroverCleveland').toggleClass('hover');
	});

MorschersMarker.on('mouseover',function(){
	$('.Morschers').toggleClass('hover');
})
	.on('mouseout',function(){
		$('.Morschers').toggleClass('hover');
	});

GroceryMarker.on('mouseover',function(){
	$('.Grocery').toggleClass('hover');
})
	.on('mouseout',function(){
		$('.Grocery').toggleClass('hover');
	});


