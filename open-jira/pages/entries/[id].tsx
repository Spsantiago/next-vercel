import { ChangeEvent, FC, useMemo, useState } from "react";

import { GetServerSideProps } from 'next'

import { capitalize, Button, Card, CardActions, CardContent, CardHeader, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, IconButton } from "@mui/material"
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

import { EntryStatus } from "@/interfaces";
import { Layout } from "@/components/layouts"
import { isValidObjectId } from "mongoose";


const validStatus: EntryStatus[] = ['pending', 'in-progres', 'finished']

const EntryPage:FC = (props) => {

    const [inputValue, setInputValue] = useState('')
    const [status, setstatus] = useState<EntryStatus>('pending')
    const [touch, setTouch] = useState(false)
    const isNotValid = useMemo(() =>inputValue.length == 0 && touch , [inputValue,touch])



    const onTextFieldChanges = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };
    const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {

        setstatus(event.target.value as EntryStatus)
    }

    const onSave = () => {

    }

    return (
        <Layout title="... ... ...">
            <Grid
                container
                justifyContent='center'
                sx={{ marginTop: 2 }}
            >
                <Grid item xs={12} sm={8} md={6} lg={3}>
                    <Card>
                        <CardHeader
                            title={`Entrada: ${inputValue}`}
                            subheader={`Creada hace :  ... minutos `}
                        />
                        <CardContent>
                            <TextField
                                sx={{ marginTop: 2, marginBottom: 1 }}
                                fullWidth
                                placeholder="Nueva entrada "
                                autoFocus
                                multiline
                                label='Nueva Entrada'
                                value={inputValue}
                                onChange={onTextFieldChanges}
                                helperText={isNotValid && 'Ingrese un valor'}
                                onBlur={() => setTouch(true)}
                                error={isNotValid}
                            />
                            <FormControl>
                                <FormLabel>Estado:</FormLabel>
                                <RadioGroup
                                    row
                                    value={status}
                                    onChange={onStatusChange}
                                >
                                    {validStatus.map(option => (
                                        (<FormControlLabel key={option} value={option}
                                            control={<Radio />}
                                            label={capitalize(option)}
                                        />)
                                    ))}
                                </RadioGroup>
                            </FormControl>
                            <CardActions>
                                <Button
                                    startIcon={<SaveOutlinedIcon />}
                                    variant="contained"
                                    fullWidth
                                    onClick={onSave}
                                    disabled={inputValue.length <= 0}
                                >
                                    save
                                </Button>
                            </CardActions>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <IconButton
                sx={{
                    position: 'fixed',
                    bottom: 30,
                    right: 30,
                    backgroundColor: 'red'
                }}
            >
                <DeleteForeverOutlinedIcon />
            </IconButton>
        </Layout>
    )
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({params}) => {
    
    const {id} = params as {id:string}
    


    if(!isValidObjectId(id)){
        return{
            redirect:{
                destination:'/',
                permanent:false,
            }
        }
    }

    return {
        props: {
            id    
        }
    }
}

export default EntryPage