import buildPageHtml from "../../buildPageHtml"
import createStory    from "../../actions/createStory"

export default function (app) {
    return app
        .post('/story', handleCreate)
}

async function handleCreate(res, req) {
    const host = req.getHeader('host')
    /* Can't return or yield from here without responding or attaching an abort handler */
    res.onAborted(() => {
        res.aborted = true;
    });

    const query = Object.fromEntries(
        new URLSearchParams(req.getQuery()).entries()
    ) || {}

    let storyData = {}
    if (res.formData) storyData = await res.formData() || {}

    const story = await createStory({...storyData})

    // const html = buildPageHtml("FoodMaps - Create plot", 'home', {query})
    /* If we were aborted, you cannot respond */
    if (!res.aborted) {
        // const location = '/plot/' + plot.id
        res
            .writeStatus('201')
            // .writeHeader('Location', location)
            .end(JSON.stringify(story));
    }
}
