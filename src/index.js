const express = require('express')
const helmet = require('helmet')

const corsMiddleware = require('./middlewares/corsMiddleware')

require('dotenv').config()
const PORT = parseInt(process.env.PORT, 10) || 3000

const app = express()

app.use(helmet())
app.use(corsMiddleware)

app.get('/', (req, res) => res.send('Hello BAPI'))

app.listen(PORT)
