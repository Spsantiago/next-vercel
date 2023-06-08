import { db, seedData } from '@/database';
import { Product } from '@/models';

import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    mensaje: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (process.env.NODE_ENV === 'production') {
        return res
            .status(401)
            .json({ mensaje: 'No tiene acceso a este servicio' });
    }

    await db.connect();
    await Product.deleteMany();
    await Product.insertMany(seedData.initialData.products);
    
    await db.disconnect();

    res.status(200).json({ mensaje: 'Proceso realizado con exito' });
}
