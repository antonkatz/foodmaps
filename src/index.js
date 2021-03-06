import createPlots   from "./routes/plot/create"
import createStory   from "./routes/story/create"
import readPlots     from "./routes/plot/read"
import {homeHandler} from "./routes/common-handlers"

const {App} = require("@sifrr/server")
const sendfile = require('./server-utils/sendfile')

const port = parseInt(process.env.PORT, 10) || 80

function main() {
    console.log(`Attempting to start [${port}]`)

    const app = new App()
    app
        .get('/', homeHandler)
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
        .get('/*', (res) => {
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
    createStory(app)

    readPlots(app)
}

main()
