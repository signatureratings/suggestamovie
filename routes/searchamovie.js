const express = require('express')
const searchamovierouter = express.Router() //creating a Router
const axios = require('axios')

searchamovierouter.post('/', async function (req, res) {
  console.log(req.body)
  const data = req.body
  try {
    const result = await axios.get(
      'https://api.themoviedb.org/3/search/movie',
      {
        params: {
          api_key: process.env.API_KEY,
          language: 'en-US',
          query: data.moviename,
          include_adult: true,
          page: data.page && 1,
        },
        headers: {},
      }
    )
    //  console.log(result.data)
    if (result.status == 200) {
      res.render('home/search', { message: 'got the data', data: result.data })
    } else if (result.status == 422) {
      res.render('home/error', { message: 'ni tappe adhi' })
    } else if (result.status >= 500) {
      res.render('home/error', { message: 'idhi na tappu leh' })
    } else {
      res.render('home/error', { message: 'idhi evari tappu oh' })
    }
  } catch (err) {
    console.log(err.message)
    res.render('home/error', { message: 'idhi matram devudiki teliyali' })
  }
})

module.exports = searchamovierouter
