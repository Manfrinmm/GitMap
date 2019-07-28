import { put, call, select } from "redux-saga/effects";
import api from "../../services/api";

import UserActions from "../ducks/user";

export function* load({ username }) {
  try {
    const { data } = yield call(api.get, `/users/${username}`);
    yield put(UserActions.loadSuccess(data));
  } catch (err) {
    yield put(UserActions.loadFailure());
  }
}
