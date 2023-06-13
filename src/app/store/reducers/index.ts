import { combineReducers } from "redux";
import { postsReducer } from "./posts/postsReducer";

export const reducers = combineReducers({
  posts: postsReducer,
});

export type RootState = ReturnType<typeof reducers>;
