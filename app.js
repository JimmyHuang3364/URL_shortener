const express = require('express')
const app = express()

require('./config/mongoose')

app.get('/', (req, res) => {
  res.send('123123')
})

app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})
