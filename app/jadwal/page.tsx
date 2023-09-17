'use client'
import * as React from 'react';
import { AppBar, Box, CssBaseline, Divider, Drawer, Paper, IconButton, List, styled, ListItem, ListItemButton, ListItemIcon, Grid, ListItemText, Toolbar, Typography, Button, TextField, Container, DialogTitle, DialogContent, DialogContentText, DialogActions, Dialog } from '@mui/material';
import { CenterFocusStrong, MoveToInbox as InboxIcon, Mail as MailIcon, Menu as MenuIcon } from '@mui/icons-material';
import Link from 'next/link';
import Image from 'next/image';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

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

function createData(
    no: number,
    date: string,
    activity: string,
    classes: string,
    room: string,
    status: string,
) {
    return { no, date, activity, classes, room, status };
}

const rows = [
    createData(1, "Senin, 25 - Januari 2023", "Pelatihan Dasar Managerial", "II", "Lab Komputer", "Sekarang"),
    createData(2, "Senin, 25 - Januari 2023", "Pelatihan Dasar Managerial", "II", "Lab Komputer", "Belum Dimulai"),
    createData(3, "Senin, 25 - Januari 2023", "Pelatihan Dasar Managerial", "II", "Lab Komputer", "Selesai"),
];

const statusStyles = {
    textAlign: "center",
    fontSize: "16px",
    padding: "8px 16px",
    margin: "8px",
};

const getStatusColor = (status: string) => {
    switch (status) {
        case "Sekarang":
            return "#FFD026";
        case "Belum Dimulai":
            return "#F44336";
        case "Selesai":
            return "#16A75C";
        default:
            return "#000"; // default color if status does not match any criteria
    }
};

const getStatusBackgroundColor = (status: string) => {
    switch (status) {
        case "Sekarang":
            return "#FFF9E1";
        case "Belum Dimulai":
            return "#FFEBEE";
        case "Selesai":
            return "#E6F6EC";
        default:
            return "#FFF"; // default background color if status does not match any criteria
    }
};

const StatusCell: React.FC<{ status: string }> = ({ status }) => {
    const color = getStatusColor(status);
    const backgroundColor = getStatusBackgroundColor(status);

    return (
        <TableCell>
            <Typography sx={{
                ...statusStyles,
                color,
                backgroundColor,
            }}>
                {status}
            </Typography>
        </TableCell>
    );
};

export default function JadwalPage(props: Props) {
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
                    <TableContainer>
                        <Table sx={{
                            minWidth: 650,
                            "& .MuiTableCell-root": {
                                borderLeft: "1px solid rgba(224, 224, 224, 1)",
                                borderBottom: "0px",
                            }
                        }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{
                                        fontWeight: 'bold',
                                        fontSize: '16px'
                                    }}>
                                        No</TableCell>
                                    <TableCell sx={{
                                        fontWeight: 'bold',
                                        fontSize: '16px'
                                    }}>
                                        Hari / Tanggal</TableCell>
                                    <TableCell sx={{
                                        fontWeight: 'bold',
                                        fontSize: '16px',
                                    }}>
                                        Nama Kegiatan</TableCell>
                                    <TableCell sx={{
                                        fontWeight: 'bold',
                                        fontSize: '16px'
                                    }}>
                                        Kelas</TableCell>
                                    <TableCell sx={{
                                        fontWeight: 'bold',
                                        fontSize: '16px'
                                    }}>
                                        Ruang</TableCell>
                                    <TableCell sx={{
                                        fontWeight: 'bold',
                                        fontSize: '16px'
                                    }}>
                                        Status</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.no}
                                    >
                                        <TableCell>
                                            {row.no}
                                        </TableCell>
                                        <TableCell>{row.date}</TableCell>
                                        <TableCell>{row.activity}</TableCell>
                                        <TableCell>{row.classes}</TableCell>
                                        <TableCell>{row.room}</TableCell>
                                        <StatusCell status={row.status} />
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
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
