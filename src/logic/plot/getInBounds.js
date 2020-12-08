export default function () {
    return {
        type: "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "properties": {
                    "name": "Coors Field",
                    "amenity": "Baseball Stadium",
                    "popupContent": "This is where the Rockies play!"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates":
                        [-63.548955, 44.662304],
                }
            }
        ]
    }
}
