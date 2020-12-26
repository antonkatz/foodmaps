import attachSelectHandler from "./attachSelectHandler"

export default function ({latlng, radius, geoJSON}) {
    const m = new L.circle(latlng, {
        radius: radius || 10,
        bubblingMouseEvents: false
    })
    attachSelectHandler(m)
    return m
}
