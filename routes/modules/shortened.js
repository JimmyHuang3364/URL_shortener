const express = require('express')
const router = express.Router()
const URLshortener = require('../../models/URLshortener')
const randomString = require('../../public/javascripts/random-string')

router.get('/', (req, res) => {
  return res.render('shortened')
})

router.post('/', (req, res) => {
  const originalURL = req.body.originalURL
  console.log(randomString(5))
  return URLshortener.create({
    originalURL,
    shortURL: randomString(5)
  })
    .then((URL) => res.redirect(`/shortened/${URL.shortURL}`))
    .catch(error => console.log(error))
})

module.exports = router