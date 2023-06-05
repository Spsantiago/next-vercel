import React, { FC, useMemo, useState } from 'react';

import NextLink from 'next/link';

import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  Box,
  Typography,
  Link,
} from '@mui/material';

import { IProduct } from '@/interfaces';



interface Props {
    product: IProduct;
}

export const ProductCard: FC<Props> = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);
    const porductImage= useMemo(() =>
     { return isHovered?
      `products/${product.images[1]}`:
      `products/${product.images[0]}`
    }, 
     [isHovered,product.images])
    return (
        <Grid
            item
            xs={6}
            sm={4}
            md={3}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
         >
            <Card>
               <NextLink href='/product/slug' passHref prefetch={false}>
                <Link component={'span'}>
                <CardActionArea>
                    <CardMedia
                        component='img'
                        className='fadeIn'
                        image={porductImage}
                        alt={product.title}
                    />
                </CardActionArea>
                </Link>
               </NextLink>
            </Card>

            <Box sx={{ mt: 1 }} className='fadeIn'>
                <Typography fontWeight={500}> {product.title} </Typography>

                <Typography fontWeight={700}>$ {product.price} </Typography>
            </Box>
        </Grid>

);
};
