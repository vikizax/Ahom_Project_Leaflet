// initial map view
const map = L.map('map').setView([24.089249, 98.054385], 9)

// setting up icons for marker
var LeafIcon = L.Icon.extend({
    options: {
        iconSize: [55, 20],
    }
});

// utility: set marker function
const setMarker = (la, lo, icon) => {
    return L.marker([la, lo], { icon: new LeafIcon({ iconUrl: icon }) }).addTo(map)
}

// utility : connect polylines
const connectMarker = (arraySet, option) => {
    return L.polyline(arraySet, option).addTo(map)
}


// copy right 
const attribution =
'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// tile source
// const tileUrl = 'paste tile url here'
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
// setting leaflet tile
const tiles = L.tileLayer(tileUrl, { attribution })
tiles.addTo(map)

// Sukaphas route marked
// followed old route: Yunnan to Assam

// 1: Ruili (birth)
const ruili = setMarker(24.089249, 98.054385, 'assets/icons/r0.png')
ruili.bindPopup('Birth Place: Ruili')

// 2: Myitkyina 
const myitkyina = setMarker(25.416836, 97.392241, 'assets/icons/r1.png')
myitkyina.bindPopup('1: Myitkyina')

// 3: Mogaung 
const mogaung = setMarker(25.303240, 96.933099, 'assets/icons/r2.png')
mogaung.bindPopup('2: Mogaung')

// 4: Irrawaddy river 
const irrawaddyRiver = setMarker(25.366652, 97.323406, 'assets/icons/r3.png')
irrawaddyRiver.bindPopup('3: Irrawaddy River')

// 5: Nangyang lake  
const nangyang = setMarker(27.222176, 96.140646, 'assets/icons/r4.png')
nangyang.bindPopup('4: Nangyang')

// 6: Pangsau pass (crossed the Patkai hills)
const pangsauPass = setMarker(27.247084, 96.153222, 'assets/icons/r5.png')
pangsauPass.bindPopup('5: Pangsau Pass')

// 7: Namrup 
const namrup = setMarker(27.184697, 95.349409, 'assets/icons/r6.png')
namrup.bindPopup('6: Namrup')

// 8: Sessa river(some doubts) , (seventh place)

// 9: Tipam 
const tipam = setMarker(27.274610, 95.396291, 'assets/icons/r8.png')
tipam.bindPopup('8: Tipam')

// 10: Dhakuakhana(Habung )
const dhakuakhana = setMarker(27.311547, 94.457458, 'assets/icons/r9.png')
dhakuakhana.bindPopup('9: Dhakuakhana')

// 11: Dikhowmukh		
const dikhowmukh = setMarker(26.980903, 94.464745, 'assets/icons/r10.png')
dikhowmukh.bindPopup('10: Dikhowmukh')

// 12: Dikhow river	
const dikhowRiver = setMarker(26.993663, 94.483028, 'assets/icons/r11.png')
dikhowRiver.bindPopup('11: Dikhow River')

// 13: Simaluguri
const simaluguri = setMarker(26.919686, 94.761020, 'assets/icons/r12.png')
simaluguri.bindPopup('12: Simaluguri')

// 14: Charaideo		
const charaideo = setMarker(26.941312, 94.875947, 'assets/icons/r13.png')
charaideo.bindPopup('13: Charaideo')

// Supkapha: In search of capital
// 1: Dhemaji			
const dhemaji = setMarker(27.480696, 94.557790, 'assets/icons/cap1.png')
dhemaji.bindPopup('Search of Capital, 1: Dhemaji')

// 2: Nazira
const nazira = setMarker(26.906063, 94.725027, 'assets/icons/cap2.png')
nazira.bindPopup('Search of Capital, 2: Nazira')

// array of cordinates 
// journey to assam
const journeyLatLong = [
    [
        [24.089249, 98.054385],
        [25.416836, 97.392241],
        [25.303240, 96.933099],
        [25.366652, 97.323406],
        [27.222176, 96.140646],
        [27.247084, 96.153222],
        [27.184697, 95.349409],
        [27.274610, 95.396291],
        [27.311547, 94.457458],
        [26.980903, 94.464745],
        [26.993663, 94.483028],
        [26.919686, 94.761020],
        [26.941312, 94.875947]
    ],
]
// in search of capital
const inSearchOfCapital = [
    [
        [27.480696, 94.557790],
        [26.906063, 94.725027]
    ]
]

// option for polylines
const journeyLineOptions = { color: 'red' }
const inSearchOfCapitalOptions = { color: 'green' }

// show polylines of sukaphaa's journey
connectMarker(journeyLatLong, journeyLineOptions)
// show polylines for the search of capital
connectMarker(inSearchOfCapital, inSearchOfCapitalOptions)