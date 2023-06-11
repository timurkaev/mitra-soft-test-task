import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app/App.tsx";
import ThemeProvider from "./app/providers/ThemeProvider/ThemeProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
