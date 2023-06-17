import axios from "axios";
import type { FC, ReactElement } from "react";
import { useEffect, useState } from "react";
import { useTypedSelector } from "../../../shared/hooks/useTypedSelector";
import { UsersApi } from "../../../shared/api/usersApi/users.api";
import type { IUsersDto } from "../../../shared/api/usersApi/users.dto";

interface IUserProps {
  userId: number;
}

export const User: FC<IUserProps> = ({ userId }): ReactElement => {
  const [user, setUser] = useState<IUsersDto>();
  const { isLoading } = useTypedSelector((state) => state.posts);

  const fetchUser = async () => {
    const response = await UsersApi.getUsers(userId);
    setUser(response);
    return response;
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>{isLoading ? <span>Загрузка</span> : <span>{user?.name}</span>}</div>
  );
};
