export default function (marker) {
    marker.on('click', handler)
}

function handler(e) {
    console.log(e)
    debugger
}
