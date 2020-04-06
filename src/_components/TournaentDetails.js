import React from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useStyles } from "../HomePage/HomePage";
import { tournamentActions } from "../_actions/tournament.actions";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { parsing } from "../_helpers/image";

import "../_styles/brackets.css";
import { Test } from "./test";

import { Brackets } from "./Brackets";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}
const useStylesTournamentDetails = makeStyles(theme => ({
  root: {
    backgroundColor: "rgba(220, 220, 220)"
  },
  TextColor: {
    color: "rgba(23,23,118)"
  },
  media: {
    height: 140
  }
}));
export const TournaentDetails = () => {
  const classes = useStyles();
  const open = useSelector(state => state.drawer);
  const tournament = useSelector(state => state.tournament);

  let headline;

  let { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(tournamentActions.getTournament(id));
  }, [dispatch, id]);
  const classesTournamentDetails = useStylesTournamentDetails();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: open
      })}
    >
      <div id="root"></div>
      <div className={classes.contentCenter}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
            className={classesTournamentDetails.root}
          >
            <Tab
              label="Overview"
              {...a11yProps(0)}
              className={classesTournamentDetails.TextColor}
            />
            <Tab
              label="Participants"
              {...a11yProps(1)}
              className={classesTournamentDetails.TextColor}
            />
            <Tab
              label="Brackets"
              {...a11yProps(2)}
              className={classesTournamentDetails.TextColor}
            />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Card>
            <CardActionArea>
              <CardMedia
                className={classesTournamentDetails.media}
                image={parsing(tournament.tournamentPicture)}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {tournament.tournamentName}{" "}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {tournament.tournamentPicture}
                  This where the discription is loaded. Nothing to see Right now
                  please come back later
                  <div>{headline}</div>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
          <Test />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Brackets />
        </TabPanel>
      </div>
    </main>
  );
};
export default TournaentDetails;
