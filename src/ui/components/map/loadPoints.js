import attachSelectHandler from "./attachSelectHandler"

export default function (map) {
    L.uGeoJSONLayer({
        endpoint: "/plot/map",
        debug: true,
        pointToLayer: function (geoJsonPoint, latlng) {
            const m = new L.circle(latlng, {
                radius: geoJsonPoint?.properties?.radius || 10,
                bubblingMouseEvents: false
            })
            attachSelectHandler(m)
            return m
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
