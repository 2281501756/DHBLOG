const express = require('express')
const commentController = require('../controller/commentController')
const router = express.Router()

router.get('/get', commentController.get)
router.post('/add', commentController.addcomment)
router.post('/reply', commentController.reply)

module.exports = router
