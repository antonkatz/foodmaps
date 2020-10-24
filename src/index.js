const _fastify = require('fastify')

const home = require("./home.imba")
console.log(home)
console.log(home.Component.toString())

// Require the framework and instantiate it
const fastify = _fastify({
    logger: true
})

// Declare a route
fastify.get('/', function (request, reply) {
    reply
        .header('Content-Type', 'text/html')
        .send(home.Component.toString())
})

// Run the server!
fastify.listen(3000, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
})
