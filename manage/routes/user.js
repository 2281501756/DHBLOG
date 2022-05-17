const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')

router.get('/get', userController.get)
router.get('/get/for/id', userController.getForID)
router.post('/create', userController.create)
router.get('/judge/account', userController.judge_account)
router.post('/update/photo', userController.updatePhoto)
router.post('/update/data', userController.updateData)

module.exports = router
