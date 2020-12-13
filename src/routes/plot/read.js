import getInBounds         from "../../model/plot/getInBounds"
import {getStoriesForPlot} from '../../model/story/getStories'
import buildPageHtml       from "../../buildPageHtml"

export default function (app) {
    return app
        .post('/plot/map', readInBounds)
        .get('/plot/map', readInBounds)
        .get('/plot/:id', showPlot)
}

async function showPlot(res, req) {
    const id = req.getParameter(0)

    /* Can't return or yield from here without responding or attaching an abort handler */
    res.onAborted(() => {
        res.aborted = true;
    });

    const stories = await getStoriesForPlot(id)

    const html = buildPageHtml("FoodMaps", 'home', {stories})

    /* If we were aborted, you cannot respond */
    if (!res.aborted) {
        res.end(html)
    }
}

async function readInBounds(res, req) {
    res.writeHeader("content-type", "application/json")

    /* Can't return or yield from here without responding or attaching an abort handler */
    res.onAborted(() => {
        res.aborted = true;
    });

    let postData
    if (res.formData) postData = await res.formData()
    console.log(postData)

    const data = await getInBounds()

    /* If we were aborted, you cannot respond */
    if (!res.aborted) {
        res.end(JSON.stringify(data));
    }
}
