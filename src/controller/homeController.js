import connection from '../configs/connectDB'

let getHompage = (req, res) => {
  // logic
  // simple query
  let data = []
  connection.query('SELECT * FROM `users`', function (err, results, fields) {
    console.log(results) // results contains rows returned by server
    data = results.map((row) => {
      return row
    })
    return res.render('test/index.ejs', { dataUser: JSON.stringify(data) })
  })
  // console.log('>>> check data: ', typeof data, JSON.stringify(data))
}
module.exports = {
  getHompage,
}
