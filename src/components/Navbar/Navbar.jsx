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
  backgroundColor: 'rgb(40 44 52)',
  boxShadow: 'none !important'
})


const Navigation = styled(Box) ({

})

const StyledButton = styled(Button) ({
  color: '#fff',
  textTransform: 'none',
  marginInline: '0.5em',
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
            <span className='brand' sx={{ display:{xs:'none', sm:'block'}}} >HawkAI</span>
          </Box>
          
          <Navigation>
            <StyledButton href='/' className='btn' sx={{ display:{ xs:'none', sm:'inline-block' } }}>Home</StyledButton>
            <StyledButton href='/#/status' className='btn' sx={{ display:{ xs:'none', sm:'inline-block' } }}>Status</StyledButton>
            <StyledButtonContained href='/#/contact' className='btnContained' sx={{ display:{ xs:'none', sm:'inline-block' } }}>Contact</StyledButtonContained>
            <MenuIcon sx={{ display:{ xs:'block', sm:'none' } }} onClick={() => setIsDrawerOpen(true)}></MenuIcon>
          </Navigation>

        </StyledToolbar>
      </AppBar>


      <Drawer
       anchor='right'
       open = {isDrawerOpen}
       onClose={() => setIsDrawerOpen(false)}
       sx={{
        display: { xs: 'block', sm: 'none' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%', backgroundColor:'rgb(40 44 52)' },
      }}
      >
        <Box className='appdrawer'>
          <AppBar className='navbar' sx={{backgroundColor:'rgb(40 44 52)'}}>
            <StyledToolbar sx={{backgroundColor:'rgb(40 44 52)'}}>

              
              <Box>
                <img src={logo} className='logo' width="38" height="32" alt='logo' />
                <span className='brand' sx={{ display:{xs:'none', sm:'block'}}} >HawkAI</span>
              </Box>
              
              <Navigation>
                <CloseIcon sx={{ display:{ xs:'block', sm:'none' } }} onClick={() => setIsDrawerOpen(false)}></CloseIcon>
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