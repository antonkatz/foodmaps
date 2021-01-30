import {getStoriesForPlot} from '../../model/story/getStories'
import buildPageHtml       from "../../buildPageHtml"
import {readInBounds}      from "./readInBounds"
import {homeHandler}       from "../common-handlers"

export default function (app) {
    return app
        .post('/plot/map', readInBounds)
        .get('/plot/map', readInBounds)
        .get('/plot/:id', showPlot)
        .get('/plot', showPlotActions)
}

async function showPlot(res, req) {
    const id = req.getParameter(0)

    /* Can't return or yield from here without responding or attaching an abort handler */
    res.onAborted(() => {
        res.aborted = true
    })

    const stories = await getStoriesForPlot(id)

    const html = buildPageHtml("FoodMaps", 'home',
        {
            stories,
            plotId: id,
            sidebar: {
                isVisible: true
            }
        })

    /* If we were aborted, you cannot respond */
    if (!res.aborted) {
        res.end(html)
    }
}

async function showPlotActions(res, req) {
    const html = buildPageHtml("FoodMaps", 'home',
        {
            sidebar: {
                isVisible: true
            }
        })

    res.end(html)
}

