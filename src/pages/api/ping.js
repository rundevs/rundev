/**
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
export default async function handler (req, res) {
  res.status(200).json('pong')
}
