const { default: buildPageHtml } = require("./buildPageHtml");

const sendfile = require('./sendfile')

require("uWebSockets.js").App()
    .get('/', (res, req) => {
      const html = buildPageHtml("FoodMaps", 'home', {datetime: new Date().toISOString()}) 
      res.end(html);
    })
    .get('/static/styles/*', (res, req) => {
      const file = __dirname + '/static/styles/905c8fcd2cb14a525b631930abcaba89.css'
      console.log('serving', file)
      sendfile(res, req, file)
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