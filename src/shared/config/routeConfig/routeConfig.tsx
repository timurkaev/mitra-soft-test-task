import type { RouteProps } from "react-router-dom";
import { MainPage } from "../../../pages/MainPage";
import { AboutPage } from "../../../pages/AboutPage";
import { UserInfoPage } from "../../../pages/UserInfoPage";
import { NotFoundPage } from "../../../pages/NotFoundPage";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  USER = "user",
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.USER]: "user/:id",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.USER]: {
    path: RoutePath.user,
    element: <UserInfoPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
