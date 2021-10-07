const express = require('express')
const router = express.Router()

// router.get('/', (req, res) => {
//   return res.render('shortened')
// })

router.post('/', (req, res) => {
  res.render('shortened')
})

module.exports = router