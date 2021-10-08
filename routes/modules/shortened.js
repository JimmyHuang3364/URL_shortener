const express = require('express')
const router = express.Router()
const URLshortener = require('../../models/URLshortener')
const randomString = require('../../public/javascripts/random-string')

router.get('/', (req, res) => {
  return res.render('shortened')
})

router.post('/', (req, res) => {
  const originalURL = req.body.originalURL

  URLshortener.findOne({ originalURL: originalURL })
    .then((URLdata) => {
      console.log(`檢查資料庫中是否有此URL:`)
      if (URLdata) {
        console.log('  此URL已存在資料庫.')
        const shortURL = URLdata.shortURL // 獲取短址名稱
        const originalURL = URLdata.originalURL // 獲取原址名稱
        return res.render('shortened', { shortURL, originalURL })
      } else if (!isNaN(URLdata)) {
        console.log('  此URL不存在資料庫.')
        addNewURLdata(originalURL)
      }
    })


  // function 生成隨機短址
  function addNewURLdata(originalURL) {
    console.log(`    生成隨機短址`)
    const newShortURL = randomString(5)  // 生成隨機短址
    checkNewShortURL(newShortURL)  // 呼叫checkNewShortURL函式
    return URLshortener.create({  // 新增至資料庫
      originalURL,
      shortURL: newShortURL
    })
      .then((newURL) => {
        const shortURL = newURL.shortURL  // 獲取短址名稱
        const originalURL = newURL.originalURL // 獲取原址名稱
        return res.render('shortened', { shortURL, originalURL }) //渲染shortened.hbs並帶入短址名稱
      })
      .catch(error => console.log(error))
  }

  // function 檢查短址是否重複
  function checkNewShortURL(newShortURL) {
    URLshortener.findOne({ shortURL: newShortURL })
      .then((shortURLdata) => {
        console.log(`檢查隨機生成簡址是否用過:`)
        if (shortURLdata) {
          console.log('  The shortURL is used.')
          addNewURLdata(originalURL)
        } else if (!isNaN(shortURLdata)) {
          console.log('  The shortURL is unused.')
          return
        }
      })
  }



})

module.exports = router