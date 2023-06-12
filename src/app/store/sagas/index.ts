import { getPosts } from "../actions/posts/posts.action";
import { takeEvery } from "redux-saga/effects";
import { GET_POSTS } from "../constants";
import { PostsApi } from "../../../shared/api/postsApi/posts.api";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export function* workerSaga() {
  yield delay(500);
  const data = yield PostsApi.getPosts();
  console.log(data);
}

export function* watchClickSaga() {
  yield takeEvery(GET_POSTS, workerSaga);
}

export default function* rootSaga() {
  console.log("Hello Saga");
  yield watchClickSaga();
}
