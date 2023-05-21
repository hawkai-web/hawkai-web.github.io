import React from 'react';
import { Button, Grid } from '@mui/material';
import ShopIcon from '@mui/icons-material/Shop';
import AppleIcon from '@mui/icons-material/Apple';
import '../../App.css';
import '../pages/Home/Home.css'

function CTA() {
  return (

    <div>
        {/* LAPTOP ONLY */}
        <section className='CTA hiddenformobile'>
        <p className="headChip headChipMobile"><hr className='chipHR hiddenformobile' /> Level up your Photography <hr className='chipHR hiddenformobile' /></p>
        <h1 className="CTADescHeading">Download HawkAI</h1>
        <Button className='btnFilled cta-btn'><ShopIcon /> &nbsp; Play Store</Button>
        <Button className='btnFilled cta-btn' sx={{ marginLeft: '1%' }}><AppleIcon /> &nbsp; App Store</Button>
        </section>

        {/* MOBILE ONLY */}
        <section className='hiddenforlaptop' style={{ marginTop: '15%' }}>
            <p className="headChip headChipMobile"><hr className='chipHR hiddenformobile' /> Level up your Photography <hr className='chipHR hiddenformobile' /></p>
            {/* <h1 className="CTADescHeading" style={{ fontSize: '2em' }}>Download HawkAI</h1> */}
            <Grid container>
                <Grid item xs={6} className='text-center'>
                    <Button className='btnFilled cta-btn'><ShopIcon /> &nbsp; Play Store</Button>
                </Grid>
                <Grid item xs={6} className='text-center'>
                    <Button className='btnFilled cta-btn' sx={{ marginLeft: '1%' }}><AppleIcon /> &nbsp; App Store</Button> 
                </Grid>
            </Grid>
        </section>
    </div>

  )
}

export default CTA