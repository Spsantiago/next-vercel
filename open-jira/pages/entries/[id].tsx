import { ChangeEvent, FC, useContext, useMemo, useState } from "react";

import { GetServerSideProps } from 'next'

import { capitalize, Button, Card, CardActions, CardContent, CardHeader, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, IconButton } from "@mui/material"
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

import { Entry, EntryStatus } from "@/interfaces";
import { Layout } from "@/components/layouts"

import { dbEntries } from "@/database";
import { EntriesContext } from '../../context/entries';
import { dateFunctions } from "@/utils";


const validStatus: EntryStatus[] = ['pending', 'in-progres', 'finished']


interface Props {
    entry: Entry
}

const EntryPage: FC<Props> = ({ entry }) => {
    const {uppdateEntry} = useContext(EntriesContext)

    const [inputValue, setInputValue] = useState(entry.description)
    const [status, setstatus] = useState<EntryStatus>(entry.status)
    const [touch, setTouch] = useState(false)
    const isNotValid = useMemo(() => inputValue.length == 0 && touch, [inputValue, touch])



    const onTextFieldChanges = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };
    const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {

        setstatus(event.target.value as EntryStatus)
    }

    const onSave = () => {

        if(inputValue.trim().length===0) return

        const updatedEntry:Entry={
            ...entry,
            status,
            description:inputValue
        }
        uppdateEntry(updatedEntry, true)
    }

    return (
        <Layout title={inputValue.substring(0, 20) + '...'}>
            <Grid
                container
                justifyContent='center'
                sx={{ marginTop: 2 }}
            >
                <Grid item xs={12} sm={8} md={6} lg={3}>
                    <Card>
                        <CardHeader
                            title={`Entrada: ${inputValue}`}
                            subheader= {dateFunctions.getFormantDistance(entry.createad)}
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


export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    const { id } = params as { id: string }

    const entry = await dbEntries.getENtryById(id)

    if (!entry) return { redirect: { destination: '/', permanent: false, } }

    return { props: { entry } }
}

export default EntryPage