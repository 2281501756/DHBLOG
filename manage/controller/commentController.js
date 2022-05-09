const db = require('../util/db')

const commentParentADDChild = async (commentParent) => {
  for (let i = 0; i < commentParent.length; i++) {
    let pid = commentParent[i].id
    let data = await db.asyncdbconnect("select * from comment_child where parent_id = ?", [pid])
    commentParent[i].children = data
  }
}

const get = async (req, res) => {
  let { articleID } = req.query
  let commentParent = await db.asyncdbconnect("select * FROM comment where article_id = ? ORDER BY date DESC", [parseInt(articleID)])
  await commentParentADDChild(commentParent)
  res.send(commentParent)
}

const addcomment = (req, res) => {
  let { userID, articleID, content } = req.body
  db.dbconnect("INSERT INTO  comment (user_id, article_id, content, date) VALUES(?, ?, ?, NOW())", [parseInt(userID), parseInt(articleID), content], (err, data) => {
    if (err) {
      res.json({
        message: 'error'
      })
      return
    }
    res.json({
      message: ' success',
      data
    })
  })
}

const reply = (req, res) => {
  let { userID, parent, content } = req.body
  console.log(userID, parent, content);
   db.dbconnect("INSERT INTO  comment_child (user_id, parent_id, content, date) VALUES(?, ?, ?, NOW())", [parseInt(userID), parseInt(parent), content], (err, data) => {
    if (err) {
      res.json({
        message: 'error'
      })
      return
    }
    res.json({
      message: ' success',
      data
    })
  })
}

module.exports = {
  addcomment,
  reply,
  get
}
