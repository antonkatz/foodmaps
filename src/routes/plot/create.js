import buildPageHtml from "../../buildPageHtml"
import create        from "../../logic/plot/create"

export default function (app) {
    return app.get('/plot/create', handleCreate)
        .post('/plot/create', handleCreate)
}

async function handleCreate(res, req) {
    /* Can't return or yield from here without responding or attaching an abort handler */
    res.onAborted(() => {
        res.aborted = true;
    });

    const query = Object.fromEntries(
        new URLSearchParams(req.getQuery()).entries())
    let whatsHere
    if (res.formData) whatsHere = await res.formData()

    if (whatsHere) {
        console.log(whatsHere)
        create(query)
    }

    const html = buildPageHtml("FoodMaps - Create plot", 'home', {query})
    /* If we were aborted, you cannot respond */
    if (!res.aborted) {
        res.end(html);
    }
}
