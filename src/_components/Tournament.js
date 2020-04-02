import React from "react";
import { TournamentList } from "./TournamentList";
import { useEffect } from "react";
import { tournamentActions } from "../_actions/tournament.actions";
import { useSelector, useDispatch } from "react-redux";
import { useStyles } from "../HomePage/HomePage";
import clsx from "clsx";

export const Tournament = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(tournamentActions.getTournaments());
  }, [dispatch]);

  const classes = useStyles();
  const open = useSelector(state => state.drawer);

  return (
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: open
      })}
    >
      <TournamentList />
    </main>
  );
};

export default Tournament;
