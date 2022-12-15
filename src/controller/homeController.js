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

    // lệnh render này sẽ trả về view. Và gồm 2 tham số bên dưới.
    // Tham số 1: target (file views mà bạn muốn truyền vào)
    // tham số 2: key : value , bên dưới là key dataUser là 1 biến. và data: là 1 giá trị
    // Khi dùng key, muốn in ra biến dataUser từ file views là: <%= dataUser %>
    return res.render('index.ejs', { dataUser: data })
  })
  // console.log('>>> check data: ', typeof data, JSON.stringify(data))
}
module.exports = {
  getHompage,
}
