import * as React from 'react';
import Box from '@mui/material/Box'
import Image from "next/legacy/image"
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment/InputAdornment';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import CustomSnackbar from '@/Component/modules_utils/CustomSnackbar';

const Content = () => {
    const [isEmailFilled, setIsEmailFilled] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);
    const [isPasswordFilled, setIsPasswordFilled] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const [openSnackbar, setOpenSnackbar] = React.useState(false);

    const handleSnackbarClose = () => {
        setOpenSnackbar(false);
    };

    const handleLoginClick = () => {
        // Logika saat tombol login diklik
        // Misalnya, berhasil login
        setOpenSnackbar(true);
    };
    return (
        <div>
            <CustomSnackbar
                open={openSnackbar}
                onClose={handleSnackbarClose}
                message="Daftar akun telah berhasil !" />
            <Container maxWidth='lg'
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        border: '1px solid #BDBDBD',
                        borderRadius: 2,
                        p: 10,
                        my: 10,
                        width: '100%',
                        maxWidth: 650,
                    }}
                >
                    <Box sx={{ textAlign: 'center' }}>
                        <Image
                            priority
                            src="/logo_bpsdm.png"
                            alt="logo_bpsdm"
                            className="image_bg"
                            height={110}
                            width={223}
                        />
                    </Box>
                    {/* <form> */}
                    <Typography component="p" sx={{
                        color: '#424242',
                        textAlign: 'left',
                        fontWeight: 'bold',
                    }}>
                        Email
                    </Typography>
                    <FormControl variant="outlined" fullWidth sx={{
                        mt: 2,
                        mb: 4,
                    }}>
                        <OutlinedInput
                            color='success'
                            placeholder='Masukan Email'
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        />
                    </FormControl>

                    <Typography component="p" sx={{
                        color: '#424242',
                        textAlign: 'left',
                        fontWeight: 'bold',
                    }}>
                        Password
                    </Typography>
                    <FormControl variant="outlined" fullWidth sx={{
                        mt: 2,
                    }}>
                        <OutlinedInput
                            color='success'
                            placeholder='Masukan Password'
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            onChange={(e) => setIsPasswordFilled(e.target.value !== '')}
                        />
                    </FormControl>
                    <Grid container alignItems={'center'} justifyContent={'space-between'} sx={{
                        mb: 1
                    }}>
                        <Box>
                            <Checkbox color='success' />
                            <Typography variant='caption' sx={{ color: 'grey.700' }}>
                                Remember me
                            </Typography>
                        </Box>
                        <Typography variant='caption' component={'a'} href='#' sx={{
                            color: 'grey.700',
                            textDecoration: 'underline'
                        }}>
                            Lupa Password ?
                        </Typography>
                    </Grid>
                    <Button
                        type='submit'
                        variant='contained'
                        size='large'
                        color='success'
                        fullWidth
                        sx={{
                            borderRadius: 2,
                            mt: 4,
                        }}
                        onClick={handleLoginClick}
                    >
                        Login
                    </Button>
                    <Button
                        variant='outlined'
                        size='large'
                        color='success'
                        fullWidth
                        sx={{
                            borderRadius: 2,
                            mt: 4,
                            fontWeight: 'bold',
                        }}
                    >
                        Daftar
                    </Button>
                    <Typography component="p" sx={{
                        color: '#424242',
                        textAlign: 'center',
                        my: 3,
                        fontWeight: 'bold',
                    }}>
                        Atau
                    </Typography>
                    <Button
                        variant='outlined'
                        size='large'
                        color='success'
                        fullWidth
                        sx={{
                            borderRadius: 2,
                            fontWeight: 'bold',
                        }}
                    >
                        Login dengan Google
                    </Button>
                    {/* </form> */}
                </Box>
            </Container>
        </div>

    )
}

export default Content