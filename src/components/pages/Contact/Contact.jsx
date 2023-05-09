import React from "react";
import { Grid, Button, Box, TextField, styled } from "@mui/material"; 
import './Contact.css';


export default function Home() {

    return(
      <div className="contactPage">
        <h1 className="contactHeading">Reach out to us</h1>
          <Grid container spacing='8' sx={{ marginTop:'5%' }}>
            <Grid item xs='6'>
              <h1> Contact us</h1>
            </Grid>
            <Grid item xs='6'>
              <form>
                <Box className='nameHolder'>
                <input placeholder="First Name" type='text' className="name inputField" />
                  <input placeholder="Last Name" type='text' className="name inputField" />
                </Box>
                <Box className='nameHolder'>
                  <input placeholder="Email Address" type='text' className="name inputField" />
                  <input placeholder="Phone Number" type='text' className="name inputField" />
                </Box>
                <Box className='nameHolder'>
                <textarea className='text-area' placeholder="Your Message">
                </textarea>
                </Box>
              </form>
            </Grid>
          </Grid>
      </div>
    )

}