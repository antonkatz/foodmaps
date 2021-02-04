import table from "./table"
import {v4 as uuid}  from "uuid"

export default function ({lat, lng, radius, color}) {
    if (!(lat && lng && radius && color)) throw new Error(`Missing parameters to create a plot: ${lat}, ${lng}, ${radius}`)

    const id = uuid()

    const plot = {
        id, lat, lng, radius, color
    }
    return table.overwrite(plot).then(() => plot)
}
