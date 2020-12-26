import buildPageHtml from "../../buildPageHtml"
import createStory    from "../../actions/createStory"

export default function (app) {
    return app
        .post('/story', handleCreate)
}

async function handleCreate(res, req) {
    const referer = req.getHeader('referer')
    const query = Object.fromEntries(
        new URLSearchParams(req.getQuery()).entries()
    ) || {}

    /* Can't return or yield from here without responding or attaching an abort handler */
    res.onAborted(() => {
        res.aborted = true;
    });

    let storyData = {}
    if (res.formData) storyData = await res.formData() || {}

    const story = await createStory({...storyData})

    // const html = buildPageHtml("FoodMaps - Create plot", 'home', {query})
    /* If we were aborted, you cannot respond */
    if (!res.aborted) {
        if (query.redirectBack != null) {
            res.writeStatus('303')
                .writeHeader('X-Up-Location', referer)
                .writeHeader('Location', referer)
        } else {
            res.writeStatus('201')
                .writeHeader('Location', '/story/' + story.id)
        }

        res
            .end(JSON.stringify(story));
    }
}
