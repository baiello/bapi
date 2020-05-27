const { MongoClient } = require('mongodb')

require('dotenv').config()
const DB_URI = process.env.DB_URI
const DB_OPTIONS = { useNewUrlParser: true, useUnifiedTopology: true }

let _db

exports.connectDb = callback => {
  MongoClient.connect(DB_URI, DB_OPTIONS)
    .then(client => {
      _db = client.db()
      callback()
    })
    .catch(err => {
      throw new Error(err)
    })
}

exports.getDb = () => {
  if (_db) return _db
  throw new Error('No database found')
}
