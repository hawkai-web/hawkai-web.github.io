import React from 'react';
import { Grid } from '@mui/material';
import imgCam from '../../../assets/home/cameraMan.svg';
import imgAbout from '../../../assets/about.svg';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import RadarOutlinedIcon from '@mui/icons-material/RadarOutlined';
import OutlinedFlagSharpIcon from '@mui/icons-material/OutlinedFlagSharp';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import './About.css';

function About() {
  return (
    <div className='aboutPage'>

        <section>
            <h1 className='about-heading'>About us.</h1>
            <Grid container>
                <Grid item xs={5}>
                    <p className='sub-headText'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor aliquam est sed finibus. Nunc a euismod ante. In pharetra nibh a enim hendrerit finibus. Donec lectus odio, semper id nisl eu, congue euismod diam. Proin viverra ut magna in ultricies. Ut luctus interdum sem eget vestibulum.
                    </p>
                    <img src={imgAbout} alt='camera man' className='imgAbout' />
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={5}>
                    <p className='aboutText'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor aliquam est sed finibus. Nunc a euismod ante. In pharetra nibh a enim hendrerit finibus. Donec lectus odio, semper id nisl eu, congue euismod diam. Proin viverra ut magna in ultricies. Ut luctus interdum sem eget vestibulum. Proin ut malesuada ipsum, vitae ornare urna. Quisque ligula arcu, porttitor id fringilla a, dictum ac eros. Maecenas vel felis diam. Curabitur sollicitudin lorem at risus consectetur, consequat posuere lacus posuere. Integer magna velit, aliquet ac nisl vitae, volutpat vehicula felis. Quisque rutrum, magna sed cursus aliquet, ligula nisl interdum felis, id maximus tellus tellus in sem. Donec vel justo facilisis, tristique dolor at, tristique nibh.
                    </p>
                    <p className='aboutText'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor aliquam est sed finibus. Nunc a euismod ante. In pharetra nibh a enim hendrerit finibus. Donec lectus odio, semper id nisl eu, congue euismod diam. Proin viverra ut magna in ultricies. Ut luctus interdum sem eget vestibulum. Proin ut malesuada ipsum, vitae ornare urna. Quisque ligula arcu, porttitor id fringilla a, dictum ac eros. Maecenas vel felis diam. Curabitur sollicitudin lorem at risus consectetur, consequat posuere lacus posuere. Integer magna velit, aliquet ac nisl vitae, volutpat vehicula felis. Quisque rutrum, magna sed cursus aliquet, ligula nisl interdum felis, id maximus tellus tellus in sem. Donec vel justo facilisis, tristique dolor at, tristique nibh.
                    </p>
                </Grid>
                <Grid xs={1} />
            </Grid>

            <Grid container sx={{ marginTop: '8%' }} spacing={3}>
                <Grid item xs={6}>
                    <h1 className='gridHead'>The importance of candid pictures</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor aliquam est sed finibus. Nunc a euismod ante. In pharetra nibh a enim hendrerit finibus. Donec lectus odio, semper id nisl eu, congue euismod diam. Proin viverra ut magna in ultricies. Ut luctus interdum sem eget vestibulum. Proin ut malesuada ipsum, vitae ornare urna. Quisque ligula arcu, porttitor id fringilla a, dictum ac eros. Maecenas vel felis diam. Curabitur sollicitudin lorem at risus consectetur, consequat posuere lacus posuere. Integer magna velit, aliquet ac nisl vitae, volutpat vehicula felis. Quisque rutrum, magna sed cursus aliquet, ligula nisl interdum felis, id maximus tellus tellus in sem. Donec vel justo facilisis, tristique dolor at, tristique nibh.
                    </p>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor aliquam est sed finibus. Nunc a euismod ante. In pharetra nibh a enim hendrerit finibus. Donec lectus odio, semper id nisl eu, congue euismod diam. Proin viverra ut magna in ultricies. Ut luctus interdum sem eget vestibulum. Proin ut malesuada ipsum, vitae ornare urna. Quisque ligula arcu, porttitor id fringilla a, dictum ac eros. Maecenas vel felis diam. Curabitur sollicitudin lorem at risus consectetur, consequat posuere lacus posuere. Integer magna velit, aliquet ac nisl vitae, volutpat vehicula felis. Quisque rutrum, magna sed cursus aliquet, ligula nisl interdum felis, id maximus tellus tellus in sem. Donec vel justo facilisis, tristique dolor at, tristique nibh.
                    </p>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: 'right' }}>
                    <img src={imgCam} alt='camera man' />
                </Grid>
            </Grid>
        </section>

        <section style={{ marginTop: '8%' }}>
            <p className='headChip headChipMobile'><hr className='chipHR'/> THE VISION <hr className='chipHR'/></p>
            <Grid container spacing={4}>
                <Grid item xs={4}>
                    <h1 className='gridHead'>Who</h1>
                    <p style={{ marginTop: '-5%' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor aliquam est sed finibus. Nunc a euismod ante. In pharetra nibh a enim hendrerit finibus. Donec lectus odio, semper id nisl eu, congue euismod diam. Proin viverra ut magna in ultricies. Ut luctus interdum sem eget vestibulum. Proin ut malesuada ipsum, vitae ornare urna. Quisque ligula arcu, porttitor id fringilla a, dictum ac eros. Maecenas vel felis diam.
                    </p>
                </Grid>
                <Grid item xs={4}>
                    <h1 className='gridHead'>What</h1>
                    <p style={{ marginTop: '-5%' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor aliquam est sed finibus. Nunc a euismod ante. In pharetra nibh a enim hendrerit finibus. Donec lectus odio, semper id nisl eu, congue euismod diam. Proin viverra ut magna in ultricies. Ut luctus interdum sem eget vestibulum. Proin ut malesuada ipsum, vitae ornare urna. Quisque ligula arcu, porttitor id fringilla a, dictum ac eros. Maecenas vel felis diam.
                    </p>
                </Grid>
                <Grid item xs={4}>
                    <h1 className='gridHead'>Why</h1>
                    <p style={{ marginTop: '-5%' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor aliquam est sed finibus. Nunc a euismod ante. In pharetra nibh a enim hendrerit finibus. Donec lectus odio, semper id nisl eu, congue euismod diam. Proin viverra ut magna in ultricies. Ut luctus interdum sem eget vestibulum. Proin ut malesuada ipsum, vitae ornare urna. Quisque ligula arcu, porttitor id fringilla a, dictum ac eros. Maecenas vel felis diam.
                    </p>
                </Grid>
            </Grid>
        </section>


        <section>
            <p className='headChip' style={{ marginTop: '8%' }}>The Problem statement <hr className='chipHR'/></p>

            <Grid container>
                <Grid item xs={5} />
                <Grid item xs={7}>
                    <Grid container>
                    <Grid xs={2} className='gridIconHolderLEFT' sx={{backgroundColor: '#9dCAEB' }}>
                        <LightbulbOutlinedIcon fontSize='large'/>
                    </Grid>
                    <Grid xs={8} className='gridTempText' sx={{ backgroundColor: '#9dcbeb56'}}>
                        <p className='stateTitle'>Problem Statement</p>
                        <p className='text-small'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor aliquam est sed finibus. Nunc a euismod ante. In pharetra nibh a enim hendrerit finibus.
                        </p>
                    </Grid>
                    </Grid>
                </Grid>
            </Grid>
            


            <Grid container className='statement'>
                <Grid item xs={7}>
                    <Grid container>
                    <Grid xs={8} className='gridTempText' sx={{ backgroundColor: '#e18aaa52'}}>
                        <p className='stateTitle right-align'>Scope</p>
                        <p className='text-small right-align'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor aliquam est sed finibus. Nunc a euismod ante. In pharetra nibh a enim hendrerit finibus.
                        </p>
                    </Grid>
                    <Grid xs={2} className='gridIconHolderRIGHT' sx={{backgroundColor: '#E18AAA' }}>
                        <RadarOutlinedIcon fontSize='large'/>
                    </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={5} />
                
            </Grid>



            <Grid container className='statement'>
                <Grid item xs={5} />
                <Grid item xs={7}>
                    <Grid container>
                    <Grid xs={2} className='gridIconHolderLEFT' sx={{backgroundColor: '#82ca6b' }}>
                        <OutlinedFlagSharpIcon fontSize='large'/>
                    </Grid>
                    <Grid xs={8} className='gridTempText' sx={{ backgroundColor: '#83ca6b42'}}>
                        <p className='stateTitle'>Goal</p>
                        <p className='text-small'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor aliquam est sed finibus. Nunc a euismod ante. In pharetra nibh a enim hendrerit finibus.
                        </p>
                    </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container className='statement'>
                <Grid item xs={7}>
                    <Grid container>
                    <Grid xs={8} className='gridTempText' sx={{ backgroundColor: 'rgba(247, 148, 98, 0.356)'}}>
                        <p className='stateTitle right-align'>Benefits</p>
                        <p className='right-align text-small'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor aliquam est sed finibus. Nunc a euismod ante. In pharetra nibh a enim hendrerit finibus.
                        </p>
                    </Grid>
                    <Grid xs={2} className='gridIconHolderRIGHT' sx={{backgroundColor: 'rgb(247 147 98)' }}>
                        <EqualizerOutlinedIcon fontSize='large'/>
                    </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={5} />
                
            </Grid>
            
        </section>

    </div>
  )
}

export default About