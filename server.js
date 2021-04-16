const express = require('express')
const app = express()
require('dotenv').config()
const expresslayouts = require('express-ejs-layouts') //Layout support for ejs in express
const path = require('path')
const bodyParser = require('body-parser')

//importing Routers
const suggestmovierouter = require('./routes/suggestmovie')
const homepagerouter = require('./routes/homepage')
const searchamovierouter = require('./routes/searchamovie')
//Middleware
app.use(express.json())
app.set('view engine', 'ejs')
app.use(expresslayouts)
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))

//Routers
app.use('/suggestamovie', suggestmovierouter)
app.use('/', homepagerouter)
app.use('/search', searchamovierouter)


app.listen(process.env.PORT, () => {
  console.log(`Running on ${process.env.PORT}`)
})
