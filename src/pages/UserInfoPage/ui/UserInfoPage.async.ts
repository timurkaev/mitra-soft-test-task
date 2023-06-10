import { lazy } from "react";
import UserInfoPage from "./UserInfoPage";

export const UserInfoPageAsync = lazy(() => import("./UserInfoPage"));
