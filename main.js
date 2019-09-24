// Creating map options
var mapOptions = {
    center: [24.007201, 97.887975],
    zoom: 10
}

// Creating a map object
var map = L.map('map', mapOptions);
// var marker = L.marker([24.126767, 98.417790]).addTo(map);
var circle = L.circle([24.007201, 97.887975], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 800
}).addTo(map);
// Creating a Layer object
var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

// Adding layer to the map
map.addLayer(layer);