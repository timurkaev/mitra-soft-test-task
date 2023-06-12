import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app/App.tsx";
import ThemeProvider from "./app/providers/ThemeProvider/ThemeProvider";
import { Provider } from "react-redux";
import { store } from "./app/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
