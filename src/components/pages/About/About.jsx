import React from 'react';
import { Grid } from '@mui/material';
import imgCam from '../../../assets/home/cameraMan.svg';
import imgAbout from '../../../assets/about.svg';
import './About.css';

function About() {
  return (
    <div>

        <section className='aboutPage'>
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

    </div>
  )
}

export default About