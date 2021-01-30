import layerCompose from "layer-compose"
import ColorPicker  from "../ColorPicker/ColorPicker"

const create = [
    {
        setMarker(_, opt) {
            _.marker = opt
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
