import { json } from 'body-parser'
import pool from '../configs/connectDB'

let getHompage = async (req, res) => {
  const [rows, fields] = await pool.execute('SELECT * FROM users')
  return res.render('index.ejs', { dataUser: rows })
}
let getDetailPage = async (req, res) => {
  // req.params tra ve 1 object
  let userId = req.params.id
  let user = await pool.execute('select * from users where id = ?', [userId])
  console.log('check req params: ', user[0])
  // console.log('>> json string tify: ', JSON.stringify(user[0]))
  return res.send(JSON.stringify(user[0]))
}

let createNewuser = async (req, res) => {
  // in ra object
  console.log('>>>check req: ', req.body)

  // search: sql insert
  // de biet them khi dung cau lenh insert data tu phia client nhap data

  // cach 1: js destructuring
  // vi req.body la 1 object cho nen tra ve 4 gia tri
  let { firstName, lastName, email, address } = req.body

  // cach 2: khai bao theo kieu beginner
  // let firstName = req.body.firstName
  // let lastName = req.body.lastName
  // let email = req.body.email
  // let address = req.body.address

  await pool.execute(
    `insert
     into 
     users(firstName, lastName, email, address)
     values (?,?,?,?)`,
    [firstName, lastName, email, address],
  )

  // lenh chuyen huong ve trang chu
  return res.redirect('/')
}

module.exports = {
  getHompage,
  getDetailPage,
  createNewuser,
}
