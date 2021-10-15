import { NextFunction, Request, Response } from 'express'
import { NativeError } from 'mongoose'
import { Student, StudentDoc } from '../models/Student'

export const getAll = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  Student.find((error: NativeError, data: StudentDoc) => {
    if (error) return next(error)

    console.log(data)
    return res.json(data)
  }).limit(100)
}

export const getFromCollege = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const { collegeId } = req.body

  console.log(collegeId)

  Student.find(
    { CollegeId: collegeId },
    (error: NativeError, data: StudentDoc) => {
      if (error) return next(error)

      console.log('students of college 🤘', data)
      // return res.json(data)
    },
  )

  // College.find((error: NativeError, data: CollegeDoc) => {
  //   if (error) return next(error)

  //   return res.json(data)
  // })
}
