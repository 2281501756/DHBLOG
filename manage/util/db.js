const mysql = require('mysql');
const config = {
  host: 'localhost',
  post: '3306',
  user: 'root',
  password: 'root',
  database: 'blog',
}

module.exports = {
  dbconnect: function (sql, data, callBack) {
    let pool = mysql.createPool(config)
    pool.getConnection((err, conn) => {
      if (err) {
        console.log('连接失败')
        return
      }
      conn.query(sql, data, callBack)
      conn.release()
    })
  },
  asyncdbconnect: function (sql, data) {
    return new Promise((resolve, reject) => {
      let pool = mysql.createPool(config)
      pool.getConnection((err, conn) => {
        if (err) {
          reject()
        }
        conn.query(sql, data, (err, data) => {
          if (err) reject()
          else resolve(data)
        })
        conn.release()
      })
    })
  }
}