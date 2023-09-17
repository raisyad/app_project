import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import SnackbarInterface from '../Interface/Snackbar.interface';

const CustomSnackbar: React.FC<SnackbarInterface> = ({ open, onClose, message }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={2000}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      sx={{
        border: '1px solid #1565C0',
        borderRadius: 3,
      }}
    >
      <Alert
        severity="info"
        sx={{
          backgroundColor: '#E3F2FD',
          color: 'black',
          borderRadius: 3,
          width: '660px',
          display: 'flex',
          alignItems: 'center',
          p: 2,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {message}
        </Box>
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;