import { all, takeLatest } from "redux-saga/effects";

import { UserTypes } from "../ducks/user";
import { ModelTypes } from "../ducks/model";

import { load } from "./user";
import { visible } from "./model";

export default function* rootSaga() {
  yield all([
    takeLatest(UserTypes.LOAD_REQUEST, load)
    // takeLatest(ModelTypes.VISIBLE, visible)
  ]);
}
