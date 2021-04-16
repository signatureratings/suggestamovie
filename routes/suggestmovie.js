const express = require('express')
const suggestmovierouter = express.Router() //creating a Router
const axios = require('axios')

suggestmovierouter.post('/', async function (req, res) {
  const data = req.body
  try {
    const result = await axios.get(
      'https://api.themoviedb.org/3/discover/movie',
      {
        params: {
          api_key: process.env.API_KEY,
          language: 'en-US',
          sort_by: 'popularity.desc',
          include_adult: data.adult,
          include_video: false,
          page: data.page,
        },
        headers: {},
      }
    )
    console.log(result.data)
    if (result.status == 200) {
      return res.render('movies/index', {
        statuscode: 200,
        message: 'details are good',
        data: result.data,
      })
    } else if (result.status == 422) {
      return res.render('movies/error', {
        statuscode: 422,
        message: 'parameters are wrong',
      })
    } else if (result.status >= 500) {
      return res.render('movies/error', {
        statuscode: 500,
        message: 'Server Problem',
      })
    } else {
      return res.render('movies/error', {
        status: result.status,
        message: 'Error due to invalid credentials',
      })
    }
  } catch (err) {
    console.log(err)
    return res.render('movies/error', { status: 500, message: 'big error' })
  }
})

module.exports = suggestmovierouter
