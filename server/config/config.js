'use strict'

const convict = require('convict')

const conf = convict({
  PORT: {
    doc: 'The port on which the server is running',
    format: Number,
    default: 8081,
    env: 'PORT',
  },
})

module.exports = conf
