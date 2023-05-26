import { UiContext } from '@/context/ui'
import { Entry } from '@/interfaces'
import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'
import {DragEvent, FC, useContext} from 'react'
import { obtenerFechaLocal } from './';


interface Props{
    entry:Entry
}



export const EntrieCard: FC<Props> = ({entry}) => {


    const {endDragging,startDragging} = useContext(UiContext)

    const onDragStart=(event: DragEvent)=>{
        startDragging()
        event.dataTransfer.setData('text', entry._id)
    }


    const onDragEnd= ()=>{
        endDragging()
    }


  return (
    <Card
    sx={{marginBottom: 1}}
    draggable
    onDragStart={onDragStart}
    onDragEnd={onDragEnd}
    >

        <CardActionArea>
            <CardContent>
                <Typography sx={{whiteSpace: 'pre-line'}}>
                    {entry.description} 
                </Typography>
            </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2}}>
            <Typography variant='body2'>
                {obtenerFechaLocal(entry.createad
                )}
            </Typography>
        </CardActions>
        </CardActionArea>
    </Card>
  )
}
