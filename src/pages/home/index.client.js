// const CheapRuler = require('cheap-ruler').default

const accessToken = "pk.eyJ1IjoiYW5raG1vciIsImEiOiJjaWZ4MTk4b2Eza2tqdTZrc2s3Y2x3Y3FuIn0.3emrqX3oCouiiHJwUXdFdg"

const map = L.map('map-container');
map.locate({setView: true, enableHighAccuracy: true, maxZoom: 17});

L.tileLayer.wms('https://api.mapbox.com/styles/v1/ankhmor/{id}/tiles/{tileSize}/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'ckgxxnwae12xc19plvvms6lys',
  tileSize: 256,
  zoomOffset: 0,
  accessToken
}).addTo(map);


let newLocationMarker;
let newLocation;
let ruler;

let minRadius = 0
let selectStage = 0;

function setRadiusHandler(e) {
  const radiusBoundary = e.latlng
  // const distance = ruler.distance([newLocation.lat, newLocation.lng], [radiusBoundary.lat, radiusBoundary.lng]);
  const distance = map.distance(newLocation, radiusBoundary);
  if (distance > minRadius) {
    newLocationMarker.setRadius(distance)
    return {radius: distance}
  }
  return {radius: minRadius}
}

let radius;
map.on('click', function(e){
  if (selectStage === 1) {
    selectStage = 0

    debugger
    if (newLocation) window.location =
        new URL(window.location.origin + `/plot/create?lat=${newLocation.lat}&lng=${newLocation.lng}&radius=${radius}`)

    map.off('mousemove', setRadiusHandler)
  } else {
    selectStage += 1

    if (newLocationMarker) {
      newLocationMarker.remove()
    }

    newLocation = e.latlng
    // ruler = new CheapRuler(newLocation.lat, 'meters');
    minRadius = map.getZoomScale(18, map.getZoom()) * 10
    radius = minRadius

    newLocationMarker = new L.circle(newLocation, {radius: minRadius}).addTo(map);

    map.on('mousemove', e => {
      radius = setRadiusHandler(e).radius
    })
  }
});
