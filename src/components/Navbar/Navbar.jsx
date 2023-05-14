import React from 'react';
import { useState } from 'react';
import { AppBar, Box, Toolbar, styled, Drawer, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import logo from '../../assets/logo.svg';
import './Navbar.css';


const StyledToolbar = styled(Toolbar) ({
  display: 'flex',
  justifyContent: 'space-between',
  boxShadow: 'none !important'
})


const Navigation = styled(Box) ({

})

const StyledButton = styled(Button) ({
  color: '#000',
  textTransform: 'none',
  marginInline: '0.5em',
  backgroundColor: 'transparent'
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

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <Box>
      
      <AppBar className='navbar' position='static'>
        <StyledToolbar>

          
          <Box>
            <img src={logo} className='logo' width="38" height="32" alt='logo' />
            <a className='brand' href='/'>HawkAI</a>
          </Box>
          
          <Navigation>
            <StyledButton disableRipple href='/' className='btn nav-btn nav-btnMobile'>Home </StyledButton>
            <StyledButton disableRipple href='/#/' className='btn nav-btn nav-btnMobile' >Features</StyledButton>
            <StyledButton disableRipple href='/#/about' className='btn nav-btn nav-btnMobile' >About</StyledButton>
            <StyledButton disableRipple href='/#/' className='btn nav-btn nav-btnMobile' >Gallery</StyledButton>
            <StyledButton disableRipple href='/#/contact' className='btn nav-btn nav-btnMobile' >Contact</StyledButton>
          </Navigation>

          <Navigation>
            <StyledButtonContained href='/#/status' className='btnContained nav-btnMobile' size='medium'>App Status{/*<LaunchIcon className='launchIcon' ></LaunchIcon>*/}</StyledButtonContained>
            <MenuIcon sx={{color:'#000' }} onClick={() => setIsDrawerOpen(true)} className='menuIcon'></MenuIcon>
          </Navigation>

        </StyledToolbar>
      </AppBar>


      <Drawer
       anchor='right'
       open = {isDrawerOpen}
       onClose={() => setIsDrawerOpen(false)}
       sx={{
        display: { xs: 'block', md: 'none' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%', backgroundColor:'rgb(232 225 215)' },
      }}
      >
        <Box className='appdrawer'>
          <AppBar className='navbar' sx={{backgroundColor:'rgb(232 225 215)'}}>
            <StyledToolbar sx={{backgroundColor:'rgb(232 225 215)'}}>

              
              <Box>
                <img src={logo} className='logo' width="38" height="32" alt='logo' />
                <span className='brand' sx={{ display:{xs:'none', sm:'block'}}} >HawkAI</span>
              </Box>
              
              <Navigation>
                <CloseIcon onClick={() => setIsDrawerOpen(false)} className='menuIcon'></CloseIcon>
              </Navigation>

            </StyledToolbar>
            <Box className='drawerContent'>
                <Button disableRipple href='/' className='mobileBtn' onClick={() => setIsDrawerOpen(false)}>Home <ArrowForwardIosRoundedIcon className='navarrowicon' fontSize='small'></ArrowForwardIosRoundedIcon></Button> 
                <Button disableRipple href='/#/' className='mobileBtn' onClick={() => setIsDrawerOpen(false)}>Features <ArrowForwardIosRoundedIcon className='navarrowicon' fontSize='small'></ArrowForwardIosRoundedIcon></Button> 
                <Button disableRipple href='/#/about' className='mobileBtn' onClick={() => setIsDrawerOpen(false)}>About <ArrowForwardIosRoundedIcon className='navarrowicon' fontSize='small'></ArrowForwardIosRoundedIcon></Button> 
                <Button disableRipple href='/#/' className='mobileBtn' onClick={() => setIsDrawerOpen(false)}>Gallery <ArrowForwardIosRoundedIcon className='navarrowicon' fontSize='small'></ArrowForwardIosRoundedIcon></Button> 
                <Button disableRipple href='/#/contact' className='mobileBtn' onClick={() => setIsDrawerOpen(false)}>Contact <ArrowForwardIosRoundedIcon className='navarrowicon' fontSize='small'></ArrowForwardIosRoundedIcon></Button> 
                <Button disableRipple href='/#/status' className='mobileBtn' onClick={() => setIsDrawerOpen(false)}>App Status <ArrowForwardIosRoundedIcon className='navarrowicon' fontSize='small'></ArrowForwardIosRoundedIcon></Button> 
            </Box>
          </AppBar>
        </Box>  

      </Drawer>

    </Box>
  )
}

export default Navbar