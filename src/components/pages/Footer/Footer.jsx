import React from 'react';
import './Footer.css';
import CTA from '../../CTA/CTA';

function Footer() {
  return (
    <div className='footerPage'>
      <CTA />
      <p className='copyright'>&#169; Copyright 2023 HawkAI</p>
    </div>
  )
}

export default Footer;