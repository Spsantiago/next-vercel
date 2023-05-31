import {DragEvent, FC, useContext} from 'react'
import { useRouter } from 'next/router';
import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'
import { UiContext } from '@/context/ui'
import { Entry } from '@/interfaces'
import { obtenerFechaLocal } from './';
import { dateFunctions } from '@/utils';


interface Props{
    entry:Entry
}



export const EntrieCard: FC<Props> = ({entry}) => {
    const router = useRouter()

    const {endDragging,startDragging} = useContext(UiContext)

    const onDragStart=(event: DragEvent)=>{
        startDragging()
        event.dataTransfer.setData('text', entry._id)
    }


    const onDragEnd= ()=>{
        endDragging()
    }
    const onClick=()=>{
        router.push(`/entries/${entry._id}`)
    }

  return (
    <Card
    sx={{marginBottom: 1}}
    draggable
    onDragStart={onDragStart}
    onDragEnd={onDragEnd}
    onClick={onClick}
    >

        <CardActionArea>
            <CardContent>
                <Typography sx={{whiteSpace: 'pre-line'}}>
                    {entry.description} 
                </Typography>
            </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2}}>
            <Typography variant='body2'>
                {dateFunctions.getFormantDistance(entry.createad)}
            </Typography>
        </CardActions>
        </CardActionArea>
    </Card>
  )
}
