import { instance } from "../index";
import type { IPostsDto } from "./posts.dto";
import type { AxiosResponse } from "axios";

export class PostsApi {
  static async getPosts(limit = 10, page = 1): Promise<IPostsDto[] | void> {
    const response = await instance
      .get("/posts", {
        params: {
          _limit: limit,
          _page: page,
        },
      })
      .then((res: AxiosResponse<IPostsDto[]>) => res.data)
      .catch((err) => console.warn(err));
    return response;
  }
}
