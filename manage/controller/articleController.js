const db = require('../util/db')
const moment = require('moment');
moment.locale('zh-cn');


get = async (req, res) => {
  let num =  parseInt(req.query.num) || 0
  let pageSize = parseInt(req.query.pageSize) || 5
  db.dbconnect("SELECT  *  FROM `article` ORDER BY create_time DESC limit ?, ?", [num, pageSize], (err, data) => {
    if (err) {
      res.json({ message: 'error' })
      return 
    }
    data.map(item => { item.create_time = moment(item.create_time).format('YYYY-MM-DD h:mm:ss'); })
    db.dbconnect("SELECT  COUNT(*) as sum  FROM `article`", [], (err, data2) => {
      res.json({
        data: data,
        sum: data2[0].sum,
        message: 'succeed'
      })
    })
  }) 
}
// 获取文章i
getForid = async (req, res) => {
  const data = await db.asyncdbconnect("select * from article where id = ?", [req.query.id])
  if (data.length === 0) {
    res.json({
      data: data,
      message: 'error'
    })
    return 
  }
  data[0].create_time = moment(data[0].create_time).format('YYYY-MM-DD h:mm:ss');
  res.json({
    data: data,
    message: 'succeed'
  })
}

// 获取用户i的所有文章
getUserArticle = (req, res) => {
  db.dbconnect("select id,user_id, author,title,description,label,photo, comment,readnum,create_time  from article where user_id = ?", [req.query.id || 0], (err, data) => {
    if (err) res.json({ message: 'error' })
    data.map(item => {item.create_time = moment(item.create_time).format('YYYY-MM-DD');})
    res.json(data)
  })
}

getFavour = async (req, res) => {
  const data = await db.asyncdbconnect("SELECT  id, title, photo, readnum  FROM `article` ORDER BY readnum DESC limit 0, 4", [])
  res.json(data)
}

add = (req, res) => {
  let query = [req.body.author, req.body.title, req.body.description, req.body.content, req.body.label, req.body.photo, req.body.userID]
  console.log(query);
  db.dbconnect("INSERT into article (author, title, description, content, label,photo, create_time, user_id) VALUES (?, ?, ?, ?, ?,? ,NOW(), ?);", query, (err, data) => {
    if (err) {
      res.json({
        message: 'error',
      })
    } else {
      db.dbconnect('update totaldata set articlenum = articlenum + 1', [], () => {})
      res.json({
        message: 'succeed'
      })
    }
  })
}

modify = (req, res) => {
  let id = parseInt(req.body.id)
  let userID = parseInt(req.body.userID)
  db.dbconnect("update article set title = ?, description = ?, content = ?, label = ?, photo = ? where id = ? and user_id = ?", [req.body.title, req.body.description, req.body.content, req.body.label, req.body.photo, id, userID], (err, data) => {
    if (err) {
      res.json({ message: 'error' })
      return 
    }
    res.json({
      data: data,
      message: 'succeed'
    })
  })
}

readNumAdd = (req, res) => {
  let id = parseInt(req.query.id)
  db.dbconnect('update totaldata set readnum = readnum + 1', [], () => {})
  db.dbconnect('update article set readnum = readnum + 1 where id = ?', [id], (err, data) => {
    res.send(data)
  })
}

articleDelete = (req, res) => {
  db.dbconnect('delete from article where id = ? ', [req.body.id], (err, data) => {
    if(err) {
      res.json({ message: 'errror' })
      return 
    }
    res.json({message: 'succeed', data: data})
  })
}


module.exports = {
  get,
  getForid,
  add,
  modify,
  readNumAdd,
  getUserArticle,
  getFavour,
  articleDelete
}