import create from "../model/story/create"

export default function ({story, plotId}) {
    const timestamp = Date.now()

    return create({story, plotId, timestamp})
}
