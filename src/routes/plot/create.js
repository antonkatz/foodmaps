import buildPageHtml from "../../buildPageHtml"
import createPlot    from "../../actions/createPlot"

export default function (app) {
    return app
        //.get('/plot/create', handleCreate)
        .post('/plot/create', handleCreate)
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

    let whatsHere = {}
    if (res.formData) whatsHere = await res.formData() || {}

    const {plot} = await createPlot({...query, ...whatsHere})

    // const html = buildPageHtml("FoodMaps - Create plot", 'home', {query})
    /* If we were aborted, you cannot respond */
    if (!res.aborted) {
        const location = '/plot/' + plot.id
        res
            .writeStatus('303')
            .writeHeader('Location', location)
            .end();
    }
}
