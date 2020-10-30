const { default: buildPageHtml } = require("./buildPageHtml");

const sendfile = require('./server-utils/sendfile')

require("uWebSockets.js").App()
    .get('/', (res, req) => {
      const html = buildPageHtml("FoodMaps", 'home', {datetime: new Date().toISOString()}) 
      res.end(html);
    })
    .get('/static/styles/:path', (res, req) => {
      try {
        const file = __dirname + '/static/styles/' + req.getParameter(0)
        sendfile(res, req, file)
      } catch {
        res.writeStatus('404').end()
      }
    })
    .get('/*', (res, req) => {
      console.log('Not found')
      res.writeStatus('404').end()
    })
    .listen(8080, (listenSocket) => {
  if (listenSocket) {
    console.log('Listening to port 8080');
  }
});