const accessToken = "pk.eyJ1IjoiYW5raG1vciIsImEiOiJjaWZ4MTk4b2Eza2tqdTZrc2s3Y2x3Y3FuIn0.3emrqX3oCouiiHJwUXdFdg"

var map = L.map('map-container');
map.locate({setView: true, enableHighAccuracy: true, maxZoom: 17});

L.tileLayer.wms('https://api.mapbox.com/styles/v1/ankhmor/{id}/tiles/{tileSize}/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'ckgxxnwae12xc19plvvms6lys',
  tileSize: 512,
  zoomOffset: -1,
  accessToken
}).addTo(map);