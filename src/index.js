const express = require('express')
const helmet = require('helmet')

const corsMiddleware = require('./middlewares/corsMiddleware')
const { connectDb } = require('./utils/db')

require('dotenv').config()
const PORT = parseInt(process.env.PORT, 10) || 3000

const app = express()

app.use(helmet())
app.use(corsMiddleware)

app.use('/articles', require('./routes/articles'))

app.get('/', (req, res) => res.send('Hello BAPI'))

connectDb(() => app.listen(PORT))
