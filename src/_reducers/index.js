import { combineReducers } from "redux";

import { authentication } from "./authentication.reducer";
import { users } from "./users.reducer";
import { alert } from "./alert.reducer";
import { drawer } from "./drawer.reducer";
import { notification } from "./notification.reducer";
import { findTeam } from "./team.reducer";

const rootReducer = combineReducers({
  authentication,
  users,
  alert,
  drawer,
  notification,
  findTeam
});

export default rootReducer;
