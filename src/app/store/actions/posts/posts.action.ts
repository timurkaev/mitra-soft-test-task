import { GET_POSTS, POSTS_LOADER, SET_POSTS } from "../../constants";
import type { IPostsDto } from "../../../../shared/api/postsApi/posts.dto";

export const postsLoader = () => ({
  type: POSTS_LOADER,
});

export const getPosts = () => ({
  type: GET_POSTS,
});

export const setPosts = (payload: IPostsDto[]) => ({
  type: SET_POSTS,
  payload,
});
