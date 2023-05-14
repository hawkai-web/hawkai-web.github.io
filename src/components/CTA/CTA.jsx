import React from 'react';
import { Button } from '@mui/material';
import ShopIcon from '@mui/icons-material/Shop';
import AppleIcon from '@mui/icons-material/Apple';

function CTA() {
  return (
    <section className='CTA'>
    <p className="headChip headChipMobile"><hr className='chipHR' /> Level up your Photography <hr className='chipHR' /></p>
    <h1 className="CTADescHeading">Download HawkAI</h1>
    <Button className='btnFilled cta-btn'><ShopIcon /> &nbsp; Play Store</Button>
    <Button className='btnFilled cta-btn' sx={{ marginLeft: '1%' }}><AppleIcon /> &nbsp; App Store</Button>
  </section>
  )
}

export default CTA