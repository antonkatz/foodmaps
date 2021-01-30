import create from "../model/story/create"

export default function ({story, color, plotId}) {
    const timestamp = Date.now()

    return create({story, color, plotId, timestamp})
}
