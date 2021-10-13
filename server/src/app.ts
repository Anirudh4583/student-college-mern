import express, { Request, Response } from 'express'
import compression from 'compression'
import cors from 'cors'
import mongoose from 'mongoose'
import { MONGODB_URI } from './util/secrets'

const app = express()

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
  })
  .catch((err) => {
    console.log(
      `MongoDB connection error. Please make sure MongoDB is running. ${err}`,
    )
    // process.exit();
  })

app.set('port', process.env.PORT || 3001)
app.use(cors())
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/hello', (req: Request, res: Response): void => {
  res.status(200).send('hello world! this is working sheeeeesh')
})

export default app
