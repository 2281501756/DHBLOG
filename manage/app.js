const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')
const indexRouter = require('./routes/index')
const uploadRouter = require('./routes/upload')
const adminRouter = require('./routes/admin')
const acticleRouter = require('./routes/article')
const userRouter = require('./routes/user')
const port = 3000
const app = express()
app.use(cors())
app.use(cookieParser())
app.use(
  cookieSession({
    name: '',
    keys: ['QWEQWEQWEQEQW'],
    maxAge: 1000 * 60 * 60 //保存时间
  })
)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(indexRouter)
app.use('/upload', uploadRouter)
app.use('/admin', adminRouter)
app.use('/article', acticleRouter)
app.use('/user', userRouter)
app.use('/static', express.static('public'))
app.use('/upload', express.static('upload'))

app.listen(port, () => console.log(`Example app listening on port 3000!`))
