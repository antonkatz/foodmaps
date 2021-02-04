import createPlot  from "../model/plot/create"
import createStory from "../model/story/create"

export default async function ({lat, lng, radius, story, color}) {
    if (typeof story === 'string') story = story.trim()

    if ([lat, lng, radius].find(_ => !_)) {
        throw new Error('Missing required parameters')
    }

    console.log(lat, lng, radius, color, '--', story)

    const plot = await createPlot({lat, lng, radius, color})
    const storyObj = await createStory({plotId: plot.id, story, color})

    return {plot, story: storyObj}
}
