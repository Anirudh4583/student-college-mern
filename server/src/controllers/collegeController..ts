import { NextFunction, Request, Response } from 'express'
import { NativeError } from 'mongoose'
import { College, CollegeDoc } from '../models/college'

export const getAll = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  College.find((error: NativeError, data: CollegeDoc) => {
    if (error) return next(error)

    return res.json(data)
  })
}

export const getSimilar = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const { college } = req.body

  console.log(college)

  // College.find((error: NativeError, data: CollegeDoc) => {
  //   if (error) return next(error)

  //   return res.json(data)
  // })
}
