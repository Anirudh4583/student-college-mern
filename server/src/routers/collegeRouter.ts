import express from 'express'
import * as CollegeController from '../controllers/collegeController.'

var collegeRouter = express.Router()

collegeRouter.get('/', CollegeController.getAll)
collegeRouter.post('/similar', CollegeController.getSimilar)
collegeRouter.get('/group-states', CollegeController.getGroupState)
collegeRouter.get('/group-courses', CollegeController.getGroupCourse)
collegeRouter.post('/state', CollegeController.getByState)
collegeRouter.post('/course', CollegeController.getByCourse)

export default collegeRouter
