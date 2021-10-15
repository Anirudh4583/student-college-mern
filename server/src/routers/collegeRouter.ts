import express from 'express'
import * as CollegeController from '../controllers/CollegeController.'

var collegeRouter = express.Router()

collegeRouter.get('/', CollegeController.getAll)
collegeRouter.post('/similar', CollegeController.getSimilar)
collegeRouter.get('/states', CollegeController.getGroupState)
collegeRouter.get('/courses', CollegeController.getGroupCourse)

export default collegeRouter
