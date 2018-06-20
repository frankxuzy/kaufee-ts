const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const conn = require('knex')(config)

function getCredsByName (username, db = conn) {
  return db('creds')
    .select()
    .whereRaw('LOWER(username) LIKE ?', username.toLowerCase())
    .first()
}

module.exports = {
  getCredsByName
}
