import fs from "node:fs/promises"
import React from "react"
import ReactDom from "react-dom/server"
import { StaticRouter } from "react-router-dom/server.js"

import App from "./App"
import { routes } from "./resources/routes"

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

    const baseUrl = Array.from({ length: route.path.split("/").length - 1 })
      .fill(null)
      .reduce<string>((previousValue) => `${previousValue}../`, "./")

    console.log("BaseUrl", baseUrl)

    // @ts-ignore
    const html = baseHtml.replace("$IDENTIFIER$", string).replaceAll("$BASE$", baseUrl)

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
