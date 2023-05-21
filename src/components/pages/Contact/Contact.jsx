import React from "react";
import { Grid, Button, Box, TextField, styled } from "@mui/material"; 
import SendIcon from '@mui/icons-material/Send';
import './Contact.css';


export default function Home() {

    return(
      <div className="contactPage">
        <h1 className="contactHeading">Reach out to us</h1>
          <Grid container>
            <Grid item xs={3} />


            <Grid item xs={6} sx={{ justifyContent: 'center' }}>


              <Grid container sx={{ justifyContent: 'center' }}>
                <Grid item xs={6} sx={{ justifyContent: 'center' }}>
                  <input type='text' placeholder="First Name" className="inputField" />
                </Grid>
                <Grid item xs={6} sx={{ justifyContent: 'center' }}>
                  <input type='text' placeholder="Last Name" className="inputField" />
                </Grid>
              </Grid>

              <Grid container>
                <Grid item xs={6}>
                  <input type='text' placeholder="Gender" className="inputField" />
                </Grid>
                <Grid item xs={6}>
                  <input type='text' placeholder="Profession" className="inputField" />
                </Grid>
              </Grid>


              <Grid container sx={{ justifyContent: 'center' }}>
                <Grid item xs={6}>
                  <input type='email' placeholder="Email Address" className="inputField" />
                </Grid>
                <Grid item xs={6}>
                  <input type='number' placeholder="Phone Number" className="inputField" />
                </Grid>
              </Grid>

              


              {/* <Grid container sx={{ marginTop: '10%', justifyContent:'center' }}>
                  <Grid item xs={12}>
                    <textarea placeholder="Enter your message" className="textarea inputField" />
                  </Grid>
              </Grid> */}

              <Grid container sx={{ textAlign: 'center', justifyContent:'center' }}>
                <Button className='btnFilled submit' size="large" sx={{ marginTop: '5%', textAlign:'center' }}>SEND &nbsp;<SendIcon fontSize="small" /></Button>
              </Grid>

            </Grid>


            <Grid item xs={3} />
          </Grid>
      </div>
    )

}