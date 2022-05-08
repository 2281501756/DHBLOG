const express = require('express')
var crypto = require('crypto')
const db = require('../db')
const router = express.Router()

router.get('/login', (req, res) => {
  let data = req.query
  let account = data['account']
  let password = data['password']
  let md5 = crypto.createHash('md5')
  let newpassword = md5.update(password).digest('hex')
  let user = db.model('user')
  console.log(`account = '${account}' and password = '${newpassword}'`)
  user.find(
    `account = '${account}' and password = '${newpassword}'`,
    (err, data) => {
      if (data.length !== 0) {
        res.send({
          result: 'succeed',
          user: data[0]
        })
      } else {
        res.send({
          result: 'error'
        })
      }
    }
  )
})

router.get('/superlogin', (req, res) => {
  let data = req.query
  let account = data['account']
  let password = data['password']
  let md5 = crypto.createHash('md5')
  let newpassword = md5.update(password).digest('hex')
  let user = db.model('user')
  user.find(
    `account = '${account}' and password = '${newpassword}' and is_super = 1`,
    (err, data) => {
      if (data.length !== 0) {
        res.send({
          result: 'succeed',
          user: data[0]
        })
      } else {
        res.send({
          result: 'error'
        })
      }
    }
  )
})

router.get('/register', (req, res) => {
  let data = req.query
  let account = data['account'],
    password = data['password'],
    nickname = data['nickname'],
    gender = data['gender']
  let md5 = crypto.createHash('md5')
  let newpassword = md5.update(password).digest('hex')
  let user = db.model('user')
  user.sql(
    `insert into user values('${account}', '${newpassword}', '${nickname}', '${gender}', 0, 0 ,0, 0, 'http://localhost:3000/static/image/1.png')`,
    (err, data) => {
      if (err) {
        res.json({
          result: 'error'
        })
      } else {
        res.json({
          result: 'succeed',
          data: data
        })
      }
    }
  )
})

router.get('/findUser', (req, res) => {
  let user = db.model('user')
  user.find((err, data) => {
    res.send(data)
  })
})

router.post('/changeUser', (req, res) => {
  let data = req.body
  let user = db.model('user')
  user.update(
    `account='${data['account']}'`,
    {
      photo: data['photo'],
      nickname: data['nickname'],
      money: data['money'],
      is_super: data['is_super']
    },
    (err) => {
      if (err)
        res.send({
          result: 'error'
        })
      else {
        res.send({
          result: 'succeed'
        })
      }
    }
  )
})

router.get('/deleteUser', (req, res) => {
  let user = db.model('user')
  user.delete(`account='${req.query['account']}'`, () => {
    res.send({
      result: 'succeed'
    })
  })
})

router.get

module.exports = router
