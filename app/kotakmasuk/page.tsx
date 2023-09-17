'use client'
import * as React from 'react';
import { AppBar, Box, CssBaseline, Divider, Drawer, Paper, IconButton, List, styled, ListItem, ListItemButton, ListItemIcon, Grid, ListItemText, Toolbar, Typography, Button, TextField, Container, DialogTitle, DialogContent, DialogContentText, DialogActions, Dialog } from '@mui/material';
import { CenterFocusStrong, MoveToInbox as InboxIcon, Mail as MailIcon, Menu as MenuIcon } from '@mui/icons-material';
import Link from 'next/link';
import Image from 'next/image';
import EmailIcon from '@mui/icons-material/Email';
import MessageIcon from '@mui/icons-material/Message';
import FolderIcon from '@mui/icons-material/Folder';
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

export default function KotakMasuk(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const [activeLink, setActiveLink] = React.useState(1);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleConfirmation = () => {
        // Lakukan tindakan setelah tombol "Aktivasi Akun" diklik
        alert('Akun diaktifkan');
        handleClose();
    };

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
                    maxWidth: 974,
                }}>
                    <Box>
                        <Grid container justifyContent="flex-end">
                            <Grid item xs={12} sm={12} md={5} lg={3.5} sx={{
                                mt: 2,
                                display: 'flex',
                                justifyContent: 'flex-end',
                            }}>
                                <Box sx={{
                                    border: '1px solid #9E9E9E',
                                    p: 1,
                                    borderRadius: 2,
                                    maxWidth: 225,
                                    maxHeight: 106,
                                    width: "100%",
                                }}>
                                    <Grid container>
                                        <Grid item xs={7} sx={{
                                            mt: 1,
                                        }}>
                                            <Typography component={'h1'} variant='h4' fontWeight={'bold'}>
                                                0
                                            </Typography>
                                            <Typography component={'h1'} variant='h6'>
                                                Total Pesan
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={5}>
                                            <MessageIcon fontSize='large' sx={{
                                                color: '#069550',
                                                width: 95,
                                                height: 80,
                                            }} />
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                            {/* 2 */}
                            <Grid item xs={12} sm={12} md={5} lg={3.5} sx={{
                                mt: 2,
                                display: 'flex',
                                justifyContent: 'flex-end',
                            }}>
                                <Box sx={{
                                    border: '1px solid #9E9E9E',
                                    p: 1,
                                    borderRadius: 2,
                                    maxWidth: 225,
                                    maxHeight: 106,
                                    width: "100%",
                                }}>
                                    <Grid container>
                                        <Grid item xs={6} sx={{
                                            mt: 1,
                                        }}>
                                            <Typography component={'h1'} variant='h4' fontWeight={'bold'}>
                                                0
                                            </Typography>
                                            <Typography component={'h1'} variant='h6'>
                                                Pesan baru
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <EmailIcon fontSize='large' sx={{
                                                color: '#069550',
                                                width: 120,
                                                height: 80,
                                            }} />
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box mt={5} mb={2}>
                        <Box sx={{
                            border: '1px solid #9E9E9E',
                            p: 1,
                            borderRadius: 2,
                        }}>
                            <Grid container>
                                <Grid item xs={9} md={8} lg={9.5}>
                                    <FolderIcon fontSize='medium' />
                                    <Typography component={'span'} ml={1} sx={{
                                        '@media (max-width: 900px)': {
                                            fontSize: 14,
                                        },
                                    }}>
                                        Notifikasi Verifikasi Email
                                    </Typography>
                                </Grid>
                                <Grid item xs={3} md={4} lg={2.5}>
                                    <Typography component={'span'} sx={{
                                        '@media (max-width: 900px)': {
                                            fontSize: 14,
                                        },
                                    }}>
                                        13 Juli 2022, 06:42 PM
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Box mb={2}>
                        <Box sx={{
                            border: '1px solid #9E9E9E',
                            p: 1,
                            borderRadius: 2,
                        }}>
                            <Grid container>
                                <Grid item xs={9} md={8} lg={9.5}>
                                    <FolderIcon fontSize='medium' />
                                    <Typography component={'span'} ml={1} sx={{
                                        '@media (max-width: 900px)': {
                                            fontSize: 14,
                                        },
                                    }}>
                                        E-mail anda telah terveriikasi
                                    </Typography>
                                </Grid>
                                <Grid item xs={3} md={4} lg={2.5}>
                                    <Typography component={'span'} sx={{
                                        '@media (max-width: 900px)': {
                                            fontSize: 14,
                                        },
                                    }}>
                                        07 Juni 2022, 09:35 PM
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
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
                        onClick={handleOpen} // Tambahkan event handler onClick
                    >
                        Lihat Sertifikat
                    </Button>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle textAlign={'center'}>
                            Aktivasi Akun
                        </DialogTitle>
                        <DialogContent sx={{ justifyContent: 'center' }}>
                            <DialogContentText>
                                Terima kasih atas pendaftaran Anda di Portal....
                            </DialogContentText>
                            <DialogActions sx={{ justifyContent: 'center' }}> {/* Tambahkan properti justifyContent */}
                                <Button
                                    type='submit'
                                    variant='contained'
                                    color='success'
                                    sx={{
                                        borderRadius: 2,
                                        width: 195,
                                        '@media (max-width: 600px)': {
                                            maxWidth: 186,
                                        },
                                    }}
                                >
                                    Lihat Sertifikat
                                </Button>
                            </DialogActions>
                            <DialogContentText>
                                Selanjutnya.. segera lengkapi data...
                            </DialogContentText>
                        </DialogContent>
                    </Dialog>
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
