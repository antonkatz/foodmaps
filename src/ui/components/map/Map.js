import layerCompose         from "layer-compose"
import ColorPicker          from "../ColorPicker/ColorPicker"
import {defaultMarkerStyle} from "./marker-styles"

const create = [
    {
        setMarker($, _, opt) {
            $.clearUnsaved()
            _.marker = opt
        },

        finalizeMarker($, _) {
            // const cs = $.colorPicker.getMarkerColors()
            // _.marker.setStyle({fillColor: cs.innerColor, color: cs.borderColor})
            _.marker.setStyle(defaultMarkerStyle())
            _.unsavedMarker = _.marker

            $.colorPicker.onChange()
        },

        clearUnsaved(_) {
            try {
                if (_.unsavedMarker) {
                    _.unsavedMarker.remove()
                }
            } catch {}
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
