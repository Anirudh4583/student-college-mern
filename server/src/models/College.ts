import mongoose from 'mongoose'

export type CollegeDoc = mongoose.Document & {
  Id: number
  Name: string
  YearFounded: number
  City: string
  State: string
  Country: string
  NoOfStudents: number
  Courses: string
}

const collegeSchema = new mongoose.Schema<CollegeDoc>(
  {
    Id: { type: Number, required: true },
    Name: { type: String, required: true, unique: true },
    YearFounded: { type: Number, required: true },
    City: { type: String, required: true },
    State: { type: String, required: true },
    Country: { type: String, required: true },
    NoOfStudents: { type: Number, required: true },
    Courses: String,
  },
  {
    collection: 'colleges',
  },
)

export const College = mongoose.model<CollegeDoc>('College', collegeSchema)
