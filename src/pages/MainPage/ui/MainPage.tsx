import type { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../../app/store/actions/posts/posts.action";

const MainPage: FC = () => {
  const count = useSelector((store) => store?.counter?.count || 0);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(getPosts());
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrease}>+</button>
    </div>
  );
};

export default MainPage;
