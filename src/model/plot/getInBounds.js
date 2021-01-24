import table                from "./table"
import {castValuesToNumber} from "../../utils"

export default async function (bounds) {
    bounds = castValuesToNumber(bounds)
    const {south, north, east, west, diagonalLength} = bounds

    /*
    * Fixme. highly inefficent approach
    * */
    const allRecords = await table.getAll()
    const maxRadius = diagonalLength / 3

    const filteredRecords = allRecords.filter(r => {
        r = castValuesToNumber(r)
        return r.lat < north
        && r.lat > south
        && r.lng > west
        && r.lng < east
        && r.radius < maxRadius
    })


    return filteredRecords.map(r => {
        return {...r, sizeRank: Math.round(100 - r.radius / maxRadius * 100)}
    })
}
