const multer = require('multer')
const path = require('path')

module.exports = (req, res, next) => {
  let fullPath = path.resolve(__dirname + '/../upload')
  let filename = ''
  let storage = multer.diskStorage({
    //设置文件存储路径
    destination: (req, file, cb) => {
      cb(null, fullPath)
    },
    //设置文件存储名称
    filename: (req, file, cb) => {
      let extname = path.extname(file.originalname)
      filename = 'DHBOLG-' + Date.now() + extname
      cb(null, filename)
    }
  })
  //上传单张图片
  let upload = multer({ storage }).single('file')
  upload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      res.send('multererr:' + err)
    } else if (err) {
      res.send('err:' + err)
    } else {
      //上传成功后，将图片写在req.body.photo中，继续住下执行
      req.body.url = filename
      next()
    }
  })
}
