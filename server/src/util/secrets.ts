import dotenv from 'dotenv'
import { __prod__ } from './constants'

dotenv.config()

console.log(process.env['MONGODB_URI_LOCAL'])

export const MONGODB_URI = __prod__
  ? process.env['MONGODB_URI']
  : process.env['MONGODB_URI_LOCAL']

if (!MONGODB_URI) {
  if (__prod__)
    console.error(
      'No mongo connection string. Set MONGODB_URI environment variable.',
    )

  process.exit(1)
}
