import React from "react";
import { Grid, Button, Box } from "@mui/material"; 
// import cameraMan from '../../../assets/home/cameraMan.svg';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ImageSlider from './imageSlider';
import overImage from '../../../assets/gallery/overImage.webp';
import LinkedCameraIcon from '@mui/icons-material/LinkedCamera';
import AdbIcon from '@mui/icons-material/Adb';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import './Home.css';


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
                {/* <img src={cameraMan} /> */}
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
          <p className='headChip hiddenformobile'>The revolutionary product <hr className='chipHR'></hr></p>
          
          <div className="hiddenformobile">
            <Grid container spacing={5}>
              <Grid item xs={4}>
              <h1 className="prodDescHeading">What is HawkAI</h1>
              <p className='columnText'>
                HawkAI captures candid photos effortlessly, letting you live in the moment without worrying about taking pictures. Using advanced AI technology, HawkAI automatically adjusts the camera settings to capture stunning, natural shots that truly capture the essence of the moment. Whether you're on a romantic date, traveling to a new place, or spending time with loved ones, HawkAI ensures that you never miss a moment. Experience life to the fullest and let HawkAI capture memories that will last a lifetime.
              </p>
              <a className='columnBtn' href='/#'>Learn more <span><ArrowForwardIosRoundedIcon className='columnBtnarrow' /></span></a>
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




      {/*  WHY OUR PRODUCT  */}
        <section className='USP'>
        <p className='headChip hiddenformobile'>The benefits <hr className='chipHR'></hr></p>
          <Grid container spacing={5} sx={{ marginTop:'5%' }}>
            <Grid item xs={4} className="benefits">
              <AccessibilityNewIcon className="camIcon benfitIcon" />
              <h1 className="benefitsHead">Hands-free Photography</h1>
              <p className="benefitsDesc">
              HawkAI captures candid photos effortlessly, letting you live in the moment without worrying about taking pictures. Using advanced AI technology
              </p>
              <AdbIcon className='adbIcon benfitIcon' />
              <h1 className="benefitsHead">AI Powered Image Processing</h1>
              <p className="benefitsDesc">
              HawkAI captures candid photos effortlessly, letting you live in the moment without worrying about taking pictures. Using advanced AI technology
              </p>
            </Grid>
            <Grid item xs={4} className="benefits">
            <h1 className='uspHeading '>Why <br /> HawkAI</h1>
            <LinkedCameraIcon className='cameraIcon benfitIcon' />
            <h1 className="benefitsHead">AI Powered image processing</h1>
              <p className="benefitsDesc">
              HawkAI captures candid photos effortlessly, letting you live in the moment without worrying about taking pictures. Using advanced AI technology
              </p>
            </Grid>
            <Grid item xs={4} className="benefits">
              <VisibilityIcon className='eyeIcon benfitIcon' />
              <h1 className="benefitsHead">Emotions & Facial Recognition</h1>
              <p className="benefitsDesc">
              HawkAI captures candid photos effortlessly, letting you live in the moment without worrying about taking pictures. Using advanced AI technology
              </p>
              <AppShortcutIcon className='resIcon benfitIcon' />
              <h1 className="benefitsHead">High Resolution Images</h1>
              <p className="benefitsDesc">
              HawkAI captures candid photos effortlessly, letting you live in the moment without worrying about taking pictures. Using advanced AI technology
              </p>
            </Grid>
          </Grid>
        
        </section>





        <Box sx={{ height:'100vh' }} >

        </Box>


      </div>
    )

}