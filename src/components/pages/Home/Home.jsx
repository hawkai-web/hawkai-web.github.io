import React from "react";
import { Grid, Button } from "@mui/material"; 
import cameraMan from '../../../assets/home/cameraMan.svg';
import './Home.css';

export default function Home() {

    return(
      <div className="hero">

        <section className='heroMain'>
          <Grid container>
            <Grid item xs={7}>
            <h1 className="tagline">Capturing moments so you dont have to!</h1>
            <Button className='btnFilled heroBtn'>Get App</Button>
            <Button className='btnOutline heroBtn'>Info</Button>
            </Grid>
            <Grid item xs={5}>
                <img src={cameraMan} />
            </Grid>
          </Grid>
        </section>


      </div>
    )

}