import React from "react";
import { Grid, Button, Box } from "@mui/material"; 
import cameraMan from '../../../assets/home/cameraMan.svg';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ImageSlider from './imageSlider';
import overImage from '../../../assets/gallery/overImage.webp';
import './Home.css';

export default function Home() {

    return(
      <div className="hero">

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

        <section className="prodDesc">
          <p className='headChip hiddenformobile'>The revolutionary product <hr className='chipHR'></hr></p>
          
          <div className="hiddenformobile">
            <Grid container spacing={5}>
              <Grid item xs={4}>
              <h1 className="prodDescHeading">What is HawkAI</h1>
              <p className='columnText'>
                HawkAI captures candid photos effortlessly, letting you live in the moment without worrying about taking pictures. Using advanced AI technology, HawkAI automatically adjusts the camera settings to capture stunning, natural shots that truly capture the essence of the moment. Whether you're on a romantic date, traveling to a new place, or spending time with loved ones, HawkAI ensures that you never miss a moment. Experience life to the fullest and let HawkAI capture memories that will last a lifetime.
              </p>
              <a className='columnBtn' href='/about'>Learn more <span><ArrowForwardIosRoundedIcon className='columnBtnarrow' /></span></a>
              </Grid>
              <Grid item xs={8}>
                <img src={overImage} alt='over_image' className="overImage" />
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

        <section className='USP'>
          <h1 className='uspHeading'>Why HawkAI?</h1>
          <Grid container>
            <Grid item xs={6}>

            </Grid>
            <Grid item xs={6}>

            </Grid>
          </Grid>
        </section>

        <div>
        
        </div>

        <Box sx={{ height:'100vh' }}>

        </Box>


      </div>
    )

}