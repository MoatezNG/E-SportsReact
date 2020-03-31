import React from "react";
import { useSelector } from "react-redux";
import { PrimarySearchAppBar } from "../NavBar/PrimarySearchAppBar";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
export const Tournament = () => {
  const drawerWidth = 240;
  const useStyles = makeStyles(theme => ({
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
  }));

  const tournaments = useSelector(state => state.tournaments);
  const open = useSelector(state => state.drawer);
  const classes = useStyles();
  console.log(tournaments);
  return Object.keys(tournaments).map(key => {
    return (
      <>
        <PrimarySearchAppBar />
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.contentCenter}>
            <h1 key={tournaments[key].tournamentName}>
              {tournaments[key].tournamentName}{" "}
            </h1>
            <button></button>
          </div>
        </main>
      </>
    );
  });
};

export default Tournament;
