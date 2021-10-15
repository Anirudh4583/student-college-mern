import express from 'express'
import * as studentController from '../controllers/studentController'

var studentRouter = express.Router()

studentRouter.post('/', studentController.getAll)
studentRouter.post('/from-college', studentController.getFromCollege)
// router.get('/', StudentController.)

export default studentRouter
