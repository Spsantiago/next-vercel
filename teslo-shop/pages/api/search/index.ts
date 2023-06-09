import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    menssage: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    res.status(400).json({ menssage: 'Error, no hay parmetros de busqueda ' })
}