import { CardList, OrdenSummary } from '@/components/cart';
import { ShopLayout } from '@/components/layout';
import { Box, Button, Card, CardContent, Divider, Grid, Link, Typography, } from '@mui/material';

import NextLink from 'next/link';

const SummaryPage = () => {
    return (
        <ShopLayout
            title={'Resumen de compra'}
            pageDescription={'Resumen de la Orden'}
        >
            <Typography variant='h1' component='h1'>
               Resumen de la orden
            </Typography>
            <Grid container>
                <Grid item xs={12} sm={7}>
                    <CardList/>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Card className='summary-card'>
                        <CardContent>
                            <Typography variant='h2'>Resumen (3 Productos)</Typography>
                            <Divider sx={{ my: 1 }} />

                            <Box>
                                <NextLink href='/checkout/address' passHref>
                                    <Link component={'span'} underline='always' >
                                    Editar
                                    </Link>
                                </NextLink>
                            </Box>



                            <OrdenSummary />
                            <Box sx={{ mt: 3 }}>
                                <Button
                                    color='secondary'
                                    className='circular-btn'
                                    fullWidth
                                >
                                    Checkout
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </ShopLayout>
    );
};

export default SummaryPage;
