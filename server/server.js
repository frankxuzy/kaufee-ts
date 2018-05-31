const path = require('path')
const express = require('express')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))

server.get('*', (req, res) => {
  res.sendFile('index.html')
})

module.exports = server
