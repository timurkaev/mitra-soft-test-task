import { PostsApi } from "../../../../shared/api/postsApi/posts.api";
import { postsLoader, setPosts } from "../../actions/posts/posts.action";
import { GET_POSTS } from "../../constants";
import { call, put, takeEvery } from "redux-saga/effects";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export function* postsWorker(): Generator<any> {
  yield put(postsLoader());
  yield delay(3000);
  const data = yield call(PostsApi.getPosts);
  yield put(setPosts(data));
}

export function* postsWatcher() {
  yield takeEvery(GET_POSTS, postsWorker);
}
