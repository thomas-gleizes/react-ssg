import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";

ReactDom.hydrateRoot(
  document.getElementById("root"),
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
