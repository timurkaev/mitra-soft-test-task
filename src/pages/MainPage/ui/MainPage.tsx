import type { FC } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../../../app/store/actions/posts/posts.action";
import { useEffect } from "react";
import { Loader } from "../../../shared/ui/Loader/Loader";
import { useTypedSelector } from "../../../shared/hooks/useTypedSelector";
import type { IPostsDto } from "../../../shared/api/postsApi/posts.dto";

const MainPage: FC = () => {
  const { posts, isLoading } = useTypedSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleIncrease = () => {
      dispatch(getPosts());
    };
    handleIncrease();
  }, []);

  console.log(isLoading);

  return (
    <div>
      <ul>
        {isLoading ? (
          <Loader isList={true} />
        ) : (
          posts.map((el: IPostsDto) => <li key={el.id}>{el.title}</li>)
        )}
      </ul>
    </div>
  );
};

export default MainPage;
