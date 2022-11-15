import fs from "node:fs/promises"
import React from "react"
import ReactDom from "react-dom/server"
import { StaticRouter } from "react-router-dom/server.js"

import App from "./App.jsx"
import { routes } from "./resources/routes.js"

const DIST_PATH = `${process.cwd()}/dist`

;(async () => {
  const baseHtml = await fs
    .readFile("src/base.html")
    .then((document) => Buffer.from(document).toString("utf8"))

  for (const route of routes) {
    const string = ReactDom.renderToString(
      <StaticRouter location={route.path}>
        <App />
      </StaticRouter>
    )

    const src = Array.from({ length: route.path.split("/").length - 1 })
      .fill(null)
      .reduce((previousValue) => `../${previousValue}`, "main.js")

    const html = baseHtml.replace("$IDENTIFIER$", string).replace("main.js", src)

    const path = `${DIST_PATH}${route.path}`

    await fs.mkdir(path, { recursive: true })
    await fs
      .writeFile(`${path}/index.html`, html)
      .then(() => console.log("Generated", route.path))
      .catch((err) => {
        console.log("err", route.path, err)
      })
  }
})()
