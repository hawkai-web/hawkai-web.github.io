import React from "react";
import { Grid, Button } from "@mui/material"; 
import cameraMan from '../../../assets/home/cameraMan.svg';
import './Home.css';

export default function Home() {

    return(
      <div className="hero">

        <section className='heroMain'>

          <Grid container className='hiddenformobile'>
            <Grid item xs={7}>
            <h1 className="tagline">Capturing moments so <span>you</span> dont have to!</h1>
            <Button className='btnFilled heroBtn'>EXPLORE</Button>
            <Button className='btnOutline heroBtn'>Info</Button>
            </Grid>
            <Grid item xs={5} className="hiddenformobile">
                <img src={cameraMan} />
            </Grid>
          </Grid>

          <Grid container className="hiddenforlaptop">
            <Grid item xs={12}>
            <h1 className="tagline">Capturing moments so <span>you</span> dont have to!</h1>
            <div className='btnHoldermob'>
              <Button className='btnFilled heroBtn'>EXPLORE</Button>
              <Button className='btnOutline heroBtn'>Info</Button>
            </div>
            </Grid>
          </Grid>

        </section>


      </div>
    )

}