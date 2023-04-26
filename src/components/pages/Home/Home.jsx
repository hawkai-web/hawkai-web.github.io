import React from "react";
import { Grid, Typography } from "@mui/material"; 
import './Home.css';

export default function Home() {

    return(
      <div className="hero">

        <section className='heroMain'>
          <h1 className="tagline">Capturing moments <br/> so you dont have to!</h1>
        </section>
        <section className="phoneContainer">
          <Grid container>
            <Grid item xs={2} center>

            </Grid>
            <Grid item xs={8} center>
            <div className="phone"></div>
            </Grid>
            <Grid item xs={2} center>

            </Grid>
          </Grid>
          
        </section>

        <section className="brandAD">
          <div className='brandADWrapper'>
            <h1 className="brandADText">Hawk
              <div className="brandADInner">
                <span>
                  eye <br/>
                  AI
                  </span>
              </div>
            </h1>
          </div>
          
          
        </section>


      </div>
    )

}