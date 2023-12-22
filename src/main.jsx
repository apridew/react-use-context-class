import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./context/ThemeProvider.jsx";
import { MenuProvider } from "./context/MenuProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MenuProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </MenuProvider>
  </React.StrictMode>
);
