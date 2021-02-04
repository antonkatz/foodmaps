import attachSelectHandler  from "./attachSelectHandler"
import {defaultMarkerStyle} from "./marker-styles"

export default function ({latlng, radius}) {
    const m = new L.circle(latlng, {
        radius: radius || 10,
        bubblingMouseEvents: false
    })
    attachSelectHandler(m)
    return m
}
