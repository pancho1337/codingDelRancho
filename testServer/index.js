const express = require('express')
const axios = require('axios')
const app = express()

app.get('/', function (req, res) {
  axios.get('https://api.chucknorris.io/jokes/random')
    .then(data => console.log(data.data))
})

app.listen(3000)
