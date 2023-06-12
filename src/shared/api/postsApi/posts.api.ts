import { instance } from "../index";
import type { INewsDto } from "./posts.dto";
import type { AxiosResponse } from "axios";

export class PostsApi {
  static async getPosts(limit = 10, page = 1): Promise<INewsDto | void> {
    const response = await instance
      .get("/posts", {
        params: {
          _limit: limit,
          _page: page,
        },
      })
      .then((res: AxiosResponse<INewsDto>) => res.data)
      .catch((err) => console.warn(err));
    return response;
  }
}
