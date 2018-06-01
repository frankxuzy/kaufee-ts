const path = require('path')
const express = require('express')

const authRoute = require('./routes/auth')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))
server.use('api/v1/auth', authRoute)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

module.exports = server
