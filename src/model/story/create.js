import table from "./table"
import {v4 as uuid}  from "uuid"

export default function ({plotId, story, timestamp}) {
    const id = uuid()

    return table.update(id, () => ({
        id, story, plotId, timestamp
    }))
}
