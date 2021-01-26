import layerCompose from "layer-compose"

const create = [
    {
        setMarker(_, opt) {
            _.marker = opt
        },

        changeColor(_, opt) {
            _.marker.setStyle({fillColor: opt.color})
        }
    }
]

const Map = layerCompose(
    {
        create
    }
)({})

export default Map
