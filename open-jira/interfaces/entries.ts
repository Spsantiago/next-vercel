

export interface Entry{
    _id: string;
    description:string
    createad:number
    status: EntryStatus
}

export type EntryStatus= 'pending'|'in-progres'|'finished';
