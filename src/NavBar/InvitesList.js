import React, { useEffect, useState } from "react";
// import { teamActions } from "../_actions";

import { useSelector } from "react-redux";

export const InvitesList = () => {
  // const dispatch = useDispatch();

  const notif = useSelector(state => state.notification);
  const t = useSelector(state => state.findTeam);
  const [hasError, setErrors] = useState(false);
  const [planets, setPlanets] = useState([]);

  const [user] = React.useState(JSON.parse(localStorage.getItem("user")));
  // async function fetchData() {
  //   for (let i = 0; notif.length; i++) {
  //     if (i === 2) {
  //       break;
  //     }
  //     const res = await fetch(
  //       "http://localhost:3001/team/find/" + notif[i].invitingLeader
  //     );
  //     res
  //       .json()
  //       .then(res => setPlanets(res))
  //       .catch(err => setErrors(err));
  //     planets.push(res);
  //     console.log(planets);
  //     console.log(i);
  //   }
  // }
  // const findteamleader = id => {
  //   dispatch(teamActions.getTeamLeader(id));
  // };

  // Object.keys(notif).map(key => {
  //   findteamleader(notif[key].invitingLeader);
  // });

  return <p></p>;
};
