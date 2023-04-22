import React from 'react';
import { AppBar, Box, Toolbar, styled, Typography, Button } from '@mui/material';
import logo from '../../logo.svg';
import './Navbar.css';


const StyledToolbar = styled(Toolbar) ({
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: 'rgb(40 44 52)',
  boxShadow: 'none !important'
})


const Navigation = styled(Box) ({

})

const StyledButton = styled(Button) ({
  color: '#fff',
  textTransform: 'none',
  marginInline: '0.5em'
})

const StyledButtonContained = styled(Button) ({
  color: '#fff',
  textTransform: 'none',
  marginInline: '0.5em',
  backgroundColor: '#61bfff',
  borderRadius: '50em',
  paddingInline: '1em'
})

const Navbar = () => {
  return (
    <Box>
      <AppBar className='navbar'>
        <StyledToolbar>

          
          <Box>
            <img src={logo} className='logo' width="38" height="32" alt='logo' />
            <span className='brand' sx={{ display:{xs:'none', sm:'block'}}} >HawkAI</span>
          </Box>
          
          <Navigation>
            <StyledButton href='/' className='btn'>Home</StyledButton>
            <StyledButton href='/#/status' className='btn'>Status</StyledButton>
            <StyledButtonContained href='/#/contact' className='btnContained'>Contact</StyledButtonContained>
          </Navigation>

        </StyledToolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar