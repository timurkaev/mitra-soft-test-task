import type { FC, ReactElement } from "react";
import styles from "./PostsList.module.css";
import { useTypedSelector } from "../../../shared/hooks/useTypedSelector";
import { Loader } from "../../../shared/ui/Loader/Loader";
import type { IPostsDto } from "../../../shared/api/postsApi/posts.dto";
import { ListGroup } from "react-bootstrap";
import { PostsItem } from "../../PostsItem";

export const PostsList: FC = (): ReactElement => {
  const { posts, isLoading } = useTypedSelector((state) => state.posts);

  return (
    <ListGroup className={styles.postsList}>
      {isLoading ? (
        <Loader isList={true} />
      ) : (
        posts.map((post: IPostsDto) => (
          <PostsItem
            key={post.id}
            title={post.title}
            body={post.body}
            userId={post.userId}
          />
        ))
      )}
    </ListGroup>
  );
};
