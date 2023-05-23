import {
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@mui/material';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts'];

export const Sidebar = () => {
    return (
        <Drawer
            anchor="left"
            open={true}
            onClose={() => console.log('cerrando')}
        >
            <Box sx={{ width: 250 }}>
                <Box sx={{ padding: '5px 10px' }}>
                    <Typography variant="h4">menu</Typography>
                </Box>
                <List
                    sx={{
                        width: '100%',
                        maxWidth: 360,
                        bgcolor: 'background.paper',
                    }}
                >
                    {menuItems.map((text, index) => (
                        <ListItem key={text} button>
                            <ListItemIcon>
                                {index % 2 ? (
                                    <InboxOutlinedIcon />
                                ) : (
                                    <EmailOutlinedIcon />
                                )}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider/>
                <List
                    sx={{
                        width: '100%',
                        maxWidth: 360,
                        bgcolor: 'background.paper',
                    }}
                >
                    {menuItems.map((text, index) => (
                        <ListItem key={text} button>
                            <ListItemIcon>
                                {index % 2 ? (
                                    <InboxOutlinedIcon />
                                ) : (
                                    <EmailOutlinedIcon />
                                )}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
               
            </Box>
        </Drawer>
    );
};
