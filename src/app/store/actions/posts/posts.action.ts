import type { IPostsDto } from "../../../../shared/api/postsApi/posts.dto";
import { PostsActionTypes } from "../../reducers/posts/types";

export const postsLoader = () => ({
  type: PostsActionTypes.POSTS_LOADER,
});

export const getPosts = () => ({
  type: PostsActionTypes.GET_POSTS,
});

export const setPosts = (payload: IPostsDto[]) => ({
  type: PostsActionTypes.SET_POSTS,
  payload,
});
