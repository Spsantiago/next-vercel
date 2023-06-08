import { AuthLayout } from '@/components/layout';
import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material';
import NextLink from 'next/link';
import React from 'react';

const LoginPage = () => {
    return (
        <AuthLayout title={'Login Page'}>
            <Box sx={{ width: 350, padding: '10px 20px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant='h1' component={'h1'} >Iniciar Sesión </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label='correo' variant='filled' fullWidth  />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label='contraseña' type='password' variant='filled' fullWidth  />
                    </Grid>
                    <Grid item xs={12} display='flex' justifyContent='center'>
                        <Button color='secondary' className='circular-btn' size='large' >Ingresar</Button>
                    </Grid>
                    <Grid item xs={12} display='flex' justifyContent='end'>
                     <NextLink href='/auth/register' passHref>
                        <Link component={'span'} color={'#000'} underline='always'>
                            ¿No tienes una cuenta?
                        </Link>
                     </NextLink>
                    </Grid>
                </Grid>
            </Box>
        </AuthLayout>
    );
};

export default LoginPage;
