import {storyTableIndices} from "./table"

export async function getStoriesForPlot(plotId) {
    return storyTableIndices.plot.getAll(plotId)
}
