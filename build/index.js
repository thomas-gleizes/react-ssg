import { build } from "esbuild";
import { nodeExternalsPlugin } from "esbuild-node-externals";

void build({
  entryPoints: ["src/server.jsx"],
  target: "node18",
  format: "esm",
  platform: "node",
  outdir: "dist",
  watch: true,
  logLevel: "debug",
  bundle: true,
  plugins: [nodeExternalsPlugin()],
});

void build({
  entryPoints: ["src/main.jsx"],
  target: "chrome96",
  watch: true,
  logLevel: "debug",
  platform: "browser",
  bundle: true,
  outdir: "dist",
});
