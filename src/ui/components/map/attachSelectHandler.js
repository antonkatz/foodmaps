export default function (marker) {
    marker.on('click', handler)
}

function handler(e) {
    console.log(e)
    const id = e.target?.feature?.properties?.id

    if (id) {
        up.visit("/plot/" + id)
    }
    return true
}
