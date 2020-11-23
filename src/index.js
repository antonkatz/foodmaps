import createPlots from "./routes/plot/create"

const {App} = require("@sifrr/server")
const sendfile = require('./server-utils/sendfile')

const {default: buildPageHtml} = require("./buildPageHtml")

const port = parseInt(process.env.PORT, 10) || 80

function main() {
    console.log(`Attempting to start [${port}]`)

    const app = new App()
    app
        .get('/', (res, req) => {
            const html = buildPageHtml("FoodMaps", 'home', {datetime: new Date().toISOString()})
            res.end(html)
        })
        .get('/static/styles/:path', (res, req) => {
            try {
                const file = __dirname + '/static/styles/' + req.getParameter(0)
                sendfile(res, req, file)
            } catch {
                res.writeStatus('404').end()
            }
        })
        .get('/static/client/:folder', (res, req) => {
            try {
                const file = __dirname + '/../client/' + req.getParameter(0) + '/index.client.js'
                sendfile(res, req, file)
            } catch {
                res.writeStatus('404').end()
            }
        })
        .get('/*', (res, req) => {
            console.log('Not found')
            res.writeStatus('404').end()
        })
        .listen(port, (listenSocket) => {
            if (listenSocket) {
                console.log('Listening to port ' + port)
            } else {
                console.error('No socket')
            }
        })

    createPlots(app)
}

main()
