import table from "./table"
import {v4 as uuid}  from "uuid"

export default function ({plotId, story}) {
    const id = uuid()

    table.overwrite({
        id, story, plotId
    })
}
