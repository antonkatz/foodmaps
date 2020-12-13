import table from "./table"
import {v4 as uuid}  from "uuid"

export default function ({lat, lng, radius}) {
    if (!(lat && lng && radius)) throw new Error(`Missing parameters to create a plot: ${lat}, ${lng}, ${radius}`)

    const id = uuid()

    table.overwrite({
        id, lat, lng, radius
    })
}
