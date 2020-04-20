import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useSelector, useDispatch } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { userActions } from "../_actions";
import {ProfileInfos} from "./ProfileInfos";
import {InfosUser} from "./infos";
import {PasswordUser} from "./infos";
import Autocomplete from '@material-ui/lab/Autocomplete';

import {Team} from "./Team";

import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
const useStyles = makeStyles(theme => ({
    input: {
        margin: '40px 0'
    },
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 900,
      },
      small: {
        width: theme.spacing(8),
        height: theme.spacing(8),
      },
      large: {
        width: theme.spacing(9),
        height: theme.spacing(9),
      },
}));


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  
  
  
  export   function ProfilePage() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = (index) => {
      setValue(index);
    };
  
    return (  <div className="col-md-8 col-md-offset-2">
      <div className={classes.root}>
     
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Profile Infos" {...a11yProps(0)} />
            <Tab label="My Teams" {...a11yProps(1)} />
            <Tab label="Password" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
          <InfosUser/>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
          <Team/>
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
           <PasswordUser/>         </TabPanel>
        </SwipeableViews>
      </div>
      </div>
    );
  }

