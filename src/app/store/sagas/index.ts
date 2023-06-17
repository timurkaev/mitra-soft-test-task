import { all } from "redux-saga/effects";
import { postsWatcher } from "./postsSaga/postsSaga";
import { usersWatcher } from "./usersSaga/usersSaga";

export default function* rootSaga() {
  yield all([postsWatcher(), usersWatcher()]);
}
