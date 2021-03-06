require('dotenv').config()
const express = require('express')
const cors = require('cors')
const  routes = require('./routes')

const app = express()

app.use(express.json())
app.use(cors())

app.use(routes)

app.use('/static', express.static(__dirname + '/public'))

app.use((req, res, next) => {
  const error = new Error('Not found')
  error.status = 404
  next(error)
})

app.use((error, req, res, next ) => {
  res.status(error.status || 500)
  res.json({error: error.message})
})

app.listen(process.env.APP_PORT || 4000, () => {
  console.log('Servidor rodando!' + process.env.APP_PORT)
})