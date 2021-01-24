import table from "./table"

function castValuesToNumber(bounds) {
    return Object.fromEntries(Object.entries(bounds).map(([k, v]) => {
        try {
            return [k, Number(v)]
        } catch {
            return [k,v]
        }
    }))
}

export default async function (bounds) {
    bounds = castValuesToNumber(bounds)
    const {south, north, east, west, diagonalLength} = bounds

    /*
    * Fixme. highly inefficent approach
    * */
    const allRecords = await table.getAll()
    const maxRadius = diagonalLength / 3

    return allRecords.filter(r => {
        r = castValuesToNumber(r)
        return r.lat < north
        && r.lat > south
        && r.lng > west
        && r.lng < east
        && r.radius < maxRadius
    })
}
