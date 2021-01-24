import table                from "./table"
import {castValuesToNumber} from "../../utils"

const DENSITY_LIMITS = [0.01, 0.05, 0.3, 0.5]

export default async function (bounds) {
    bounds = castValuesToNumber(bounds)
    const {south, north, east, west, diagonalLength} = bounds

    /*
    * Fixme. highly inefficent approach
    * */
    const allRecords = await table.getAll()
    const maxRadius = diagonalLength / 3
    const maxPlotArea = Math.pow(maxRadius * Math.PI, 2)
    const mapArea = Math.pow(diagonalLength * Math.PI, 2)

    const locationFiltered = allRecords.map(castValuesToNumber).filter(r => {
        return r.lat < north
            && r.lat > south
            && r.lng > west
            && r.lng < east
            && r.radius < maxRadius
    })


    // let maxRank = 0
    const withSizeRank = locationFiltered.map(r => {
        const area = Math.pow(r.radius * Math.PI, 2)
        let sizeRank = Math.round(100 - Math.sqrt(area / maxPlotArea) * 100)
        // if (maxRank < sizeRank) maxRank = sizeRank
        if (sizeRank < 0) sizeRank = 0
        return {...r, sizeRank, area}
    })

    /*
    * On the map we want to not overwhelm the user with too many markers, yet we still want to display a depth of sizes
    * Thus we split all markers into 3 groups, and filter them based on density for each group
    * */
    // const groups = [maxRank * 0.75, maxRank * 0.5, maxRank * 0.25, 0]
    const groups = [90, 75, 50, 0]
    const preSecondPass = withSizeRank.map(r => {
        return {...r, sizeGroup: groups.findIndex(g => r.sizeRank >= g), randomSortOrder: Math.random()}
    }).sort((a, b) => a.randomSortOrder - b.randomSortOrder)

    const groupAreaSums = [0, 0, 0, 0]
    const groupDensities = [0, 0, 0, 0]
    const final = preSecondPass.filter(r => {
        const groupDensity = groupDensities[r.sizeGroup]
        if (groupDensity <= DENSITY_LIMITS[r.sizeGroup]) {
            groupAreaSums[r.sizeGroup] += r.area
            groupDensities[r.sizeGroup] = groupAreaSums[r.sizeGroup] / mapArea
            return true
        }
        return false
    })

    return final
}
