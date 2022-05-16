const db = require('../util/db')
const crypto = require('crypto')
const BASEURL = require('../util/baseURl')

const get = async (req, res) => {
  const data = await db.asyncdbconnect('select * from user', [])
  res.json(data)
}
const getForID = async (req, res) => {
  const data = await db.asyncdbconnect('select * from user where id = ?', [
    req.query.id
  ])
  res.json(data)
}

const judge_account = async (req, res) => {
  const data = await db.asyncdbconnect(
    'select count(*) as count from user where account = ?',
    [req.query.account]
  )
  res.json(data)
}

const create = (req, res) => {
  let pwd = req.body.password
  let md5 = crypto.createHash('md5')
  let newpwd = md5.update(pwd).digest('hex')
  const data = [
    req.body.account,
    newpwd,
    req.body.nickname,
    req.body.email,
    req.body.description
  ]
  db.dbconnect(
    `insert into user (account, password, nickname, email, photo, description, create_time) values(?,?, ?, ?, '${BASEURL.port}/static/image/1.jpg', ?, NOW())`,
    data,
    (err, dbData) => {
      if (err) res.json({ message: 'error' })
      else {
        db.dbconnect('update totaldata set usernum = usernum + 1', [], () => {})
        res.json({
          data: dbData,
          message: 'succeed'
        })
      }
    }
  )
}

const updatePhoto = (req, res) => {
  const { photo, id } = req.body
  db.dbconnect("update user set photo = ? where id = ?", [photo, parseInt(id)], (err, data) => {
    if (err) {
      res.json({
        message: 'error'
      })
      return
    }
    res.json({
      message: 'success',
      data
    })
  })
}

module.exports = {
  get,
  getForID,
  create,
  judge_account,
  updatePhoto
}
