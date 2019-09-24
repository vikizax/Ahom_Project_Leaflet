// initial map view
const map = L.map('map').setView([24.007201, 97.887975], 13);
// copy right 
const attribution =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
// tile source
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
// setting leaflet tile
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(map);
// const marker = L.marker([lat, lon]).addTo(mymap);

// circle for Sukapha first destination
const initialLocation = L.circle([24.007201, 97.887975], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 800
}).addTo(map);