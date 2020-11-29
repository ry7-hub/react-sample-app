import { combineReducers } from "redux";

import authReducer from "./auth";
import profileReducer from "./profile";
import addUserReducer from "./adduser";
import userListReducer from "./userlist";

// export default combineReducers({
//   authReducer,
//   profileReducer,
//   addUserReducer,
// });

const appReducer = combineReducers({
  authReducer,
  profileReducer,
  addUserReducer,
  userListReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT_SUCCESS") {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
