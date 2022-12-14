import express from 'express'
import homeController from '../controller/homeController'

let router = express.Router()

const initWebRoute = (app) => {
  router.get('/', homeController.getHompage)

  router.get('/about', (req, res) => {
    res.send(`I'm Cuong`)
  })

  return app.use('/', router)
}

export default initWebRoute
