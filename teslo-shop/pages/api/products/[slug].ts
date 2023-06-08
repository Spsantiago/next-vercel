import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import { db } from '@/database';
import { Product } from '@/models';
import { IProduct } from '@/interfaces';
type Data = { menssage: string } |  IProduct;

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { slug } = req.query;

    //if (!mongoose.isValidObjectId(slug)) {
      //  return res.status(400).json({ menssage: 'El id no es valido ' + slug });
    //}

    switch (req.method) {
        case 'PUT':
            return updateProduct(req, res);
        case 'GET':
            return getProduct(req, res);

        default:
            return res.status(200).json({ menssage: 'Metodo no existe' });
    }
}

const updateProduct = async (req: NextApiRequest, res: NextApiResponse) => {
    const { slug } = req.query;
    await db.connect();

    const ProductToUpdate = await Product.findOne({slug});

    if (!ProductToUpdate) {
        await db.disconnect();
        return res.status(400).json({ menssage: 'El slug no existe ' });
    }

    const {
        description = ProductToUpdate.description,
    } = req.body;

    try {
        const updateProduct = await Product.findOneAndUpdate(
           { slug},
            { description, status },
            { runValidators: true, new: true }
        );
        await db.disconnect();
        res.status(200).json(updateProduct);
    } catch (error: any) {
        await db.disconnect();
        res.status(400).json({ menssage: error.errors.status.menssage });
    }
};

const getProduct = async (req: NextApiRequest, res: NextApiResponse) => {
    const { slug } = req.query;
    await db.connect();
    const productToGet = await Product.findOne({slug}).lean();
    await db.disconnect();

    if (!productToGet) {
        return res.status(400).json({ menssage: 'El Producto no Existe ' });
    }

    return res.status(200).json(productToGet);
};
