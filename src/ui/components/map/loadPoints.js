import PlotMarker           from "./PlotMarker"
import {defaultMarkerStyle} from "./marker-styles"

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
            return defaultMarkerStyle()
        },
        transformData(data) {
            data = data || []
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
                        "coordinates":
                            [plot.lng, plot.lat],
                    }
                }
            })
        }
    }).addTo(map)
}
