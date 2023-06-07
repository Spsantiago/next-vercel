import { AuthLayout } from '@/components/layout';
import { Box, Grid, TextField, Typography } from '@mui/material';
import React from 'react';

const LoginPage = () => {
    return (
        <AuthLayout title={'Login Page'}>
            <Box sx={{ width: 350, padding: '10px 20px' }}>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant='h1' component={'h1'} >Iniciar Sesión </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label='correo' variant='filled' fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label='contraseña' type='password' variant='filled' fullWidth />
                    </Grid>
                </Grid>
            </Box>
        </AuthLayout>
    );
};

export default LoginPage;
