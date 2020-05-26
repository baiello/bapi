const express = require('express')

require('dotenv').config()
const PORT = parseInt(process.env.PORT, 10) || 3000

const app = express()

app.get('/', (req, res) => res.send('Hello BAPI'))

app.listen(PORT)
