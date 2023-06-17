import type { FC } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../../../app/store/actions/posts/posts.action";
import { useEffect } from "react";
import { PostsList } from "../../../widgets/PostsList";
import { getUsers } from "../../../app/store/actions/users/users.action";
import { useTypedSelector } from "../../../shared/hooks/useTypedSelector";

const MainPage: FC = () => {
  const dispatch = useDispatch();

  const { users } = useTypedSelector((state) => state.users);

  useEffect(() => {
    const fetchPosts = (): void => {
      dispatch(getPosts());
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const fetchUsers = (): void => {
      dispatch(getUsers());
    };
    fetchUsers();
  }, []);

  console.log(users);

  return (
    <div>
      <PostsList />
    </div>
  );
};

export default MainPage;
