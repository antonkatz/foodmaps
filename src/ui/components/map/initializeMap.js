export default function () {
    const accessToken = "pk.eyJ1IjoiYW5raG1vciIsImEiOiJjaWZ4MTk4b2Eza2tqdTZrc2s3Y2x3Y3FuIn0.3emrqX3oCouiiHJwUXdFdg"

    const map = L.map('map-container', {attributionControl: false,})

    map.locate({ setView: true, enableHighAccuracy: true, maxZoom: 17 })

    const logo = `<div id='logo'>
        <span>foodmaps</span>
        <span class="by"> by hue </span>
</div>`

    const attribution = `${logo}<div class="attribution">
Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>
</div>`

    const baseLayer = L.tileLayer.wms('https://api.mapbox.com/styles/v1/ankhmor/{id}/tiles/{tileSize}/{z}/{x}/{y}?access_token={accessToken}', {
        maxZoom: 18,
        id: 'ckgxxnwae12xc19plvvms6lys',
        tileSize: 256,
        zoomOffset: 0,
        accessToken
    }).addTo(map)

    const attributionCtrl = L.control.attribution({prefix: false})
    attributionCtrl.addAttribution(attribution)
    attributionCtrl.addTo(map)

    return { map, baseLayer }
}
