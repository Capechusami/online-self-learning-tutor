import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppClerkProvider } from "./app/providers/ClerkProvider";
import { AppRouter } from "./app/router";
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppClerkProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AppClerkProvider>
  </React.StrictMode>
);
