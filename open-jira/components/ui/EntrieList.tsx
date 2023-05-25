import { DragEvent, FC, useContext, useMemo } from 'react';

import style from './EntryList.module.css'

import { List, Paper } from '@mui/material';
import { EntrieCard } from './EntrieCard';
import { EntryStatus } from '@/interfaces';
import { EntriesContext } from '@/context/entries';
import { UiContext } from '@/context/ui';


interface Props{
    status: EntryStatus
}




export const EntrieList : FC <Props> = ({status}) => {
    const {isDraggin, endDragging} = useContext(UiContext)
    const {entries, uppdateEntry} = useContext(EntriesContext)
   
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const entriesByStatus= useMemo(() => entries.filter( entry=> entry.status === status), [entries])

    const allowDrop= (event:DragEvent<HTMLDivElement>)=>{
        event.preventDefault()
    }

    const onDropEntry =(event:DragEvent<HTMLDivElement>)=>{
        const id = event.dataTransfer.getData('text')
        const entry= entries.find(e=>e._id=== id)!
        entry.status= status
        uppdateEntry(entry)
        endDragging()
     }

    return (
        <div
        onDrop={onDropEntry}
        onDragOver={allowDrop}
        className={isDraggin ? style.dragging:''}
        >
            <Paper
                sx={{
                    height: 'calc(100vh - 200px)',
                    overflowY: 'scroll',
                    padding:1,
                    backgroundColor: 'transparent',
                    maxWidth: '100%',
                }}
            >
                <List sx={{ opacity: isDraggin ?0.2 :  1, transition:'all 0.3' }}>
                 {
                     entriesByStatus.map(entry=>(
                        <EntrieCard  key={entry._id}  entry={entry}/>

                    ))
                 }
                 

                </List>
            </Paper>
        </div>
    );
};
 //