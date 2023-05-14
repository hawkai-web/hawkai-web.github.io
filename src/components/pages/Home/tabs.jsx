import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}


export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'rgb(232 225 215)', display: 'flex', height: '90vh', padding:'2%' }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        disableRipple
        value={value}
        onChange={handleChange}
        className='Tabs'
        aria-label="Vertical tabs"
        sx={{
            borderRight: 1, 
            borderColor: 'divider',
            backgroundColor: 'rgb(232 225 215)',
            alignItems: 'flex-start'
        }}
      >
        <Tab className='Tab' disableRipple label="Setting the Parameters" {...a11yProps(0)} />
        <Tab className='Tab' disableRipple label="Hands-free mode" {...a11yProps(1)} />
        <Tab className='Tab' disableRipple label="Interactive mode" {...a11yProps(2)} />
        <Tab className='Tab' disableRipple label="Studio Lighting" {...a11yProps(3)} />
        <Tab className='Tab' disableRipple label="Capturing Candid moments" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <h1 className='tab-heading'>Setting the Parameters</h1>
        <div className='text-holder'>
          <p className='tab-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor aliquam est sed finibus. Nunc a euismod ante. In pharetra nibh a enim hendrerit finibus. Donec lectus odio, semper id nisl eu, congue euismod diam. Proin viverra ut magna in ultricies. Ut luctus interdum sem eget vestibulum. Proin ut malesuada ipsum, vitae ornare urna. Quisque ligula arcu, porttitor id fringilla a, dictum ac eros. Maecenas vel felis diam. Curabitur sollicitudin lorem at risus consectetur, consequat posuere lacus posuere. Integer magna velit, aliquet ac nisl vitae, volutpat vehicula felis. Quisque rutrum, magna sed cursus aliquet, ligula nisl interdum felis, id maximus tellus tellus in sem. Donec vel justo facilisis, tristique dolor at, tristique nibh.
          </p>
          <p className='tab-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor aliquam est sed finibus. Nunc a euismod ante. In pharetra nibh a enim hendrerit finibus. Donec lectus odio, semper id nisl eu, congue euismod diam. Proin viverra ut magna in ultricies. Ut luctus interdum sem eget vestibulum. Proin ut malesuada ipsum, vitae ornare urna. Quisque ligula arcu, porttitor id fringilla a, dictum ac eros. Maecenas vel felis diam. Curabitur sollicitudin lorem at risus consectetur, consequat posuere lacus posuere. Integer magna velit, aliquet ac nisl vitae, volutpat vehicula felis. Quisque rutrum, magna sed cursus aliquet, ligula nisl interdum felis, id maximus tellus tellus in sem. Donec vel justo facilisis, tristique dolor at, tristique nibh.
          </p>
          <p className='tab-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor aliquam est sed finibus. Nunc a euismod ante. In pharetra nibh a enim hendrerit finibus. Donec lectus odio, semper id nisl eu, congue euismod diam. Proin viverra ut magna in ultricies. Ut luctus interdum sem eget vestibulum. Proin ut malesuada ipsum, vitae ornare urna. Quisque ligula arcu, porttitor id fringilla a, dictum ac eros. Maecenas vel felis diam. Curabitur sollicitudin lorem at risus consectetur, consequat posuere lacus posuere. Integer magna velit, aliquet ac nisl vitae, volutpat vehicula felis. Quisque rutrum, magna sed cursus aliquet, ligula nisl interdum felis, id maximus tellus tellus in sem. Donec vel justo facilisis, tristique dolor at, tristique nibh.
          </p>
          <p className='tab-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor aliquam est sed finibus. Nunc a euismod ante. In pharetra nibh a enim hendrerit finibus. Donec lectus odio, semper id nisl eu, congue euismod diam. Proin viverra ut magna in ultricies. Ut luctus interdum sem eget vestibulum. Proin ut malesuada ipsum, vitae ornare urna. Quisque ligula arcu, porttitor id fringilla a, dictum ac eros. Maecenas vel felis diam. Curabitur sollicitudin lorem at risus consectetur, consequat posuere lacus posuere. Integer magna velit, aliquet ac nisl vitae, volutpat vehicula felis. Quisque rutrum, magna sed cursus aliquet, ligula nisl interdum felis, id maximus tellus tellus in sem. Donec vel justo facilisis, tristique dolor at, tristique nibh.
          </p>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h1 className='tab-heading'>Hands-free mode</h1>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h1 className='tab-heading'>Interactive mode</h1>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <h1 className='tab-heading'>Studio Lighting</h1>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <h1 className='tab-heading'>Capturing Candid moments</h1>
      </TabPanel>

    </Box>
  );
}