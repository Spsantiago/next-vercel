import { Box, Button, TextField } from '@mui/material';

import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { ChangeEvent, useContext, useState } from 'react';
import { EntriesContext } from '@/context/entries';
import { UiContext } from '@/context/ui';

export const NewEntries = () => {

    const {isAddingEntry, setIsAddingEntry} = useContext(UiContext)
    const [inputValue, setInputValue] = useState('');
    const [touched, setTouched] = useState(false);
    const { addNewEntry } = useContext(EntriesContext);

    const onTextFieldChanges = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const onSave = () => {
        if (inputValue.length === 0) return;
        addNewEntry(inputValue);
        setIsAddingEntry(false);
        setTouched(false);
        setInputValue('');
    };

    return (
        <Box sx={{ marginBottom: 2, paddingX: 2 }}>
            {isAddingEntry ? (
                <>
                    <TextField
                        fullWidth
                        sx={{ marginBottom: 1, marginTop: 2 }}
                        placeholder="Nueva Entrada"
                        autoFocus
                        multiline
                        label="Nueva Entrada"
                        helperText={
                            inputValue.length <= 0 &&
                            touched &&
                            'Ingrese Un Valor'
                        }
                        error={inputValue.length <= 0 && touched}
                        value={inputValue}
                        onChange={onTextFieldChanges}
                        onBlur={() => setTouched(true)}
                    />

                    <Box display="flex" justifyContent="space-between">
                        <Button
                            variant="outlined"
                            onClick={() => setIsAddingEntry(false)}
                        >
                            Cancelar
                        </Button>
                        <Button
                            variant="outlined"
                            color="secondary"
                            endIcon={<SaveAsOutlinedIcon />}
                            onClick={onSave}
                        >
                            GUARDAR
                        </Button>
                    </Box>
                </>
            ) : (
                <Button
                    startIcon={<AddCircleOutlineOutlinedIcon />}
                    fullWidth
                    variant="outlined"
                    onClick={() => setIsAddingEntry(true)}
                >
                    Agregar Nueva Entrada
                </Button>
            )}
        </Box>
    );
};
