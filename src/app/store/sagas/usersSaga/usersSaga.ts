import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { setUsers, usersLoader } from "../../actions/users/users.action";
import type { IUsersDto } from "../../../../shared/api/usersApi/users.dto";
import { UsersApi } from "../../../../shared/api/usersApi/users.api";
import { UsersActionTypes } from "../../reducers/users/types";

export function* usersWorker(action: any) {
  yield put(usersLoader());
  const data: IUsersDto = yield call(UsersApi.getUsers, action.payload);
  yield put(setUsers(data));
}

export function* usersWatcher() {
  yield takeEvery(UsersActionTypes.GET_USERS, usersWorker);
}
