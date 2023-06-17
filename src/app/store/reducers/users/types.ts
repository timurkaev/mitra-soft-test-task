import type { IUsersDto } from "../../../../shared/api/usersApi/users.dto";

export interface IState {
  user: IUsersDto;
  isLoading: boolean;
}

export enum UsersActionTypes {
  GET_USERS = "GET_USERS",
  SET_USERS = "SET_USERS",
  USERS_LOADING = "USERS_LOADING",
}

export interface IGetUsersAction {
  type: UsersActionTypes.GET_USERS;
  payload: number;
}

export interface ISetUsersAction {
  type: UsersActionTypes.SET_USERS;
  payload: IUsersDto;
}

export interface IUsersLoadingAction {
  type: UsersActionTypes.USERS_LOADING;
}

export type UsersAction =
  | IGetUsersAction
  | ISetUsersAction
  | IUsersLoadingAction;
