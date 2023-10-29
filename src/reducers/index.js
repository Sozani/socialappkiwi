//This file to combine all the reducers in this folder and use it easy from here
import { combineReducers } from "redux";

import authReducer from "./authReducer";

export const reducers = combineReducers({
  authReducer,
});
