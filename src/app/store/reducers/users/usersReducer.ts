import type { IUsersDto } from "../../../../shared/api/usersApi/users.dto";
import type { IState, UsersAction } from "./types";
import { UsersActionTypes } from "./types";

const initialState: IState = {
  user: {} as IUsersDto,
  isLoading: false,
};

export const usersReducer = (
  state = initialState,
  action: UsersAction
): IState => {
  switch (action.type) {
    case UsersActionTypes.USERS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case UsersActionTypes.SET_USERS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    default:
      return state;
  }
};
