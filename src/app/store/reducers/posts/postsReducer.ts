import type { IState } from "./types";
import { PostsActionTypes, type PostsAction } from "./types";

const initialState: IState = {
  posts: [],
  isLoading: false,
  page: 0,
  limit: 10,
};

export const postsReducer = (state = initialState, action: PostsAction) => {
  switch (action.type) {
    case PostsActionTypes.POSTS_LOADER:
      return {
        ...state,
        isLoading: true,
      };

    case PostsActionTypes.SET_POSTS:
      return {
        ...state,
        posts: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
