import { POSTS_LOADER, SET_POSTS } from "../../constants";

const initialState = {
  posts: [],
  isLoading: false,
};

export const postsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POSTS_LOADER:
      return {
        ...state,
        isLoading: true,
      };

    case SET_POSTS:
      return {
        ...state,
        posts: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
