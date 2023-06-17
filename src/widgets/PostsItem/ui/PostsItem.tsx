import type { FC, ReactElement } from "react";
import styles from "./PostsItem.module.css";
import { ListGroup } from "react-bootstrap";
import { Avatar } from "../../../shared/ui/Avatar/Avatar";
import { User } from "../../User";
import { useTypedSelector } from "../../../shared/hooks/useTypedSelector";

interface IPostsItemProps {
  userId: number;
  title: string;
  body: string;
}

export const PostsItem: FC<IPostsItemProps> = ({
  userId,
  title,
  body,
}): ReactElement => {
  return (
    <ListGroup.Item className={styles.listItem}>
      <div className={styles.userInfo}>
        <Avatar src={""} />
        <User userId={userId} />
      </div>
      <h3 className={styles.postTitle}>
        {title.charAt(0).toUpperCase() + title.slice(1)}
      </h3>
      <span>{body}</span>
    </ListGroup.Item>
  );
};
