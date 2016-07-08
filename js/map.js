var map = L.map('map');

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
  id: 'mapbox.streets',
  accessToken: 'pk.eyJ1Ijoic2Vhbm9zYXVyIiwiYSI6ImNpcWR4OWhtMTAyeDZmdG5wMHZyczFtbHkifQ.zyY0NwO9UdLZnguJNaykmQ'
}).addTo(map);
map.locate({setView: true, maxZoom: 17});
function onLocationError(e) {
    alert(e.message);
}
map.on('locationerror', onLocationError);
