import React from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useStyles } from "../HomePage/HomePage";
import { tournamentActions } from "../_actions/tournament.actions";

import clsx from "clsx";
export const TournaentDetails = () => {
  const classes = useStyles();
  const open = useSelector(state => state.drawer);
  const tournament = useSelector(state => state.tournament);
  let { id } = useParams();
  const dispatch = useDispatch();
  console.log(id);
  useEffect(() => {
    dispatch(tournamentActions.getTournament(id));
  }, [dispatch, id]);
  return (
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: open
      })}
    >
      <div className={classes.contentCenter}>
        <p>NIKNI KEN 5EDMET {id} </p>
        <p>{tournament.tournamentName}</p>
      </div>
    </main>
  );
};
export default TournaentDetails;
