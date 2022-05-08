const db = require('../util/db')
const crypto = require('crypto')
const { setToken, getToken } = require('../util/token')
const transporter = require('../util/transporter')

login = async (req, res) => {
  let pwd = req.query.password
  let md5 = crypto.createHash('md5')
  let newpwd = md5.update(pwd).digest('hex')
  const data = await db.asyncdbconnect('select * from user where account = ? and password = ?', [req.query.account, newpwd])
  if (data[0]) {
    let token = await setToken(data[0].id)
    res.json({
      data: data[0],
      token: token,
      message: 'succeed'
    })
  } else res.json({message: 'error'})
}

totalData = async (req, res) => {
  const data = await db.asyncdbconnect('select * from totaldata', [])
  res.json({
    data: data[0]
  })
  
}

useToken = async (req, res) => {
  let token = req.query.token
  let user = await getToken(token)
  if (user[0]) {
    res.json({
      user: user[0],
      message: 'succeed'
    })
  } else res.json({
    message: 'error'
  })
}

let emailList = []
function emailHasSendCode(email) {
  if(!emailList.length) return false
  for (let i = 0; i < emailList.length; i++) {
    let item = emailList[i]
    if (item.email === email) return true
  }
  return false  
}

sendEmailCode = (req, res) => {
  let email = req.query.email
  if (emailHasSendCode(email)) {
    res.json({ message: 'repetition' })
    return
  }
  let code = Math.floor(Math.random() * (9999 - 1000) + 1000) + ''
  emailList.push({
    "email": email,
    "code": code
  })
  console.log(emailList);
  let options = {
      from        : '"DHBLOG" <2281501756@qq.com>',
      to          : email,
      subject        : '一封来自DHBLOG的邮件',
      text          : '一封来自DHBLOG的邮件',
      html           : `<h1>验证码${code}</h1>`,
  };

  transporter.sendMail(options, function(err, msg){
      if(err){
          res.json({message: 'error'});
      }
      else {
          res.json({message: 'succeed'});
      }
  });
}

acceptEmailCode = (req, res) => {
  if (!emailList.length) {
    res.json({ message: 'error' })
    return 
  }
  let email = req.query.email
  let code = req.query.code
  let flag = false
  for (let i = 0; i < emailList.length; i++) {
    let item = emailList[i]
    
    if (item.email === email && item.code === code) {
      emailList.splice(i - 1,1)
      flag = true
    }
  }
  if (flag === true) {
    console.log(emailList);
    res.json({ message: 'succeed' })
  }
  else res.json({message: 'error'})
}

module.exports = {
  login,
  totalData,
  useToken,
  sendEmailCode,
  acceptEmailCode
}