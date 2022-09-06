import { dbConnect } from 'db/utils/database'
import User from 'db/models/User'

dbConnect()
/**
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
export default async function handler (req, res) {
  const { method } = req

  switch (method) {
    case 'GET':
      try {
        const user = await User.find({})
        return res.status(200).json(user)
      } catch (error) {
        console.error(error)
        return
      }
    case 'POST':
      return res.status(200).json('posting files')
    case 'UPDATE':
      return res.status(200).json('updating file')
    case 'DELETE':
      return res.status(200).json('deleting file')
    default:
      return res.status(400).json('invalid method')
  }
}
