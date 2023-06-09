import { db } from '@/database';
import { Entry, IEntry } from '@/models';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = { message: string } | IEntry[]| IEntry;

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) { 
    switch (req.method) {
        case 'GET':
            return getEntry(res);
        case 'POST':
            return postEntry(req, res);

        default:
            return res.status(400).json({ message: 'Enpoint no existe' });
    }
}

const getEntry = async (res: NextApiResponse<Data>) => {
    await db.connect();

    const entries = await Entry.find().sort({ createad: 'ascending' });
    await db.disconnect();

    res.status(200).json(entries);
};

const postEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const { description } = req.body;
    const newEntry = new Entry({
        description,
        createad: Date.now(),
    });
    try {
        await db.connect();
        newEntry.save();
        await db.disconnect();
        return res.status(200).json(newEntry);
    } catch (error) {
        await db.disconnect()
        console.log(error)

        return res.status(400)
    }
};
