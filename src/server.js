import express from 'express'
import configViewEngine from './configs/viewEngine'
import initWebRoute from './route/web'
import initApi from './route/api'
// import connection from './configs/connectDB'
require('dotenv').config()

const app = express()
const port = process.env.PORT || 8080

console.log('>>>> check port: ', port)

// hỗ trợ gửi data từ client đến server
// => lấy được data từ phía client để xử lý
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// setup view engine
configViewEngine(app)
// init Web route
initWebRoute(app)
// init API route
initApi(app)

app.listen(port, () => {
  console.log(`Example app listening on port: http://localhost:${port}`)
})
