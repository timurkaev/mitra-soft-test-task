import type { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../../app/store/actions/posts/posts.action";
import type { RootState } from "../../../app/store";
import { useEffect } from "react";
import { Loader } from "../../../shared/ui/Loader/Loader";

const MainPage: FC = () => {
  const { posts, isLoading } = useSelector(
    (store: RootState) => store.postsReducer
  );
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
        {!isLoading ? (
          <Loader isList={true} />
        ) : (
          posts.map((el) => <li key={el.id}>{el.title}</li>)
        )}
      </ul>
    </div>
  );
};

export default MainPage;
