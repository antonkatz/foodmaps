export function defaultMarkerStyle() {
    return makeStyle()
}

function makeStyle() {
    return {
        fillColor: "#ff7800",
        color: '#000000',
        weight: 1,

        fillOpacity: 0.7,
        opacity: 0.7, // stroke

        stokeWeight: 5,
    }
}
