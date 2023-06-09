import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import { db } from '@/database';
import { Entry, IEntry } from '@/models';

type Data = { menssage: string } | IEntry;

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { id } = req.query;

    if (!mongoose.isValidObjectId(id)) {
        return res.status(400).json({ menssage: 'El id no es valido ' + id });
    }

    switch (req.method) {
        case 'PUT':
            return updateEntry(req, res);
        case 'GET':
            return getEntry(req, res);

        default:
            return res.status(200).json({ menssage: 'Metodo no existe' });
    }
}

const updateEntry = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    await db.connect();

    const entryToUpdate = await Entry.findById(id);

    if (!entryToUpdate) {
        await db.disconnect();
        return res.status(400).json({ menssage: 'El Id no existe ' });
    }

    const {
        description = entryToUpdate.description,
        status = entryToUpdate.status,
    } = req.body;

    try {
        const updateEntry = await Entry.findByIdAndUpdate(
            id,
            { description, status },
            { runValidators: true, new: true }
        );
        await db.disconnect();
        res.status(200).json(updateEntry);
    } catch (error: any) {
        await db.disconnect();
        res.status(400).json({ menssage: error.errors.status.menssage });
    }
};

const getEntry = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    await db.connect();
    const entryToGet = await Entry.findById(id);
    await db.disconnect();

    if (!entryToGet) {
        return res.status(400).json({ menssage: 'El Id no existe ' });
    }

    return res.status(200).json(entryToGet);
};
