const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const config = require('./config')
const responseMessage = require('./utils/responseMessage')
const statusCode = require('./utils/statusCode')

// app initialized
const app = express()

// middleware
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// importing routes
const stackRoutes = require('./routes/stack')

// routes

app.get('/', (req, res) => res.send('Welcome to Stack App'))
app.use('/stack', stackRoutes)

// default route
app.all('*', (req, res, next) => {
  return res.status(statusCode.Forbidden).json({
    status: statusCode.Forbidden,
    message: responseMessage.invalidPath
  })
})

app.listen(config.PORT, console.log(`Server is running on port ${config.PORT}`))
