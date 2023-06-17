import { instance } from "..";
import type { IUsersDto } from "./users.dto";

export class UsersApi {
  static async getUsers(userId: number): Promise<IUsersDto> {
    const response = await instance
      .get(`/users/${userId}`)
      .then((res) => res.data)
      .catch((err) => console.warn(err));
    return response;
  }
}
