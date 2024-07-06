import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import vector from '../Assets/Vector.png'
import { Container, IconButton } from '@mui/material';



import MenuIcon from '@mui/icons-material/Menu';

import { ArrowBack, Logout } from '@mui/icons-material';

const drawerWidth = 240;

export default function HomePageLayout({ children, drawerItems }) {

    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    const drawer = (<>
        <IconButton aria-label="back" style={{ position: 'absolute', color: "#2D9596" }}>
            <ArrowBack />
        </IconButton>
        <Box
            sx={{

                my: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',

            }}
        >
            <img src={vector} style={{
                marginBottom: 2,
                height: '80px',
                width: '80px'
            }
            } />
        </Box>

        {drawerItems}
        <IconButton style={{ position: 'absolute', bottom: '0', right: "50%", left: "50%", color: "#2D9596" }}>
            <Logout fontSize='large'></Logout>
        </IconButton>
    </>);

    return (
        <>
            <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <AppBar
                        position="fixed"
                        sx={{
                            background: "#2D9596",
                            display: { sm: 'none' },
                            width: { sm: `calc(100% - ${drawerWidth}px)` },
                            ml: { sm: `${drawerWidth}px` },
                        }}
                    >
                        <Toolbar>
                            <IconButton

                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2, display: { sm: 'none' } }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" noWrap component="div">
                                Responsive drawer
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Box
                        component="nav"
                        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                        aria-label="mailbox folders"
                    >
                        <Drawer
                            variant="temporary"
                            open={mobileOpen}
                            onTransitionEnd={handleDrawerTransitionEnd}
                            onClose={handleDrawerClose}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                            sx={{
                                display: { xs: 'block', sm: 'none' },
                                width: drawerWidth,
                                flexShrink: 0,
                                '& .MuiDrawer-paper': {
                                    width: drawerWidth,
                                    boxSizing: 'border-box',
                                    borderColor: "#2D9596",
                                    bgcolor: '#EBFDFF'
                                },
                            }}
                            anchor="left"

                        >

                            {drawer}


                        </Drawer>
                        <Drawer
                            anchor="left"

                            variant="permanent"
                            sx={{
                                display: { xs: 'none', sm: 'block' },
                                '& .MuiDrawer-paper': {
                                    boxSizing: 'border-box', width: drawerWidth, borderColor: "#2D9596",
                                    bgcolor: '#EBFDFF'
                                },

                            }}
                            open
                        >
                            {drawer}
                        </Drawer>
                    </Box>
                </Box>
                <Box
                    component="main"
                    className="MainContent"
                    sx={{
                        px: { xs: 2, md: 6 },
                        pt: { md: 3, },
                        pb: { xs: 2, sm: 2, md: 3 },
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        minWidth: 0,
                        height: '100dvh',
                        gap: 1,
                        bgcolor: "#EBFDFF"

                    }}
                >


                    {children}
                </Box>
            </Box>

        </>
    );
}