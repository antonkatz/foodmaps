import table from "./table"
import {v4 as uuid}  from "uuid"

export default function ({plotId, color, story, timestamp}) {
    const id = uuid()

    return table.update(id, () => ({
        id, story, color, plotId, timestamp
    }))
}
