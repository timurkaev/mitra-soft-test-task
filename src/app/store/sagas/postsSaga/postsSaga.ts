import { PostsApi } from "../../../../shared/api/postsApi/posts.api";
import type { IPostsDto } from "../../../../shared/api/postsApi/posts.dto";
import { postsLoader, setPosts } from "../../actions/posts/posts.action";
import { call, put } from "redux-saga/effects";
import { takeEvery } from "redux-saga/effects";
import { PostsActionTypes } from "../../reducers/posts/types";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export function* postsWorker() {
  yield put(postsLoader());
  yield delay(500);
  const data: IPostsDto[] = yield call(PostsApi.getPosts);
  yield put(setPosts(data));
}

export function* postsWatcher() {
  yield takeEvery(PostsActionTypes.GET_POSTS, postsWorker);
}
