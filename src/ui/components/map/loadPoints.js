import PlotMarker           from "./PlotMarker"
import {defaultMarkerStyle} from "./marker-styles"
import {attachMarkerColor}  from "../ColorPicker/calc"

export default function (map) {
    L.uGeoJSONLayer({
        endpoint: "/plot/map",
        debug: true,
        parameters: () => {
            const bounds = map.getBounds()
            const diagonalLength = map.distance(bounds.getSouthEast(), bounds.getNorthWest())
            return {
                diagonalLength
            }
        },
        pointToLayer: function (geoJsonPoint, latlng) {
            return PlotMarker({latlng, radius: geoJsonPoint?.properties?.radius})
        },
        style: function (feature) {
            const colors = {color: feature?.properties?.color}
            attachMarkerColor(colors)

            return defaultMarkerStyle(colors.innerColor, colors.borderColor)
        },
        transformData(data) {
            data = data || []
            // sort sets the z-index properly
            data = data.sort((a,b) => a.sizeRank - b.sizeRank)
            return data.map(plot => {
                return {
                    "type": "Feature",
                    "properties": {
                        ...plot,
                        // id: plot.id,
                        // radius: plot.radius,
                        //                 "name": "Coors Field",
                        //                 "amenity": "Baseball Stadium",
                        //                 "popupContent": "This is where the Rockies play!"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [plot.lng, plot.lat],
                    }
                }
            })
        }
    }).addTo(map)
}
