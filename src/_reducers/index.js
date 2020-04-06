import { combineReducers } from "redux";

import { authentication } from "./authentication.reducer";
import { users } from "./users.reducer";
import { alert } from "./alert.reducer";
import { drawer } from "./drawer.reducer";
import { notification } from "./notification.reducer";
import { findTeam } from "./team.reducer";
import { teams } from "./team.reducer";
import { tournaments } from "./tournament.reducer";
import { matchs } from "./match.reducer";

const rootReducer = combineReducers({
  authentication,
  users,
  alert,
  drawer,
  notification,
  findTeam,
  tournaments,
  teams,
  matchs
});

export default rootReducer;
