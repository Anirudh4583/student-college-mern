import mongoose from 'mongoose'

export type StudentDoc = mongoose.Document & {
  id: number
  Name: string
  Batch: number
  CollegeId: mongoose.Schema.Types.ObjectId
  Skills: string
}

const studentSchema = new mongoose.Schema<StudentDoc>(
  {
    id: { type: Number, required: true },
    Name: { type: String, required: true },
    Batch: { type: Number, required: true },
    CollegeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'College',
      required: true,
    },
    Skills: String,
  },
  {
    collection: 'students',
  },
)

export const Student = mongoose.model<StudentDoc>('Student', studentSchema)
