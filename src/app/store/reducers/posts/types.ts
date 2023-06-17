import type { IPostsDto } from "../../../../shared/api/postsApi/posts.dto";

export interface IState {
  posts: IPostsDto[];
  isLoading: boolean;
  page: number;
  limit: number;
}

export enum PostsActionTypes {
  GET_POSTS = "GET_POSTS",
  SET_POSTS = "SET_POSTS",
  POSTS_LOADER = "POSTS_LOADER",
}

interface GetPostsAction {
  type: PostsActionTypes.GET_POSTS;
}

interface SetPostsAction {
  type: PostsActionTypes.SET_POSTS;
  payload: IPostsDto[];
}

interface PostsLoadingAction {
  type: PostsActionTypes.POSTS_LOADER;
}

export type PostsAction = GetPostsAction | SetPostsAction | PostsLoadingAction;
