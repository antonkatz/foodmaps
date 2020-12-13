import createPlot  from "../model/plot/create"
import createStory from "../model/story/create"

export default async function ({lat, lng, radius, story}) {
    if (typeof story === 'string') story = story.trim()

    if ([lat, lng, radius].find(_ => !_)) {
        throw new Error('Missing required parameters')
    }

    console.log(lat, lng, radius, story)

    const plot = await createPlot({lat, lng, radius})
    const storyObj = await createStory({plotId: plot.id, story})

    return {plot, story: storyObj}
}
