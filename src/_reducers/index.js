import { combineReducers } from "redux";

import { authentication } from "./authentication.reducer";
import { users } from "./users.reducer";
import { alert } from "./alert.reducer";
import { drawer } from "./drawer.reducer";

const rootReducer = combineReducers({
  authentication,
  users,
  alert,
  drawer
});

export default rootReducer;
