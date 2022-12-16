# Video 1: What is Node.JS ? (V8 Engine)
# Video 2: Setup Environment (IDE/NODEJS)
# Video 3: Clients/Servers | Request/Response
# Video 4: NPM (Node Package Manager)
# Video 5: Express App (Hello World) 
# Video 6: View Engines
- Đây là cài thư viện: 
npm install --save-exact body-parser@1.20.1 nodemon@2.0.20 @babel/core@7.20.5 @babel/node@7.20.5 @babel/preset-env@7.20.2
- cau hinh babel compiler de viet duoc view engine va bien dich duoc code javascript.
Babel đơn giản chỉ là giúp chúng ta biên dịch code javascript trên toàn bộ các trình duyệt. Vì mọi browser là khác nhau nên cách viết js khác nhau.
Cho nên cái tên ES (ECMAScript) được ra đời để cho code js đáp ứng tất cả các trình duyệt.
Hiện tại (năm 2022) nhiều trình duyệt đang hỗ trợ ES5(ES version 5).
Ở thời điểm hiện tại thì cũng đã ra version 6 (ES6) (ra đời năm 2015). Nhưng, 1 số trình duyệt thì hỗ trợ - 1 số thì không.
Như vậy, trường hợp mà các bạn viết code dựa trên ES6 (hiện tại thì code JS đã dùng ES6 khá là nhiều rồi) thì sẽ không đáp ứng được tất cả các trình duyệt.
=> Cho nên cái tên Babel ra đời.

# Video 7: Static Files
- static files

- Use .env (dot env)
Muốn sử dụng .env, phải cài packages, "const port = process.env.PORT;"
Đây là cấu hình file môi trường `.env`
npm install --save-exact dotenv@16.0.3
const port = process.env.PORT || 8080
nghĩa là: nếu process.env.PORT bị undefined hay 1 lỗi gì đó nó sẽ sử dụng port 8080 thay thế.
Nếu bên trái chạy được thì bên phải không chạy.
=> Đây được gọi là 1 cách backup code.

# Video 8: Routers & MVC

# Video 9: Get Method

# Video 10: Routes Parameter
- Dùng await phải có asynce trên hàm, nó mới thực hiện được.
- await pool.execute truyền vào 2 tham số
  + cho nên là chỉ có thể dùng [0] hoặc [1]  
  + Ví dụ:
    + let getHompage = async (req, res) => {
        const [rows, fields] = await pool.execute('SELECT * FROM users') }
        return res.render('index.ejs', { dataUser: rows })
    => Ví dụ trên trả về <b>rows</b> và <b>fields</b>
* Đây được gọi là `js destructuring`
- ghi đúng SELECT * FROM users vì ta đã đặt ten table: là users

- Ví dụ: router.get('/detail/user/:id', homeController.getDetailPage)
    + :id : được gọi là `query params`

- Dùng promise

# Video 11: Form
- get data from client and update on server => process
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
- Không cần tải packages body-parser
  + Ở video này, chúng ta sẽ không cần install, vì body-parser hỗ trợ các project trước  2017
- Express hỗ trợ `body-parser` version <b>4.16.0</b>.
- Tại thời điểm tôi viết, version: <b>4.18.2</b>
- Khi install Express, thì chúng ta đã cài đặt packages thì các `dependencies` của `body-parser` rồi.
  + Cho nên, chúng ta không cần tải nữa.

- type = submit
code: `<button type="submit" class="btn-submit">Submit</button>`
Nếu chúng ta để type = "submit" browser sẽ hiểu rằng các bạn đang muốn gửi rwq lên server.
Cho nên chúng ta sẽ dùng submit

- METHOD: post
  + get data from client to create/update data on serverside 

- Thêm 1 kiến thức mới: Server Rendering & Client Rendering
Có thể search thêm để biết thêm chi tiết. :D

- res.redirect('PATH')
Chuyển hướng về trang chủ
PATH: link bạn muốn chuyển hướng tới
# Video 12: POST Method

# Video 13: CRUD

# Video 14: REST Api

# Video 15: Upload Files

# Part 1: Upload Single File

# Part 2: Upload Multiple Files

# Video 16: Middleware

# Video 17: What's next??
