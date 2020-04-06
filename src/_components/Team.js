import React, { useEffect } from "react";
import { useStyles } from "../HomePage/HomePage";
import { useSelector, useDispatch } from "react-redux";
import { TeamList } from "./TeamList";
import { teamActions } from "../_actions/team.actions";
import clsx from "clsx";

export const Team = () => {
  const open = useSelector(state => state.drawer);
  const dispatch = useDispatch();
  const classes = useStyles();
  useEffect(() => {
    dispatch(teamActions.getAllteams());
  }, [dispatch]);
  return (
    <div>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div style={{ marginLeft: "300px" }}>
          <h1> All teams </h1>
          <TeamList key="1" />
        </div>
      </main>
    </div>
  );
};
