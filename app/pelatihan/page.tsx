'use client'
import * as React from 'react';
import { AppBar, Box, CssBaseline, Divider, Drawer, Paper, IconButton, List, styled, ListItem, ListItemButton, ListItemIcon, Grid, ListItemText, Toolbar, Typography, Button, TextField, Container } from '@mui/material';
import { CenterFocusStrong, MoveToInbox as InboxIcon, Mail as MailIcon, Menu as MenuIcon } from '@mui/icons-material';
import Link from 'next/link';
import Image from 'next/image';
import EmailIcon from '@mui/icons-material/Email';
import SchoolIcon from '@mui/icons-material/School';
import CheckIcon from '@mui/icons-material/Check';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import MicNoneIcon from '@mui/icons-material/MicNone';
import SaveIcon from '@mui/icons-material/Save';
const handleLogin = () => {
    // if (email.trim() === '' || password.trim() === '') {
    //   // setShowAlert(true);
    // } else {
    //   // Perform login logic here
    //   console.log('Logging in...');
    //   // setShowAlert(false);
    //   window.location.href = '/dasbor';
    // }
    window.location.href = '/dasbor/profile';
};
const links = [
    {
        id: 1,
        title: "Beranda",
        url: "/",
    },
    {
        id: 2,
        title: "Data Diri",
        url: "/DataDiri",
    },
    {
        id: 3,
        title: "Pelatihan",
        url: "/dasbor/history",

    },
    {
        id: 4,
        title: "Kotak Masuk",
        url: "/dasbor/kotak-masuk",
    },
    {
        id: 5,
        title: "Jadwal",
        url: "/dasbor/kotak-masuk",
    },
    {
        id: 6,
        title: "Logout",
        url: "/dasbor/kotak-masuk",
    },
];
interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}
const drawerWidth = 240;

// Create the styled component
const ActiveListItem = styled(ListItem)(({ theme }) => ({
    textAlign: 'left',
    // Other CSS styles
}));

const CustomDivider: React.FC = () => {
    return <Divider
        sx={{
            maxWidth: '100%',
            margin: '10px auto',
        }} />;
};

