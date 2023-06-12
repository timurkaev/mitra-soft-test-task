import { GET_POSTS } from "../../constants";

const initialState = {
  posts: [],
};

export const postsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: [...state.posts, ...payload],
      };
    default:
      return state;
  }
};
