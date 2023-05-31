import { createContext } from 'react'

import { Entry } from '@/interfaces'


interface ContextProps{
    entries: Entry[]
    addNewEntry: (description: string) => void
    uppdateEntry: (entry: Entry ,showSnackbar:boolean) => void
}


export const  EntriesContext= createContext({}  as ContextProps)