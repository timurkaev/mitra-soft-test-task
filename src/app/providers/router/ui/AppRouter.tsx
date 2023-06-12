import { Route, Routes } from "react-router-dom";
import { routeConfig } from "../../../../shared/config/routeConfig/routeConfig";
import type { FC } from "react";
import { Suspense } from "react";
import { Loader } from "../../../../shared/ui/Loader/Loader";

const AppRouter: FC = () => (
  <Routes>
    {Object.values(routeConfig).map(({ element, path }) => (
      <Route
        key={path}
        path={path}
        element={
          <Suspense fallback={<Loader />}>
            <div className="page-wrapper">{element}</div>
          </Suspense>
        }
      />
    ))}
  </Routes>
);

export default AppRouter;
