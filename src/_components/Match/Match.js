import React, { useEffect } from "react";
import { useStyles } from "../../HomePage/HomePage";
import { useSelector, useDispatch } from "react-redux";
import { matchActions } from "../../_actions/match.actions";
import clsx from "clsx";
import MatchList from "./MatchList";
export const Match = () => {
  const open = useSelector(state => state.drawer);
  const dispatch = useDispatch();
  const classes = useStyles();
  useEffect(() => {
    dispatch(matchActions.getMatchbyteam("5e83397833051b336ea7fc48"));
  }, [dispatch]);
  return (
    <div>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div style={{ marginLeft: "300px" }}>
          <h1> Match History </h1>
          <MatchList />
        </div>
      </main>
    </div>
  );
};
