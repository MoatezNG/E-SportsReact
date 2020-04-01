import React from "react";
/* import { useSelector } from "react-redux"; */
import { PrimarySearchAppBar } from "../NavBar/PrimarySearchAppBar";
/* import { makeStyles } from "@material-ui/core/styles"; */
import { TournamentList } from "./TournamentList";
import { useEffect } from "react";
import { tournamentActions } from "../_actions/tournament.actions";
import { useSelector, useDispatch } from "react-redux";
export const Tournament = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(tournamentActions.getTournaments());
  }, [dispatch]);

  /*   const drawerWidth = 240; */
  /* const useStyles = makeStyles(theme => ({
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    root: {
      flexGrow: 1
    },
    paper: {
      height: 140,
      width: 100
    },
    control: {
      padding: theme.spacing(2)
    },
    drawerPaper: {
      width: drawerWidth
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: "flex-end"
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      marginLeft: -drawerWidth
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    },
    contentCenter: {
      marginLeft: 250
    }
  })); */
  /* 
  const open = useSelector(state => state.drawer);
  const classes = useStyles(); */
  /* console.log(tournaments); */

  return (
    <>
      <PrimarySearchAppBar />
      <TournamentList />
    </>
  );
};

export default Tournament;
