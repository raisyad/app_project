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

export default function EditDataDiri(props: Props) {
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
                        <ListItemButton component="a" href={link.url} onClick={() => {
                            setActiveLink(link.id);
                        }}>
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
                    flexGrow: 1,
                    mb: 5,
                    p: 2,
                }}>
                    {/* <Typography variant="h4" component="h4"
                        sx={{
                            fontSize: '20px',
                            textAlign: 'start',
                            paddingBottom: 2.5,
                            fontWeight: 700,
                            paddingTop: 3
                        }}>
                        Form Pengajuan Surat Rekomendasi
                    </Typography> */}
                    <Box sx={{
                        backgroundColor: '#ffffff',
                        padding: '1px',
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                        p: 4,
                    }}>
                        <Container
                            maxWidth='lg'
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                mb: 3,
                            }}
                        >
                            <PersonIcon fontSize='large' sx={{
                                color: '#424242',
                                backgroundColor: '#D9D9D9',
                                borderRadius: '50%', // Mengatur borderRadius ke setengah lebar untuk membuatnya bulat
                                width: '128px',
                                height: '120px',
                                p: 1,
                            }} />
                            <Button
                                type='submit'
                                variant='contained'
                                color='success'
                                sx={{
                                    borderRadius: 2,
                                    mt: 4,
                                    width: 200,
                                    backgroundColor: '#069550',
                                    '@media (max-width: 600px)': {
                                        maxWidth: 200,
                                    },
                                }}
                            >
                                Ubah Foto Formal
                            </Button>
                        </Container>
                        <Typography variant="h5" component="h6" fontWeight={'bold'} sx={{
                            '@media (max-width: 600px)': {
                                textAlign: 'center',
                            },
                        }}>
                            Data Diri
                        </Typography>
                        <Grid container mt={3} sx={{
                            '@media (max-width: 600px)': {
                                textAlign: 'center',
                            },
                        }}>
                            <Grid item lg={6} md={6} xs={12}>
                                <Typography component="p" fontWeight={'bold'}>
                                    Nama Lengkap
                                </Typography>
                                <Typography component="p">
                                    John Doe
                                </Typography>

                                <Typography component="p" fontWeight={'bold'} mt={3}>
                                    Email
                                </Typography>
                                <Typography component="p">
                                    johndoe@gmail.com
                                </Typography>

                                <Typography component="p" fontWeight={'bold'} mt={3}>
                                    Tanggal Lahir
                                </Typography>
                                <Typography component="p">
                                    10/11/1997
                                </Typography>

                                <Typography component="p" fontWeight={'bold'} mt={3}>
                                    Nomor Telepon
                                </Typography>
                                <Typography component="p" mb={3}>
                                    0812-1234-5678
                                </Typography>
                            </Grid>
                            <Grid item lg={6} md={6} xs={12}>
                                <Typography component="p" fontWeight={'bold'}>
                                    NIK
                                </Typography>
                                <Typography component="p">
                                    123456789012345
                                </Typography>

                                <Typography component="p" fontWeight={'bold'} mt={3}>
                                    NIP
                                </Typography>
                                <Typography component="p">
                                    199712304720812379
                                </Typography>

                                <Typography component="p" fontWeight={'bold'} mt={3}>
                                    Jenis Kelamin
                                </Typography>
                                <Typography component="p" mb={3}>
                                    Pria
                                </Typography>
                            </Grid>
                        </Grid>
                        <CustomDivider />
                        <Box sx={{
                            '@media (max-width: 600px)': {
                                textAlign: 'center',
                            },
                        }}>
                            <Typography component="p" fontWeight={'bold'} mt={3}>
                                Domisili
                            </Typography>
                            <Typography component="p" mb={3}>
                                Jl. ABC, No. 3 Kelurahan Cimahi Tengah, Kecamatan Cimahi Tengah, Kota Cimahi
                            </Typography>

                            <CustomDivider />
                            <Typography component="p" fontWeight={'bold'} mt={3}>
                                Intansi
                            </Typography>
                            <Typography component="p" mb={3}>
                                Badan Pengembangan Sumber Daya Manusia Provinsi Jawa Barat
                            </Typography>

                            <CustomDivider />
                        </Box>
                        <Grid container>
                            <Grid item md={6} lg={6} xs={12}>
                                <Container
                                    maxWidth='lg'
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Button
                                        type='submit'
                                        variant='outlined'
                                        color='success'
                                        sx={{
                                            borderRadius: 2,
                                            mt: 4,
                                            width: 250,
                                            color: '#069550',
                                            '@media (max-width: 600px)': {
                                                maxWidth: 200,
                                            },
                                        }}
                                    >
                                        Batal
                                    </Button>
                                </Container>
                            </Grid>
                            <Grid item md={6} lg={6} xs={12}>
                                <Container
                                    maxWidth='lg'
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Button
                                        type='submit'
                                        variant='contained'
                                        color='success'
                                        sx={{
                                            borderRadius: 2,
                                            mt: 4,
                                            width: 250,
                                            backgroundColor: '#069550',
                                            '@media (max-width: 600px)': {
                                                maxWidth: 200,
                                            },
                                        }}
                                    >
                                        Simpan
                                    </Button>
                                </Container>
                            </Grid>
                        </Grid>

                    </Box>
                </Box>
                <CustomDivider />

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
