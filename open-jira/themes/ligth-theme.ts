import { createTheme } from '@mui/material';
import {  grey, red } from "@mui/material/colors";

export const ligththeme = createTheme({
    palette: {
        mode: 'light',
        background:{
            default: grey[400]
        },
        primary:{
            main: '#4a148c'
        },
        secondary:{
            main: '#19857b'
        },
        error:{
            main: red.A400
        }
    },
    components:{
        MuiAppBar: {
            defaultProps: {elevation:0},
            
            styleOverrides:{
                root:{
                    backgroundColor: '#4a148c',
                    
                }
            }
        }
    }
});
