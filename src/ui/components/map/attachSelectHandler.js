import Map from "./Map"

export default function (marker) {
    marker.on('click', handler)
}

function handler(e) {
    console.log(e)
    const id = e.target?.feature?.properties?.id

    if (id) {
        Map.create.clearUnsaved()
        up.visit("/plot/" + id)
    }
    return true
}
