import NextLink from 'next/link';
import {
    AppBar,
    Badge,
    Box,
    Button,
    IconButton,
    Link,
    Toolbar,
    Typography,
} from '@mui/material';
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';

export const Navbar = () => {
    return (
        <AppBar>
            <Toolbar>
                <NextLink href='/' passHref style={{textDecoration:'none'}}>
                    <Link component='span' display='flex' alignItems='center' >
                        <Typography variant='h6' color='#000' >Teslo |</Typography>
                        <Typography sx={{ marginLeft: 0.5 }}color='#000'>Shop</Typography>
             
                    </Link>
                </NextLink>

                <Box flex={1} />
                <Box sx={{display:{xs:'none',sm:'block'}}}>

                <NextLink href='/category/men' passHref legacyBehavior>
                    <Link>
                        <Button>Hombres</Button>
                    </Link>
                </NextLink>
                <NextLink href='/category/Women' passHref legacyBehavior>
                    <Link component={'span'}>
                        <Button>Mujeres</Button>
                    </Link>
                </NextLink>
                <NextLink href='/category/Kids' passHref legacyBehavior>
                    <Link>
                        <Button>Niños</Button>
                    </Link>
                </NextLink>
                </Box>

                <Box flex={1} />
                <IconButton>
                    <SearchOutlined />
                </IconButton>

                <NextLink href='cart' passHref legacyBehavior>
                    <Link>
                        <IconButton>
                            <Badge badgeContent={2} color='secondary'>
                                <ShoppingCartOutlined />
                            </Badge>
                        </IconButton>
                    </Link>
                </NextLink>

                <Button>menu</Button>
            </Toolbar>
        </AppBar>
    );
};
