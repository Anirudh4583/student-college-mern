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
  const { collegeId } = req.body

  // console.log(collegeId)

  College.findOne({ id: collegeId }, (error: NativeError, data: CollegeDoc) => {
    if (error) return next(error)

    College.find(
      {
        id: { $ne: collegeId },
        State: data.State,
        Courses: data.Courses,
      },
      (error: NativeError, data: CollegeDoc) => {
        if (error) return next(error)

        // console.log('similar colleges 🤘', data)
        return res.json(data)
      },
    )
  })

  // College.find((error: NativeError, data: CollegeDoc) => {
  //   if (error) return next(error)

  //   return res.json(data)
  // })
}

export const getGroupState = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  let docs = College.aggregate(
    [{ $group: { _id: '$State', count: { $count: {} } } }],
    (error: NativeError, data: CollegeDoc) => {
      if (error) return next(error)

      // console.log('data', data)

      let newData = JSON.stringify(data).split('"_id":').join('"name":')
      newData = newData.split('"count":').join('"value":')
      newData = JSON.parse(newData)

      return res.json(newData)
    },
  )
}

export const getGroupCourse = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  let docs = College.aggregate(
    [{ $group: { _id: '$Courses', count: { $count: {} } } }],
    (error: NativeError, data: CollegeDoc) => {
      if (error) return next(error)

      // console.log('data', data)

      let newData = JSON.stringify(data).split('"_id":').join('"name":')
      newData = newData.split('"count":').join('"value":')
      newData = JSON.parse(newData)

      return res.json(newData)
    },
  )
}

export const getByState = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const { State } = req.body

  College.find(
    {
      State: State,
    },
    (error: NativeError, data: CollegeDoc) => {
      if (error) return next(error)

      // console.log('states colleges 🤘', data)
      return res.json(data)
    },
  )
}

export const getByCourse = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const { Courses } = req.body

  College.find(
    {
      Courses: Courses,
    },
    (error: NativeError, data: CollegeDoc) => {
      if (error) return next(error)

      console.log('courses colleges 🤘', data)
      return res.json(data)
    },
  )
}
