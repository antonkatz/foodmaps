export default function (map) {

    let newLocationMarker
    let newLocation

    let minRadius = 0
    let selectStage = 0

    function setRadiusHandler(e) {
        const radiusBoundary = e.latlng
        // const distance = ruler.distance([newLocation.lat, newLocation.lng], [radiusBoundary.lat, radiusBoundary.lng]);
        const distance = map.distance(newLocation, radiusBoundary)
        if (distance > minRadius) {
            newLocationMarker.setRadius(distance)
            return {radius: distance}
        }
        return {radius: minRadius}
    }

    let radius
    map.on('click', function (e) {
        if (selectStage === 1) {
            selectStage = 0

            if (newLocation) window.location =
                new URL(window.location.origin + `/plot/create?lat=${newLocation.lat}&lng=${newLocation.lng}&radius=${radius}`)

            map.off('mousemove', setRadiusHandler)
        } else {
            selectStage += 1

            if (newLocationMarker) {
                newLocationMarker.remove()
            }

            newLocation = e.latlng
            // ruler = new CheapRuler(newLocation.lat, 'meters');
            minRadius = map.getZoomScale(18, map.getZoom()) * 10
            radius = minRadius

            newLocationMarker = new L.circle(newLocation, {radius: minRadius}).addTo(map)

            map.on('mousemove', e => {
                radius = setRadiusHandler(e).radius
            })
        }
    })

    map.on('keydown', () => {
        // cancel
        if (selectStage !== 0) {
            selectStage = 0
            newLocationMarker.remove()
        }
    })
}
