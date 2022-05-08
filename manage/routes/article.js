const express = require('express')
const router = express.Router()
const articleController = require('../controller/articleController')

router.get('/get', articleController.get)
router.post('/modify', articleController.modify)
router.get('/get/favour', articleController.getFavour)
router.get('/getforid', articleController.getForid)
router.post('/add', articleController.add)
router.get('/read/num/add', articleController.readNumAdd)
router.get('/get/user/article', articleController.getUserArticle)
router.post('/delete', articleController.articleDelete)

module.exports = router
