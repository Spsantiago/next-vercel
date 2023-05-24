import { useContext } from 'react';

import { AppBar, Toolbar, IconButton } from '@mui/material';
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
                <Typography variant='h6'>Open Jira </Typography>
            </Toolbar>
        </AppBar>
    );
};
