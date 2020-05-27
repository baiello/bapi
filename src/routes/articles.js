const express = require('express')
const mongodb = require('mongodb')

const { getDb } = require('../utils/db')

const router = express.Router()

router.get('/', (req, res) => {
  const db = getDb()
  return db
    .collection('articles')
    .find()
    .toArray()
    .then(articles => res.json(articles))
    .catch(err => {
      throw new Error(err)
    })
})

router.get('/:id', (req, res) => {
  const db = getDb()
  return db
    .collection('articles')
    .find({ _id: mongodb.ObjectId(req.params.id) })
    .next()
    .then(article => res.json(article))
    .catch(err => {
      throw new Error(err)
    })
})

module.exports = router
