const express = require('express')
const homepagerouter = express.Router()

homepagerouter.get('/', async function (req, res) {
  res.render('home/index')
})


module.exports = homepagerouter
