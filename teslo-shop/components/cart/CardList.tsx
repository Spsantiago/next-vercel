import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardMedia,
    Grid,
    Link,
    Typography,
} from '@mui/material';
import { initialData } from '../../database/products';
import NextLink from 'next/link';
import { ItemConuter } from '../ui';
import { FC } from 'react';

const productsInCard = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],
];

interface Props {
    editable?: boolean;
}

export const CardList: FC<Props> = ({ editable =false}) => {
    return (
        <>
            {productsInCard.map((product) => (
                <Grid container spacing={2} key={product.slug} sx={{ mb: 1 }}>
                    <Grid item xs={6} sm={4} md={3}>
                        <NextLink
                            href='/product/slug'
                            passHref
                            prefetch={false}
                        >
                            <Link component={'span'}>
                                <CardActionArea>
                                    <CardMedia
                                        component='img'
                                        className='fadeIn'
                                        image={`/products/${product.images[0]}`}
                                        alt={product.title}
                                        sx={{ borderRadius: '5px' }}
                                    />
                                </CardActionArea>
                            </Link>
                        </NextLink>
                    </Grid>
                    <Grid item xs={7}>
                        <Box display={'flex'} flexDirection={'column'}>
                            <Typography variant='h5'>
                                {product.title}
                            </Typography>
                            <Typography variant='body1'>
                                Talla: <strong>M</strong>
                            </Typography>

                            {editable ? (
                                <ItemConuter />
                            ) : (
                                <Typography variant='h5'>3</Typography>
                            )}
                         
                        </Box>
                    </Grid>

                    <Grid
                        item
                        xs={2}
                        display={'flex'}
                        alignItems={'center '}
                        flexDirection={'column'}
                    >
                        <Typography variant='subtitle1'>
                            ${product.price}
                        </Typography>
                        {/*editable  */}
                        <Button variant='text' color='secondary' fullWidth>
                            remover
                        </Button>
                    </Grid>
                </Grid>
            ))}
        </>
    );
};
