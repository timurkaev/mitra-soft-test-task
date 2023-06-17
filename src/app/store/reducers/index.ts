import { combineReducers } from "redux";
import { postsReducer } from "./posts/postsReducer";
import { usersReducer } from "./users/usersReducer";

export const reducers = combineReducers({
  posts: postsReducer,
  users: usersReducer,
});

export type RootState = ReturnType<typeof reducers>;
