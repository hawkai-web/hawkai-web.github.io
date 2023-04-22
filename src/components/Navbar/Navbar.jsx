import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import './Navbar.css';
import logo from '../../logo.svg';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className='navbar'>
        <Toolbar>
          <img src={logo} className='logo' />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            HawkAI
          </Typography>
          <Button color="inherit" href='/' className='BTN'>Home</Button>
          <Button color="inherit" href='/#/status' className='BTN'>Status</Button>
          <Button color="inherit" href='/#/contact' className='contact-btn BTN'>Contact</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}