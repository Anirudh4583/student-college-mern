import express from 'express'
import * as CollegeController from '../controllers/CollegeController.'

var collegeRouter = express.Router()

collegeRouter.get('/', CollegeController.getAll)
collegeRouter.post('/', CollegeController.getSimilar)

export default collegeRouter
