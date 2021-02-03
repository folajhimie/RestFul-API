require('dotenv').config()

const express = require('express')
// const helmet = require('helmet')
// const morgan = require('morgan')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error',  (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

app.use(express.json())

const subscriberRouter = require('./routes/subscribers')
app.use('/subscribers', subscriberRouter)

app.listen(3000, () => console.log('Server is currently running...'))