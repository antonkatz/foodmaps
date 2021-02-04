export function defaultMarkerStyle(innerColor, borderColor) {
    return makeStyle(innerColor, borderColor)
}

function makeStyle(innerColor, borderColor) {
    return {
        fillColor: innerColor || "#ff7800",
        color: borderColor || '#000000',
        weight: 2,

        fillOpacity: 0.7,
        opacity: 0.7, // stroke

        stokeWeight: 5,
    }
}
