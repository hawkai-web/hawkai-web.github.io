import React from "react";
import { Grid, Button } from "@mui/material"; 
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ImageSlider from './imageSlider';
import Tabs from './tabs';
import overImage from '../../../assets/gallery/overImage.webp';
import LinkedCameraIcon from '@mui/icons-material/LinkedCamera';
import AdbIcon from '@mui/icons-material/Adb';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import './Home.css';
import '../../../App.css';


export default function Home() {

    return(
      <div className="homePage">




      {/*  HERO SECTION */ }
        <section className='heroMain'>

          <Grid container className='hiddenformobile'>
            <Grid item xs={7}>
            <h1 className="tagline">Capturing moments so <span>you</span> dont have to!</h1>
            <Button className='btnFilled heroBtn'>EXPLORE</Button>
            <Button className='btnOutline heroBtn' sx={{ marginLeft: '1%' }}>Info</Button>
            </Grid>
            <Grid item xs={5} className="hiddenformobile overlapCarousel">
                <ImageSlider />
            </Grid>
          </Grid>

          <Grid container className="hiddenforlaptop">
            <Grid item xs={12}>
            <h1 className="tagline">Capturing moments so <span>you</span> dont have to!</h1>
            <div className='btnHoldermob'>
              <Button className='btnFilled heroBtn'>EXPLORE</Button>
              <Button className='btnOutline heroBtn' sx={{ marginLeft:'2%' }}>Info</Button>
            </div>
            <ImageSlider className='mobileCarousel' />
            </Grid>
          </Grid>

        </section>




      {/*  PRODUCT DESCRIPTION  */}
        <section className="prodDesc">
          <p className='headChip hiddenformobile'>The revolutionary product <hr className='chipHR' /></p>
          
          <div className="hiddenformobile">
            <Grid container spacing={5}>
              <Grid item xs={4}>
              <h1 className="prodDescHeading">What is HawkAI</h1>
              <p className='columnText'>
                HawkAI captures candid photos effortlessly, letting you live in the moment without worrying about taking pictures. Using advanced AI technology, HawkAI automatically adjusts the camera settings to capture stunning, natural shots that truly capture the essence of the moment. Whether you're on a romantic date, traveling to a new place, or spending time with loved ones, HawkAI ensures that you never miss a moment. Experience life to the fullest and let HawkAI capture memories that will last a lifetime.
              </p>
              <a className='columnBtn' href='/#/about'>Learn more <span><ArrowForwardIosRoundedIcon className='columnBtnarrow' /></span></a>
              </Grid>
              <Grid item xs={8}>
                <div className="graph" style={{ padding:'2%' }}>
                  <img src={overImage} alt='over_image' className="overImage" />
                </div>
              </Grid>
            </Grid>
          </div>

          <div className='hiddenforlaptop'>
            <p className="headChip headChipMobile">The revolutionary product </p>
            <h1 className="prodDescHeading prodDescHeadingMobile">What is HawkAI</h1>
            <p className='mobilePara'>
            HawkAI captures candid photos effortlessly, letting you live in the moment without worrying about taking pictures. Using advanced AI technology, HawkAI automatically adjusts the camera settings to capture stunning, natural shots that truly capture the essence of the moment. Whether you're on a romantic date, traveling to a new place, or spending time with loved ones, HawkAI ensures that you never miss a moment. Experience life to the fullest and let HawkAI capture memories that will last a lifetime.
            </p>
            <a className='columnBtn' href='/about'>Learn more <span><ArrowForwardIosRoundedIcon className='columnBtnarrow' /></span></a>
            <img src={overImage} alt='over_image' className="overImage overImageMobile" />
          </div>
          
        </section>

        {/* HOW OUR PRODUCT WORKS */}
        <section className="howItWorks hiddenformobile">
          <p className='headChip hiddenformobile'>The Technology <hr className='chipHR'></hr></p>
          <h1 className="howDescHeading">How it works</h1>
          <Tabs></Tabs>
        </section>

        {/* EXPLORE BANNER */}
        <section className='banner hiddenformobile'>
          <div className="forestBG">
            <div style={{ backgroundColor: 'rgba(0,0,0, 0.4)' }}>         
              <div style={{ paddingInline: '5%', paddingBlock: '0.001%' }}>
                <Grid container sx={{ verticalAlign:'middle' }}>
                  <Grid item xs={8} sx={{ verticalAlign:'middle' }}>
                    <h1 className='classic-font' style={{ color: '#fff', fontSize:'5em' }}>Explore New Age Photography</h1>
                  </Grid>
                  <Grid item xs={4} sx={{ verticalAlign:'middle' }} className='banner-button-holder'>
                      <Button disableRipple className='banner-btn'>Features</Button> &nbsp; &nbsp;
                      <Button disableRipple className='banner-btn'>Donwload</Button>
                  </Grid>
                </Grid>
                
              </div>
            </div>
              
          </div>
        </section>



      {/*  WHY OUR PRODUCT (LAPTOP)  */}
        <section className='USP hiddenformobile'>
        <p className='headChip hiddenformobile'>The benefits <hr className='chipHR'></hr></p>
          <Grid container spacing={5} sx={{ marginTop:'5%' }}>
            <Grid item xs={4} className="benefits">


              <div className="uspCard camIconCard">
                <AccessibilityNewIcon className="camIcon benfitIcon" />
                <h1 className="benefitsHead">Hands-free Photography</h1>
                <p className="benefitsDesc">
                HawkAI captures candid photos effortlessly, letting you live in the moment without worrying about taking pictures. Using advanced AI technology
                </p>
              </div>
              

              <div className="uspCard adbIconCard">
                <AdbIcon className='adbIcon benfitIcon' />
                <h1 className="benefitsHead">AI Powered Image Processing</h1>
                <p className="benefitsDesc">
                HawkAI captures candid photos effortlessly, letting you live in the moment without worrying about taking pictures. Using advanced AI technology
                </p>
              </div>
              
            </Grid>
            <Grid item xs={4} className="benefits">
            <h1 className='uspHeading '>Why <br /> HawkAI</h1>

            <div className="uspCard cameraIconCard">
              <LinkedCameraIcon className='cameraIcon benfitIcon' />
              <h1 className="benefitsHead">AI Powered image processing</h1>
                <p className="benefitsDesc">
                HawkAI captures candid photos effortlessly, letting you live in the moment without worrying about taking pictures. Using advanced AI technology
                </p>
            </div>
            
            </Grid>


            <Grid item xs={4} className="benefits">

              <div className="uspCard eyeIconCard">
                <VisibilityIcon className='eyeIcon benfitIcon' />
                <h1 className="benefitsHead">Emotions & Facial Recognition</h1>
                <p className="benefitsDesc">
                HawkAI captures candid photos effortlessly, letting you live in the moment without worrying about taking pictures. Using advanced AI technology
                </p>
              </div>
              
              <div className="uspCard resIconCard">
                <AppShortcutIcon className='resIcon benfitIcon' />
                <h1 className="benefitsHead">High Resolution Images</h1>
                <p className="benefitsDesc">
                HawkAI captures candid photos effortlessly, letting you live in the moment without worrying about taking pictures. Using advanced AI technology
                </p>
              </div>
              
            </Grid>
          </Grid>
        
        </section>

        <section className='hiddenforlaptop'>
          <p className='headChipMobile headChip' style={{ marginTop: '15%' }}><hr className='chipHR' /> THE BENEFITS <hr className='chipHR' /></p>
          <h1 className="classic-font text-center" style={{ fontSize: '2.5em' }}>Why HawkAI</h1>
          <Grid container>

            <Grid item xs={12} className='text-center'>
              <AccessibilityNewIcon className="camIcon benfitIcon" />
              <h1 className="benefitsHead">Hands-free Photography</h1>
              <p className="benefitsDesc">
              HawkAI captures candid photos effortlessly, letting you live in the moment without worrying about taking pictures. Using advanced AI technology
              </p>
            </Grid>

            <Grid item xs={12} className="text-center">
              <AdbIcon className='adbIcon benfitIcon' />
              <h1 className="benefitsHead">AI Powered Image Processing</h1>
              <p className="benefitsDesc">
              HawkAI captures candid photos effortlessly, letting you live in the moment without worrying about taking pictures. Using advanced AI technology
              </p>
            </Grid>

            <Grid item xs={12} className="text-center">
              <LinkedCameraIcon className='cameraIcon benfitIcon' />
              <h1 className="benefitsHead">AI Powered image processing</h1>
              <p className="benefitsDesc">
              HawkAI captures candid photos effortlessly, letting you live in the moment without worrying about taking pictures. Using advanced AI technology
              </p>
            </Grid>

            <Grid item xs={12} className="text-center">
              <VisibilityIcon className='eyeIcon benfitIcon' />
              <h1 className="benefitsHead">Emotions & Facial Recognition</h1>
              <p className="benefitsDesc">
              HawkAI captures candid photos effortlessly, letting you live in the moment without worrying about taking pictures. Using advanced AI technology
              </p>
            </Grid>

            <Grid item xs={12} className="text-center">
              <AppShortcutIcon className='resIcon benfitIcon' />
              <h1 className="benefitsHead">High Resolution Images</h1>
              <p className="benefitsDesc">
              HawkAI captures candid photos effortlessly, letting you live in the moment without worrying about taking pictures. Using advanced AI technology
              </p>
            </Grid>

          </Grid>
        </section>



      </div>
    )

}