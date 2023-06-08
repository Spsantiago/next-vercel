import { SHOP_CONSTANTS, db } from '@/database';
import { IProduct } from '@/interfaces';
import { Product } from '@/models';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = { message: string } | IProduct[] | IProduct;

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    switch (req.method) {
        case 'GET':
            return getProduct(req, res);
        case 'POST':
            return postProduct(req, res);

        default:
            return res.status(400).json({ message: 'Enpoint no existe' });
    }
}

const getProduct = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const { gender = 'all' } = req.query;

    let condition = {};
    if (gender !== 'all' && SHOP_CONSTANTS.validGenders.includes(`${gender}`)) {
        condition = { gender };
    }

    await db.connect();
    const products = await Product.find(condition)
        .select('title images price inStock slug -_id')
        .lean();
    await db.disconnect();

    res.status(200).json(products);
};

const postProduct = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const { description } = req.body;
    const newProduct = new Product({
        description,
        createad: Date.now(),
    });
    try {
        await db.connect();
        newProduct.save();
        await db.disconnect();
        return res.status(200).json(newProduct);
    } catch (error) {
        await db.disconnect();
        console.log(error);

        return res.status(400);
    }
};
