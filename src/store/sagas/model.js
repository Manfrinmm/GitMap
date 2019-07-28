import { put, call } from "redux-saga/effects";

import ModelActions from "../ducks/model";

export function* visible() {
  console.tron.log("cham");
  yield put(ModelActions.visible);
}
