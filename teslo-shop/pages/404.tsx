import { ShopLayout } from '@/components/layout';
import { Box, Typography } from '@mui/material';
import React from 'react';

const Custom404 = () => {
    return (
        <ShopLayout title={'Page Not Found'} pageDescription={''}>
            <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                height='calc(100hv -100px) '
                sx={{flexDirection:{xs:'column', sm:'row'}}}
            >
                <Typography
                    variant='h1'
                    component='h1'
                    fontSize={100}
                    fontWeight={200} 
                >
                    {' '}
                    404 |{' '}
                </Typography>
                <Typography
                  marginLeft={2}
                  
                >
                    {' '}
                    NO encontramos ninguna Pagina aquí
                </Typography>
            </Box>
        </ShopLayout>
    );
};

export default Custom404;
