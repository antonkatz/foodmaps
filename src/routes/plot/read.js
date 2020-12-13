import getInBounds from "../../logic/plot/getInBounds"

export default function (app) {
    return app
        .post('/plot/map', readInBounds)
        .get('/plot/map', readInBounds)
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
