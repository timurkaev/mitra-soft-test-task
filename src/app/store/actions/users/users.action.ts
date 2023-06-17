import type { IUsersDto } from "../../../../shared/api/usersApi/users.dto";
import type {
  IGetUsersAction,
  ISetUsersAction,
  IUsersLoadingAction,
} from "../../reducers/users/types";
import { UsersActionTypes } from "../../reducers/users/types";

export const usersLoader = (): IUsersLoadingAction => ({
  type: UsersActionTypes.USERS_LOADING,
});

export const getUsers = (userId: number): IGetUsersAction => ({
  type: UsersActionTypes.GET_USERS,
  payload: userId,
});

export const setUsers = (payload: IUsersDto): ISetUsersAction => ({
  type: UsersActionTypes.SET_USERS,
  payload,
});
