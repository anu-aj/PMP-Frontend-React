import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link, Outlet } from "react-router-dom";
import Login from './Login';
import Home from './Home';
import About from './About';
import Explore from './Explore';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 4 }}>
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function Navtab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
     <div className='Navtab'>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
       
         <Tab label="Home" {...a11yProps(0)} />
     
            <Tab label="Login" {...a11yProps(1)} />
          <Tab label="About" {...a11yProps(2)} />
          <Tab label="Explore" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <Home/>
      </TabPanel>  
      <TabPanel value={value} index={1}>
       <Login/>
      </TabPanel>
      
      <TabPanel value={value} index={2}>
        <About/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Explore/>
      </TabPanel>
    </Box>
    <Outlet/>
    </div> 
  
  );
}
export default Navtab;
