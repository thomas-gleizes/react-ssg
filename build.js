import { build } from "esbuild"
import { nodeExternalsPlugin } from "esbuild-node-externals"
import postCssPlugin from "esbuild-style-plugin"
import tailwind from "tailwindcss"
import autoprefixer from "autoprefixer"

const [, , dev] = process.argv

void build({
  entryPoints: ["src/server.tsx"],
  target: "node18",
  format: "esm",
  platform: "node",
  outdir: "dist",
  watch: dev === "--dev",
  logLevel: "debug",
  bundle: true,
  plugins: [nodeExternalsPlugin()]
})

void build({
  entryPoints: ["src/main.tsx", "src/styles/tailwind.css"],
  target: "chrome96",
  watch: dev === "--dev",
  logLevel: "debug",
  platform: "browser",
  bundle: true,
  outdir: "dist",
  plugins: [
    postCssPlugin({
      postcss: {
        plugins: [tailwind, autoprefixer]
      }
    })
  ]
})
