const express = require('express')
const router = express.Router()
const multer = require('multer')
const upload = require('../util/upload')

router.post('/', upload, (req, res) => {
  res.json({
    url: `/upload/${req.body.url}`
  })
})

module.exports = router