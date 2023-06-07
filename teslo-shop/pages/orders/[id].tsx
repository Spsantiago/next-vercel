import { CardList, OrdenSummary } from '@/components/cart';
import { ShopLayout } from '@/components/layout';
import { CreditCardOffOutlined, CreditScoreOutlined } from '@mui/icons-material';
import {
    Box,
   
    Card,
    CardContent,
    Chip,
    Divider,
    Grid,
    Link,
    Typography,
} from '@mui/material';

import NextLink from 'next/link';

const OrderPage = () => {
    return (
        <ShopLayout
            title={'Resumen de compra'}
            pageDescription={'Resumen de la Orden'}
        >
            <Typography variant='h1' component='h1'> Orden : ABC123 </Typography>
            <Chip sx={{my:2}} label='Pendiente de pago' variant='outlined' color='error' icon={<CreditCardOffOutlined/>}/>
           
            <Grid container>
                <Grid item xs={12} sm={7}>
                    <CardList />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Card className='summary-card'>
                        <CardContent>
                            <Typography variant='h2'>
                                Resumen (3 Productos)
                            </Typography>
                            <Divider sx={{ my: 1 }} />

                            <Box display='flex' justifyContent='space-between'>
                                <Typography variant='subtitle1'>
                                    Dirección de entrega
                                </Typography>
                                <NextLink href='/checkout/address' passHref>
                                    <Link component={'span'} underline='always'>
                                        Editar
                                    </Link>
                                </NextLink>
                            </Box>

                            <Typography>Santiago Paredes</Typography>
                            <Typography>323 algun lugaer</Typography>
                            <Typography>aslgo</Typography>
                            <Typography>algo x2</Typography>
                            <Typography>+57 315311549</Typography>

                            <Divider sx={{ mt: 2, mb: 2 }} />
                            <Box display='flex' justifyContent='end'>
                                <NextLink href='/cart' passHref>
                                    <Link component={'span'} underline='always'>
                                        Editar
                                    </Link>
                                </NextLink>
                            </Box>
                            <OrdenSummary />
                            <Box sx={{ mt: 3 }}>
                              <h2>Pagar</h2>
                            </Box>
                            <Chip sx={{my:2}} label='Orden Pagada' variant='outlined' color='success' icon={<CreditScoreOutlined/>}/>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </ShopLayout>
    );
};

export default OrderPage;


