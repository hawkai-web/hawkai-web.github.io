import React from 'react';
import { Button, Grid } from '@mui/material';
import ShopIcon from '@mui/icons-material/Shop';
import logo from '../../../assets/logo.svg'
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TwitterIcon from '@mui/icons-material/Twitter';
import NorthIcon from '@mui/icons-material/North';
import './Footer.css';

function Footer() {
  return (
    <div className='footerPage'>
        <p className="headChip headChipMobile">Level up your Photography </p>
        <hr className='footerHR' />
        <Grid container>
          <Grid item xs={5}>
            <h1 className='footerHeading'><img src={logo} alt='logo' className='footerLogo' /> HAWKAI</h1>
            <p>
            Whether you're on a romantic date, traveling to a new place, or spending time with loved ones, HawkAI ensures that you never miss a moment. Experience life to the fullest and let HawkAI capture memories that will last a lifetime.
            </p>
          </Grid>
        </Grid>

        <Grid container className='bottomFooter'>
          <Grid item xs={6}>
            <div className='buttonHolder' sx={{ textAlign:'center', justifyContent:'center' }}>
              <Button className='getBtn'><ShopIcon /> &nbsp; DOWNLOAD APP</Button>
            </div>
          </Grid>
          <Grid item xs={2} sx={{ textAlign:'center' }}>
            
          </Grid>
          <Grid item xs={4} sx={{ textAlign:'end' }}>
            <a href="/#"><InstagramIcon className='socialIcon' /></a>
            <a href="/#"><TwitterIcon className='socialIcon' /></a>
            <a href="/#"><MailOutlineIcon className='socialIcon' /></a> &nbsp; &nbsp; &nbsp; &nbsp;
            <a href="/#" className='topBtn'><NorthIcon className='topIcon' /></a>
          </Grid>
          
        </Grid>

    </div>
  )
}

export default Footer;