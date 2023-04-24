import React from 'react';
import { useState } from 'react';
import { AppBar, Box, Toolbar, styled, Drawer, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../logo.svg';
import './Navbar.css';


const StyledToolbar = styled(Toolbar) ({
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: 'rgb(240 236 230)',
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
      
      <AppBar className='navbar'>
        <StyledToolbar>

          
          <Box>
            <img src={logo} className='logo' width="38" height="32" alt='logo' />
            <span className='brand' >HawkAI</span>
          </Box>
          
          <Navigation>
            <StyledButton disableRipple href='/' className='btn nav-btn'>Home</StyledButton>
            <StyledButton disableRipple href='/#/' className='btn nav-btn' >Features</StyledButton>
            <StyledButton disableRipple href='/#/' className='btn nav-btn' >About</StyledButton>
            <StyledButton disableRipple href='/#/' className='btn nav-btn' >Survey</StyledButton>
            <StyledButton disableRipple href='/#/contact' className='btn nav-btn' >Contact</StyledButton>
          </Navigation>

          <Navigation>
            <StyledButtonContained href='/#/status' className='btnContained nav-btn'>App Status</StyledButtonContained>
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
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%', backgroundColor:'rgb(240 236 232)' },
      }}
      >
        <Box className='appdrawer'>
          <AppBar className='navbar' sx={{backgroundColor:'rgb(240 236 232)'}}>
            <StyledToolbar sx={{backgroundColor:'rgb(240 236 232)'}}>

              
              <Box>
                <img src={logo} className='logo' width="38" height="32" alt='logo' />
                <span className='brand' sx={{ display:{xs:'none', sm:'block'}}} >HawkAI</span>
              </Box>
              
              <Navigation>
                <CloseIcon onClick={() => setIsDrawerOpen(false)} className='menuIcon'></CloseIcon>
              </Navigation>

            </StyledToolbar>
            <Box className='drawerContent'>
                <Button href='/' className='mobileBtn' onClick={() => setIsDrawerOpen(false)}>Home</Button> <hr/><br/>
                <Button href='/#/status' className='mobileBtn' onClick={() => setIsDrawerOpen(false)}>Status</Button> <hr/><br/>
                <Button href='/#/contact' className='mobileBtn' onClick={() => setIsDrawerOpen(false)}>Contact</Button> <hr/><br/>
            </Box>
          </AppBar>
        </Box>  

      </Drawer>

    </Box>
  )
}

export default Navbar