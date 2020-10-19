require('../assets/compiled-templates')
const Handlebars = require("handlebars/runtime")

// noinspection JSConstantReassignment
Handlebars.partials = Handlebars.templates

// Require the framework and instantiate it
const fastify = require('fastify')({
    logger: true
})

// Declare a route
fastify.get('/', function (request, reply) {
    reply.send(Handlebars.templates.home({date: Date(), isNavOpen: true}))
})

// Run the server!
fastify.listen(3000, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
})
