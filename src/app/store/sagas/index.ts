import { all } from "redux-saga/effects";
import { postsWatcher } from "./postsSaga/postsSaga";

export default function* rootSaga() {
  yield all([postsWatcher()]);
}
