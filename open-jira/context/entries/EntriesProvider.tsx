import { FC, useReducer } from 'react';

import { Entry } from '@/interfaces';

import { EntriesContext, entriesReducer } from './';
import {v4 as uuidv4}  from 'uuid';


export interface EntriesState {
    entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id:uuidv4(),
            description:'loren',
            status:'pending',
            createad: Date.now()
        },{
            _id:uuidv4(),
            description:'linea 2',
            status:'pending',
            createad: Date.now()-1000000
        },
        {
            _id:uuidv4(),
            description:'llalala',
            status:'in-progres',
            createad: Date.now()-100000
        }
    ],
};

interface Props {
    children: React.ReactNode;
}

export const EntriesProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

    const addNewEntry=(description: string)=>{
        const newEntry: Entry={
            _id: uuidv4(),
            description,
            createad: Date.now(),
            status: 'pending'
        }
        dispatch({type: '[Entry] Add-Entry', payload: newEntry})
    }

    return (
        <EntriesContext.Provider value={{ ...state , addNewEntry}}>
            {' '}
            {children}{' '}
        </EntriesContext.Provider>
    );
};
