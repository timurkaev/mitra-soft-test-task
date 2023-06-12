import { GET_POSTS, SET_POSTS } from "../../constants";

export const getPosts = () => ({
  type: GET_POSTS,
});

export const setPosts = (payload) => ({
  type: SET_POSTS,
  payload,
});
