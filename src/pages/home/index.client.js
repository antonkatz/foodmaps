// const CheapRuler = require('cheap-ruler').default
require("../../ui/map/uGeoJson")

const accessToken = "pk.eyJ1IjoiYW5raG1vciIsImEiOiJjaWZ4MTk4b2Eza2tqdTZrc2s3Y2x3Y3FuIn0.3emrqX3oCouiiHJwUXdFdg"

const map = L.map('map-container')

map.locate({setView: true, enableHighAccuracy: true, maxZoom: 17})

L.tileLayer.wms('https://api.mapbox.com/styles/v1/ankhmor/{id}/tiles/{tileSize}/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'ckgxxnwae12xc19plvvms6lys',
    tileSize: 256,
    zoomOffset: 0,
    accessToken
}).addTo(map)

const l = L.uGeoJSONLayer({
    endpoint: "/plot/map",
    debug: true,
    pointToLayer: function (geoJsonPoint, latlng) {
        return new L.circle(latlng, {radius: geoJsonPoint?.properties?.radius || 10})
    },
    style: function (feature) {
        return {
            fillColor: "#ff7800",
            color: '#000000',
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8,
            stokeWeight: 5
        }
    },
    transformData(data) {
        data = data || []
        return data.map(plot => {
            return {
                "type": "Feature",
                "properties": {
                    radius: plot.radius,
                    //                 "name": "Coors Field",
                    //                 "amenity": "Baseball Stadium",
                    //                 "popupContent": "This is where the Rockies play!"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates":
                        [plot.lng, plot.lat],
                }
            }
        })
    }
}).addTo(map)

let newLocationMarker
let newLocation

let minRadius = 0
let selectStage = 0

function setRadiusHandler(e) {
    const radiusBoundary = e.latlng
    // const distance = ruler.distance([newLocation.lat, newLocation.lng], [radiusBoundary.lat, radiusBoundary.lng]);
    const distance = map.distance(newLocation, radiusBoundary)
    if (distance > minRadius) {
        newLocationMarker.setRadius(distance)
        return {radius: distance}
    }
    return {radius: minRadius}
}

let radius
map.on('click', function (e) {
    // if (newLocation) {
    //     console.log(`lat=${newLocation.lat}&lng=${newLocation.lng}`)
    //     console.log(`${L.GeoJSON.latLngToCoords(newLocation)}`)
    // }

    if (selectStage === 1) {
        selectStage = 0

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

        newLocationMarker = new L.circle(newLocation, {radius: minRadius}).addTo(map)

        map.on('mousemove', e => {
            radius = setRadiusHandler(e).radius
        })
    }
})
