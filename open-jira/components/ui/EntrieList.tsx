import { FC, useContext, useMemo } from 'react';

import { List, Paper } from '@mui/material';
import { EntrieCard } from './EntrieCard';
import { EntryStatus } from '@/interfaces';
import { EntriesContext } from '@/context/entries';

interface Props{
    status: EntryStatus
}




export const EntrieList : FC <Props> = ({status}) => {

    const {entries} = useContext(EntriesContext)
   
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const entriesByStatus= useMemo(() => entries.filter( entry=> entry.status === status), [entries])

    

    return (
        <div>
            <Paper
                sx={{
                    height: 'calc(100vh - 200px)',
                   overflowY: 'scroll',
                    padding:1,
                    backgroundColor: 'transparent',
                    maxWidth: '100%',
                }}
            >
                <List sx={{ opacity: 1 }}>
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