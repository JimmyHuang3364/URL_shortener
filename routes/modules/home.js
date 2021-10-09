const express = require('express')
const router = express.Router()
const URLshortener = require('../../models/URLshortener')

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/:shortURLdata', (req, res) => {
  const shortURLdata = req.params.shortURLdata
  URLshortener.findOne({ shortURL: shortURLdata })
    .then((URLdata) => {
      console.log('asdasd')
      console.log(URLdata.originalURL)
      res.redirect(`${URLdata.originalURL}`)
    })
})



module.exports = router