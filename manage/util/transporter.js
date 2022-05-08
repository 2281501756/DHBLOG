const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
  service: 'qq', // 使用了内置传输发送邮件 查看支持列表：https://nodemailer.com/smtp/well-known/
  port: 465, // SMTP 端口
  secureConnection: true, // 使用了 SSL
  auth: {
    user: '2281501756@qq.com',
    // 这里密码不是qq密码，是你设置的smtp授权码
    pass: 'qyzogrggfscxebfc',
  }
})

module.exports = transporter