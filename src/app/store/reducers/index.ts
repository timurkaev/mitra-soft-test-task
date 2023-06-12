import { combineReducers } from "redux";
import { postsReducer } from "./posts/postsReducer";

export const reducers = combineReducers({
  postsReducer,
});
