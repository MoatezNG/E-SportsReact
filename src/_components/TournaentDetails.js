import React, { useState } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useStyles } from "../HomePage/HomePage";
import { tournamentActions } from "../_actions/tournament.actions";
import { tournamentService } from "../_services/tournament.service";
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
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
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
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const useStylesTournamentDetails = makeStyles((theme) => ({
  root: {
    backgroundColor: "rgba(220, 220, 220)",
  },
  TextColor: {
    color: "rgba(23,23,118)",
  },
  media: {
    height: 140,
  },
}));
export const TournaentDetails = () => {
  const classes = useStyles();
  const open = useSelector((state) => state.drawer);
  const tournament = useSelector((state) => state.tournament);

  let headline;

  let { id } = useParams();
  const dispatch = useDispatch();
  const [hidden, setHidden] = useState(true);
  const [disable, setDisable] = useState(false);
  const [disableCheck, setDisableCheck] = useState(false);
  useEffect(() => {
    dispatch(tournamentActions.getTournament(id));

    /* setHidden(false); */
    /*    if (tournament.numberOfTeams > 0) {
      tournament.teams.forEach((element) => {
        if (element._id === parsedUser.user.team) {
          setHidden(false);
        }
      });
    } */
  }, [dispatch, hidden]);
  const [tournamentTeams, settournamentTeams] = useState(0);
  const [tournamentDate, setTournamentDate] = useState(tournament.dateRound0);
  const [full, setfull] = useState("");
  useEffect(() => {
    if (tournament.numberOfTeams > 0) {
      /*   let tournamentDat = new Date(tournament.dateRound0);
      setTournamentDate(tournamentDat); */
      /*  settournamentTeams(tournament.teams.length);
      console.log(tournamentTeams); */
      setfull(tournamentTeams + "/" + tournament.numberOfTeams);
      let dateNow = new Date();
      let dateFinale;
      if (tournament.numberOfTeams === 4) {
        dateFinale = new Date(tournament.dateRound1);
      } else if (tournament.numberOfTeams === 8) {
        dateFinale = new Date(tournament.dateRound2);
      } else if (tournament.numberOfTeams === 16) {
        dateFinale = new Date(tournament.dateRound3);
      }
      /*  dateNow.setHours(dateNow.getHours() + 1); */
      dateNow.setSeconds(0, 0);
      let dateTournament = new Date(tournament.dateRound0);
      dateTournament.setSeconds(0, 0);
      /*  console.log(typeof dateNow);
      console.log(typeof dateTournament); */
      console.log(dateTournament);
      console.log(dateNow);
      console.log(dateTournament.getTime() < dateNow.getTime());
      if (
        tournament.matchs.length == 0 &&
        dateTournament.getTime() <= dateNow.getTime()
      ) {
        console.log(tournament._id);

        tournamentService.createFirstMatchsTournament(tournament._id);
      }
      if (
        tournament.matchs.length > 0 &&
        dateTournament.getTime() < dateNow.getTime() &&
        tournament.matchs.length < 3
      ) {
        tournamentService.createNextMatchsTournament(tournament._id);
      }
      if (
        tournament.matchs.length > 0 &&
        dateTournament.getTime() < dateNow.getTime()
      ) {
        tournamentService.matchSimulation(tournament._id);
      }
    }

    let found = false;

    if (tournament.numberOfTeams > 0) {
      tournament.teams.forEach((element) => {
        if (element === parsedUser.user.team) {
          found = true;
        }
      });
      if (
        tournament.teams.length == tournament.numberOfTeams &&
        found == false
      ) {
        setDisable(true);
      }
      if (found == true) {
        setHidden(false);
      }
    }
    if (tournament.numberOfTeams > 0) {
      let dateNow = new Date();
      dateNow.setSeconds(0, 0);
      let dateTournament0 = new Date(tournament.dateRound0);
      dateTournament0.setSeconds(0, 0);
      let dateTournament1 = new Date(tournament.dateRound1);
      dateTournament1.setSeconds(0, 0);

      let dateTournament2 = new Date(tournament.dateRound2);
      dateTournament2.setSeconds(0, 0);

      let dateTournament3 = new Date(tournament.dateRound3);
      dateTournament3.setSeconds(0, 0);
      /*   console.log(dateNow);
      console.log(dateTournament0);
      console.log(dateNow.toString() == dateTournament0.toString()); */
      if (
        dateTournament0.toString() == dateNow.toString() ||
        dateTournament1.toString() == dateNow.toString() ||
        dateTournament2.toString() == dateNow.toString() ||
        dateTournament3.toString() == dateNow.toString()
      ) {
        setDisableCheck(true);
      }
      /* console.log(dateTournament0); */
    }
  }, [tournament]);
  const classesTournamentDetails = useStylesTournamentDetails();
  const [value, setValue] = React.useState(0);
  const parsedUser = JSON.parse(localStorage.getItem("user"));
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  let part = "Participate";
  /*  let full = "0"; */
  let found = false;

  /*   if (tournament.numberOfTeams > 0) { */
  /* full = tournamentTeams + "/" + tournament.numberOfTeams; */

  /*     tournament.teams.forEach((element) => {
      if (element._id === parsedUser.user.team) {
        found = true;

        part = "Cancel Participation";
      }
    });
    if (tournament.teams.length === tournament.numberOfTeams) {
      part = "Full";
    }
  } */

  /*   const participate = () => {
    const parsedUser = JSON.parse(localStorage.getItem("user"));
    if (part === "Participate") {
      part = "Cancel Participation";
      dispatch(
        tournamentActions.participateToTournament(
          "5e999104138f1a1310bb8426",
          tournament._id
        )
      );
      setHidden(true);
    } else if (part === "Cancel Participation") {
      dispatch(
        tournamentActions.participateToTournament(
          "5e999104138f1a1310bb8426",
          tournament._id
        )
      );
      part = "Participate";
      setHidden(false);
    }
  }; */
  function particip() {
    const parsedUser = JSON.parse(localStorage.getItem("user"));
    dispatch(
      tournamentActions.participateToTournament(
        parsedUser.user.team,
        tournament._id
      )
    );
    setHidden(false);
  }
  function departicip() {
    const parsedUser = JSON.parse(localStorage.getItem("user"));
    dispatch(
      tournamentActions.participateToTournament(
        parsedUser.user.team,
        tournament._id
      )
    );
    setHidden(true);
  }

  function checkIn() {
    let match;
    let dateNow = new Date();
    const parsedUser = JSON.parse(localStorage.getItem("user"));
    dateNow.setSeconds(0, 0);
    /* let dateTournament0 = new Date(tournament.dateRound0);
    dateTournament0.setSeconds(0, 0);
    let dateTournament1 = new Date(tournament.dateRound1);
    dateTournament1.setSeconds(0, 0);

    let dateTournament2 = new Date(tournament.dateRound2);
    dateTournament2.setSeconds(0, 0);

    let dateTournament3 = new Date(tournament.dateRound3);
    dateTournament3.setSeconds(0, 0); */
    tournament.matchs.forEach((element) => {
      let dateMatch = new Date(element.dateStart);
      dateMatch.setSeconds(0, 0);

      /* console.log(dateNow.toString() == dateMatch.toString()); */
      console.log(element.teams[1]._id.toString());
      console.log(parsedUser.user.team.toString());
      console.log(
        element.teams[1]._id.toString() == parsedUser.user.team.toString()
      );

      /*  console.log(element.teams[0] == parsedUser.user.team);
      console.log(element.teams[1] == parsedUser.user.team); */
      if (
        dateNow.toString() == dateMatch.toString() &&
        (element.teams[0]._id.toString() == parsedUser.user.team.toString() ||
          element.teams[1]._id.toString() == parsedUser.user.team.toString())
      ) {
        tournamentService.checkIn(element._id, parsedUser.user.team);
        alert("Checked");
      }
    });
  }

  return (
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: open,
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
                  This where the discription is loaded. Nothing to see Right now
                  please come back later
                  <div>{headline}</div>
                </Typography>

                <Typography gutterBottom variant="body2" component="p">
                  {/*   <p>
                    Date Start:
                    {tournamentDate}
                  </p> */}
                </Typography>
                {/*  <Chip label={full} color="primary" /> */}
                {/*    <Button size="small" color="primary" onClick={participate}>
                  {part}
                </Button> */}
                {hidden ? (
                  <Button
                    size="small"
                    color="primary"
                    disabled={disable}
                    onClick={particip}
                  >
                    Participate
                  </Button>
                ) : (
                  /* <a onClick={particip}> Participate</a> */
                  <Button
                    size="small"
                    color="primary"
                    disabled={disable}
                    onClick={departicip}
                  >
                    Cancel Participation
                  </Button>
                  /*     <a onClick={departicip}> Cancel Participation</a> */
                )}
                {disableCheck ? (
                  <Button size="small" color="primary" onClick={checkIn}>
                    Check
                  </Button>
                ) : null}
              </CardContent>
              {/* <span>
                {hidden ? (
                  <a onClick={() => setHidden(false)}> read more</a>
                ) : (
                  <a onClick={() => setHidden(true)}> read less</a>
                )}
              </span> */}
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
