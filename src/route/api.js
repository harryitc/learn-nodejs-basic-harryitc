import express from 'express'
import APIController from '../controller/APIController'
let router = express.Router()

const initApi = (app) => {
    router.get('/users', APIController.getAllUsers)// METHOD: GET -> READ
    router.post('/create-users', APIController.createNewUser)// METHOD: post -> CREATE DATA
    router.put('/update-users', APIController.updateUsers)// METHOD: PUT -> UPDATE DATA
    router.delete('/delete-users/:id', APIController.deleteUsers)// METHOD: DELETE -> xoa data
    return app.use('/api/v1', router)
}

export default initApi
