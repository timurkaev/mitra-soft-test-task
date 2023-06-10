import type { FC, ReactElement } from "react";
import "./styles/index.css";
import { Suspense } from "react";
import { AppRouter } from "./providers/router";
import { BrowserRouter } from "react-router-dom";
import { Header } from "../widgets/Header/ui/Header";

export const App: FC = (): ReactElement => {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback="">
          <Header />
          <AppRouter />
        </Suspense>
      </BrowserRouter>
    </div>
  );
};
