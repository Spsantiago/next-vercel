import { ShopLayout } from '@/components/layout';
import {
    Box,
    Button,
    FormControl,
    Grid,
    MenuItem,
    Select,
    TextField,
    Typography,
} from '@mui/material';
import React from 'react';

const AddressPage = () => {
    return (
        <ShopLayout
            title={'Dirección de envío'}
            pageDescription={'Confirmar direccion de destino'}
        >
            <Typography variant='h1' component='h1'>
                Dirección
            </Typography>

            <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={12} sm={6}>
                    <TextField label='Nombre' variant='filled' fullWidth />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField label='Apellido' variant='filled' fullWidth />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField label='Direccion' variant='filled' fullWidth />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        label='Dirección 2 (opcional)'
                        variant='filled'
                        fullWidth
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        label='Código Postal'
                        variant='filled'
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label='Cuidad' variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <Select variant='filled' label='País' value={1}>
                            <MenuItem value={1}>Costa Rica</MenuItem>
                            <MenuItem value={2}>Colombia</MenuItem>
                            <MenuItem value={3}>Honduras</MenuItem>
                            <MenuItem value={4}>El salvador</MenuItem>
                            <MenuItem value={5}>Mexico</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label='Teléfono' variant='filled' fullWidth />
                </Grid>
            </Grid>
            <Box sx={{ mt: 5 }} display='flex' justifyContent='center'>
                <Button color='secondary' className='circular-btn' size='large'>
                    Revisar pedido
                </Button>
            </Box>
        </ShopLayout>
    );
};

export default AddressPage;
