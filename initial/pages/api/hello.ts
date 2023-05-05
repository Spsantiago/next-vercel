

import { NextApiRequest, NextApiResponse } from "next";
type Data={
  name: string;
  edad: number
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ name: 'John Doe', edad:21 })
}
