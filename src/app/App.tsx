import type { FC, ReactElement } from "react";
import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
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
          <main className="main">
            <AppRouter />
          </main>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};
