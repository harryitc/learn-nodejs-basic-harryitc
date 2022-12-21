import express from 'express'
import homeController from '../controller/homeController'

let router = express.Router()

const initWebRoute = (app) => {
  router.get('/', homeController.getHompage)
  // có dấu ' : ' vì con số ID luôn thay đổi nên phải dùng ':'
  router.get('/detail/user/:id', homeController.getDetailPage)
  router.post('/create-new-user', homeController.createNewuser)
  router.post('/delete-user', homeController.deleteUser)
  router.get('/edit-user/:id', homeController.editUser)
  router.post('/update-user', homeController.updateUser)
  router.get('/about', (req, res) => {
    res.send(`I'm Cuong`)
  })

  return app.use('/', router)
}

export default initWebRoute
