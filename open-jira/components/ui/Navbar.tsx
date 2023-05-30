import { useContext } from 'react';

import NextLink from 'next/link';
import { AppBar, Toolbar, IconButton, Link } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

import { Typography } from "@mui/material";

import { UiContext } from '@/context/ui';


export const Navbar = () => {

    const {openSideMenu} = useContext(UiContext)
    
    return (
        <AppBar position="sticky" >
            <Toolbar>
                <IconButton 
                size='large'
                edge= 'start'
                onClick={openSideMenu }
                >
                    <MenuOutlinedIcon />
                </IconButton>
      
                <Link href='/'underline='none' color='#fff'>
                <Typography variant='h6'>Open Jira </Typography>
                </Link>
            
            </Toolbar>
        </AppBar>
    );
};
