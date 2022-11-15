import fs from "node:fs/promises";
import React from "react";
import ReactDom from "react-dom/server";

import App from "./App.jsx";
import { StaticRouter } from "react-router-dom/server.js";

(async () => {
  const html = await fs
    .readFile("src/base.html")
    .then((document) => Buffer.from(document).toString("utf8"));

  const string = ReactDom.renderToString(
    <StaticRouter location="/">
      <App />
    </StaticRouter>
  );

  const result = html.replace("$IDENTIFIER$", string);

  console.log("Result", result);
})();