export default function Pelatihan(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const [activeLink, setActiveLink] = React.useState(1);

    const drawer = (
        // ===================> START SIDEBAR <===================
        <div>
            <CssBaseline />
            <Toolbar sx={{ justifyContent: 'center' }}>
                <Typography style={{ fontSize: '25px', fontWeight: 'bolder' }}>
                    Sidebar Menu
                </Typography>
            </Toolbar>
            <Divider />
            <List>
                {links.map((link) => (
                    <ActiveListItem
                        key={link.id}
                        disablePadding
                        // Apply the active style based on activeLink state
                        sx={{
                            ...(activeLink === link.id
                                ? {
                                    backgroundColor: '#E6F6EC',
                                    color: '#006430',
                                }
                                : {}),
                            textAlign: 'left',
                        }}
                    >
                        <ListItemButton component="a" href={link.url} onClick={() => setActiveLink(link.id)}>
                            <ListItemText primary={link.title} sx={{
                                ml: 3,
                            }} />
                        </ListItemButton>
                    </ActiveListItem>
                ))}
            </List>
        </div>
    );
    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        // ===================> START APP BAR <===================

        <div style={{ display: 'flex' }} >
            <CssBaseline />
            <AppBar
                position="fixed"
                elevation={0}
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor: 'white',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                }}
            >
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ color: 'black', mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Image src="/logo_bpsdm.png" alt="My Image" width={70} height={30} />
                    <Link href="/dasbor">
                        <Typography style={{ color: 'black' }}>Profile</Typography>
                    </Link>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <CssBaseline />
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>

            {/* ====== MAIN CONTENT ====== */}
            <Box component={"main"} sx={{
                p: 4,
                width: { sm: `calc(100% - ${drawerWidth}px)` },
            }}>
                <CssBaseline />
                <Toolbar />
                <Box sx={{
                    mt: 1,
                    mb: 15,
                }}>
                    <Typography component={'h1'} variant='h5' fontWeight={'bold'} mb={1}>
                        Riwayat Pelatihan
                    </Typography>
                    <Typography component={'p'} mb={5}>
                        Ditemukan 1 Pelatihan
                    </Typography>
                    <Grid container>
                        <Box sx={{
                            border: '1px solid #9E9E9E',
                            p: 3,
                            borderRadius: 2,
                            maxWidth: 775,
                        }}>
                            <Grid container mb={1}>
                                <Grid item xs={12} md={12} lg={2} sx={{
                                    mt: 1,
                                    '@media (max-width: 1200px)': {
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    },
                                }}>
                                    <Image src="/img_dummy2.png" alt="img dummy" width={110} height={122} />
                                </Grid>
                                <Grid item xs={12} md={12} lg={10}>
                                    <Typography component={'h1'} variant='h5' fontWeight={'bold'}>
                                        Pelatihan Kepemimpinan Administrator Kelas Dasar Managerial - Batch 2
                                    </Typography>
                                    <Grid container spacing={1}>
                                        <Grid item >
                                            <CalendarMonthIcon fontSize='medium' />
                                            <Typography component={'span'} ml={0.5}>
                                                13 Juli - 6 Agustus 2023
                                            </Typography>
                                        </Grid>
                                        <Grid item >
                                            <TextSnippetOutlinedIcon fontSize='medium' />
                                            <Typography component={'span'} ml={0.5}>
                                                Data Processing
                                            </Typography>
                                        </Grid>
                                        <Grid item >
                                            <PersonalVideoIcon fontSize='medium' />
                                            <Typography component={'span'} ml={0.5}>
                                                Online
                                            </Typography>
                                        </Grid>
                                        <Grid item >
                                            <MicNoneIcon fontSize='medium' />
                                            <Typography component={'span'} ml={0.5}>
                                                Pusbang Properti
                                            </Typography>
                                        </Grid>
                                        <Grid item >
                                            <PersonIcon fontSize='medium' />
                                            <Typography component={'span'} ml={0.5}>
                                                Google
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={12} md={12} lg={8.5}>
                                    <Button
                                        type='submit'
                                        variant='contained'
                                        color='success'
                                        sx={{
                                            borderRadius: 2,
                                            mt: 4,
                                            width: 195,
                                            color: '#16A75C',
                                            backgroundColor: "#E6F6EC",
                                            '@media (max-width: 600px)': {
                                                maxWidth: 200,
                                            },
                                        }}
                                    >
                                        Lulus
                                    </Button>
                                </Grid>
                                <Grid item xs={12} md={12} lg={2.5}>
                                    <Button
                                        type='submit'
                                        variant='contained'
                                        color='success'
                                        sx={{
                                            borderRadius: 2,
                                            mt: 4,
                                            width: 195,
                                            '@media (max-width: 600px)': {
                                                maxWidth: 186,
                                            },
                                        }}
                                    >
                                        Lihat Sertifikat
                                    </Button>

                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Box>
            </Box>

            {/* ======== FOOTER ========= */}
            <Box
                component="footer"
                // Style for desktop (non-mobile)
                sx={{
                    display: 'grid',
                    placeItems: 'center',
                    backgroundColor: '#F5F5F5',
                    py: 2,
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    zIndex: 100,
                    // Use media query to hide on mobile
                    '@media (max-width: 600px)': {
                        display: 'none',
                    },
                }}
            >
                <CssBaseline />
                <Box sx={{ mb: 1.5, }}>
                    <Image src="/logo_bpsdm.png" alt="Footer Logo" width={80} height={50} />
                </Box>
                <Typography variant="body2" color="textSecondary">
                    &copy; Official website BPSDM Jawa Barat 2023
                </Typography>
            </Box>

            <Box
                // Style for mobile devices
                sx={{
                    textAlign: 'center',
                    display: 'grid',
                    placeItems: 'center',
                    backgroundColor: '#F5F5F5',
                    py: 1,
                    position: 'fixed',
                    bottom: 0,
                    width: '100%',
                    zIndex: 100,
                    // Use media query to hide on non-mobile (desktop)
                    '@media (min-width: 601px)': {
                        display: 'none',
                    },
                }}
                component="footer"
            >
                <Box sx={{ mb: 1.5, }}>
                    <Image src="/logo_bpsdm.png" alt="Footer Logo" width={60} height={30} />
                </Box>
                <Typography variant="body2" color="textSecondary">
                    &copy; Official website BPSDM Jawa Barat 2023
                </Typography>
            </Box>
        </div>
    );
}
