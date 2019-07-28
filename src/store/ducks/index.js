import { combineReducers } from "redux";

import { reducer as User } from "./user";
import { reducer as Model } from "./model";

const reducers = combineReducers({
  User,
  Model
});

export default reducers;
