# Video 1: What is Node.JS ? (V8 Engine)
# Video 2: Setup Environment (IDE/NODEJS)
# Video 3: Clients/Servers | Request/Response
# Video 4: NPM (Node Package Manager)
# Video 5: Express App (Hello World) 
# Video 6: View Engines
- day la cai thu vien: 
npm install --save-exact body-parser@1.20.1 nodemon@2.0.20 @babel/core@7.20.5 @babel/node@7.20.5 @babel/preset-env@7.20.2
- cau hinh babel compiler de viet duoc view engine va bien dich duoc code javascript.
Babel don gian chi la giup chung ta bien dich code javascript tren toan bo cac trinh duyet. Vi moi browser la khac nhau nen cach viet javascript khac nhau.
Cho nen cai ten ES (ECMASciprt) duoc ra doi de cho code javasciprt dap ung tat ca cac trinh duyet. Hien tai (nam 2022) nhieu trinh duyet dang ho tro ES5(ES version 5). Hien tai thi cung da ra version 6 (ES6) (ra doi nam 2015). Nhung, 1 so trinh duyet thi ho tro ES6, 1 so khong.
Nhu vay, truong hop ma cac ban viet code dua tren ES6 (hien tai thi code javasciprt da dung ES6 kha la nhieu roi) thi se khong dap ung duoc tat ca cac trinh duyet.
cho nen cai ten babel ra doi.

# Video 7: Static Files
- static files

- su dung .env (dot env)
muon su dung .env, phai cai packages, "const port = process.env.PORT;"
Day la cau hinh file moi truong .env
npm install --save-exact dotenv@16.0.3
const port = process.env.PORT || 8080
nghia la: neu process.env.PORT bi undefined hay 1 loi gi do thi no se su dung port 8080 se thay the
Neu ben trai chay duoc, thi ben phai khong chay
=> Day duoc goi la 1 cach backup code khi truong hop bi loi

# Video 8: Routers & MVC

# Video 9: Get Method

# Video 10: Routes Parameter
- Dung await phai co async tren ham, no moi thuc hien duoc
- await pool.execute truyen vao 2 tham so
  + cho nen la, chi co the dung [0] hoac [1]  
  + vidu:
    + let getHompage = async (req, res) => {
        const [rows, fields] = await pool.execute('SELECT * FROM users') }
        return res.render('index.ejs', { dataUser: rows })
    => vi du tren tra ve rows va fields
* Day duoc goi la `js destructuring`
- ghi đúng SELECT * FROM users vì ta đã đặt ten table: là users

- vi du: router.get('/detail/user/:id', homeController.getDetailPage)
    + :id : duoc goi la `query params`

- Dung promise
# Video 11: Form
- get data from client and update on server => process
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
- Khong can tai packages body-parser
  + O video nay, chung ta se khong can install, vi body-parser ho tro truoc cac project truoc 2017
- Express ho tro `body-parser` version 4.16.0, Tai thoi diem toi viet, version: <b>4.18.2</b>
- Khi install Express, thi chung da cai dat cac `dependencies` cua `body-parser` roi.
  + Cho nen, chung ta khong can tai nua.

- type = submit
code: `<button type="submit" class="btn-submit">Submit</button>`
Neu chung ta de type = "submit" browser se hieu rang cac ban dang muon gui req len server.
Cho nen chung ta se dung submit 

- METHOD: post
  + get data from client to create/update data on serverside 

- Them 1 kien thuc moi: Server Rendering & Client Rendering
Co the search them de biet them chi tiet. :D

- res.redirect('PATH')
Chuyen huong ve trang chu
PATH: link ban muon chuyen huong toi
# Video 12: POST Method

# Video 13: CRUD

# Video 14: REST Api

# Video 15: Upload Files

# Part 1: Upload Single File

# Part 2: Upload Multiple Files

# Video 16: Middleware

# Video 17: What's next??