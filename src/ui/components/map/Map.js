import layerCompose         from "layer-compose"
import ColorPicker          from "../ColorPicker/ColorPicker"
import {defaultMarkerStyle} from "./marker-styles"

const create = [
    {
        setMarker(_, opt) {
            _.marker = opt
        },

        finalizeMarker($, _) {
            // const cs = $.colorPicker.getMarkerColors()
            // _.marker.setStyle({fillColor: cs.innerColor, color: cs.borderColor})
            _.marker.setStyle(defaultMarkerStyle())
            $.colorPicker.onChange()
        },

        changeColor(_, opt) {
            _.marker.setStyle({fillColor: opt.innerColor, color: opt.borderColor})
        },
    },
    {
        colorPicker: ColorPicker
    }
]

const Map = layerCompose(
    {
        create
    }
)({})

export default Map
