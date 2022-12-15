import { json } from 'body-parser'
import pool from '../configs/connectDB'

let getHompage = async (req, res) => {
  const [rows, fields] = await pool.execute('SELECT * FROM users')
  return res.render('index.ejs', { dataUser: rows })
}
let getDetailPage = async (req, res) => {
  let userId = req.params.id
  let user = await pool.execute('select * from users where id = ?', [userId])

  console.log('check req params: ', user[0])
  return res.send(JSON.stringify(user[0]))
}

module.exports = {
  getHompage,
  getDetailPage,
}
