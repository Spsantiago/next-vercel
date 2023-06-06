import NextLink from 'next/link';

import { Box, Button, Link, Typography } from '@mui/material';

import { ShopLayout } from '@/components/layout';
import { RemoveShoppingCartOutlined } from '@mui/icons-material';

const EmptyPage = () => {
    return (
        <ShopLayout
            title={'Carrito Vacío'}
            pageDescription={'No existen articulos en el carrito de compras'}
        >
            <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                height='calc(100hv - 200px)'
                sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
            >
                <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
                <Box display='flex' flexDirection='column' alignItems='center'>
                    <Typography variant='h2'>Su carrito esta vacio</Typography>
                    <NextLink
                        href='/'
                        passHref
                        style={{ textDecoration: 'none' }}
                    >
                        <Link
                            component='span'
                            typography='h4'
                            color='secondary'
                        >
                            Regresar
                        </Link>
                    </NextLink>
                </Box>
            </Box>
        </ShopLayout>
    );
};

export default EmptyPage;
