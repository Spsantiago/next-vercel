// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  menssage: string | string[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const {menssage ='Bat Request'}= req.query
  res.status(400).json({ menssage })
}
