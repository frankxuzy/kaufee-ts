const express = require('express')

const db = require('../db/users')
const token = require('../auth/token')
const hash = require('../auth/hash')

const router = express.Router()

router.use(express.json())

router.post('/login', login, token.issue)

function login (req, res, next) {
  db.getCredsByName(req.body.username)
    .then(user => {
      return user && hash.verifyUser(user.hash, req.body.password)
    })
    .then(isValid => {
      if (!isValid) {
        return invalidCredentials(res)
      } else {
        return isValid && next()
      }
    })
    .catch(() => {
      res.status(400).json({
        errorType: 'DATABASE_ERROR'
      })
    })
}

function invalidCredentials (res) {
  res.status(400).json({
    errorType: 'INVALID_CREDENTIALS'
  })
}

module.exports = router
