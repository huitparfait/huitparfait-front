'use strict'

const config = require('./config/config')
const Hapi = require('hapi')
const Inert = require('inert')

async function createServer () {

  const server = Hapi.server({
    port: config.get('PORT'),
  })

  await server.register([
    Inert,
  ])

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: 'dist',
      },
    },
  })

  server.ext('onPreResponse', (request, h) => {

    const response = request.response
    if (response.isBoom && response.output.statusCode === 404) {
      return h.file('dist/index.html').code(200)
    }

    return h.continue
  })

  return server
}

module.exports = { createServer }
