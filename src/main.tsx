import React from "react";
import ReactDOM from "react-dom/client";
import "./css/header.css";
import "./css/global.css";
import AllPages from "./components/AllPages";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AllPages></AllPages>
  </React.StrictMode>
);
