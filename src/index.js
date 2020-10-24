const HomePage = require("./home.imba").Component

require("uWebSockets.js").App()
    .get('/*', (res, req) => {
      res.writeStatus('200 OK')
          .end(HomePage(new Date().toISOString()).toString());

    }).listen(3000, (listenSocket) => {
  if (listenSocket) {
    console.log('Listening to port 3000');
  }
});