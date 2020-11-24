import getInBounds from "../../logic/plot/getInBounds"

export default function (app) {
    console.log(app)
    return app.get('/plot/map', readInBounds)
}

function readInBounds(res, req) {
    /* Can't return or yield from here without responding or attaching an abort handler */
    res.onAborted(() => {
        res.aborted = true;
    });

    const data = getInBounds()

    /* If we were aborted, you cannot respond */
    if (!res.aborted) {
        res.end(JSON.stringify(data));
    }
}
