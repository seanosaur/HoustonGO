var map = L.map('map', {
  center: [29.76011, -95.36927],
  zoom: 16
});

map.locate({setView: true, maxZoom: 16});
// var center = map.getCenter();
// var zoom = map.getZoom();
L.tileLayer('//api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="//openstreetmap.org">OpenStreetMap</a> contributors, ' +
    '<a href="//creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="//mapbox.com">Mapbox</a>',
  id: 'mapbox.streets',
  accessToken: 'pk.eyJ1Ijoic2Vhbm9zYXVyIiwiYSI6ImNpcWR4OWhtMTAyeDZmdG5wMHZyczFtbHkifQ.zyY0NwO9UdLZnguJNaykmQ'
}).addTo(map);
L.control.mapCenterCoord({
  position: 'topright',
  icon: true,
  onMove: true
}).addTo(map);
function onLocationError(e) {
    alert(e.message);
}
map.on('locationerror', onLocationError);

var client = new XMLHttpRequest();
client.open('GET', 'data/data.yml');
client.onreadystatechange = function() {
  if (client.readyState == 3) {
    yaml = jsyaml.load(client.responseText);
    parseData(yaml);
  }
}
client.send();

function parseData(data) {
  for (var prop in yaml) {
    if (!yaml.hasOwnProperty(prop)) {
      continue;
    }
    if (prop == "gym") {
      createMarkers(data.gym, prop);
    } else if (prop == "stop") {
      createMarkers(data.stop, prop);
    } else if (prop == "pokemon") {

    } else {

    }
  }
}

function createMarkers(list, prop) {
  for (var i = 0; i < list.length; i++) {
    var currentItem = list[i];
    L.marker([currentItem.latitude, currentItem.longitude], {title: prop + ": " + currentItem.name}).bindLabel(prop + ": " + currentItem.name).addTo(map);
  }
}
