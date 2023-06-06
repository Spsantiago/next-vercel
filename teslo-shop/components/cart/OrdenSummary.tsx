import { Grid, Typography } from '@mui/material';
import React from 'react';

export const OrdenSummary = () => {
    return (
        <Grid container>
            <Grid item xs={6}>
                <Typography>No. Products</Typography>
            </Grid>
            <Grid item xs={6} display={'flex'} justifyContent='center'>
                <Typography>3</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography>Subtotal</Typography>
            </Grid>
            <Grid item xs={6} display={'flex'} justifyContent='center'>
                <Typography>$150</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography>Impuestos (15%)</Typography>
            </Grid>
            <Grid item xs={6} display={'flex'} justifyContent='center'>
                <Typography>${35.55}</Typography>
            </Grid>
            <Grid item xs={6} sx={{ mt: 4 }}>
                <Typography variant='subtitle1'>Total</Typography>
            </Grid>
            <Grid item xs={6} display={'flex'} justifyContent='center' sx={{ mt: 4.6 }} >
                <Typography>$500</Typography>
            </Grid>
        </Grid>
    );
};
