const express = require('express')
const router = express.Router()
const indexController = require('../controller/indexController')

router.get('/login', indexController.login)
router.get('/totalData', indexController.totalData)
router.get('/useToken', indexController.useToken)
router.get('/send/email/code', indexController.sendEmailCode)
router.get('/accept/email/code', indexController.acceptEmailCode)

module.exports = router