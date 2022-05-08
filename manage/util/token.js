const db = require('./db')

const setToken = async (id) => {
  let token = ''
  for (let i = 1; i < 20; i++) {
    token += Math.floor(Math.random() * 10)
  }
  await db.asyncdbconnect('update user set token = ? where id = ?', [token, id])
  return token
}

const getToken = async (token) => {
  const user = await db.asyncdbconnect('select * from user where token = ?', [
    token
  ])
  return user
}

module.exports = {
  setToken,
  getToken
}
