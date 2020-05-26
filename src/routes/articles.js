const express = require('express')

const router = express.Router()

router.get('/', (req, res) => res.send('Articles list'))

router.get('/:slug', (req, res) => res.send(`Article ${req.params.slug}`))

module.exports = router
