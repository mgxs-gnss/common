import image from "@rollup/plugin-image";
import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";
import url from "@rollup/plugin-url";
import react from "@vitejs/plugin-react-swc";
import fs from "fs";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

const pkg = JSON.parse(
  fs.readFileSync("./package.json", { encoding: "utf-8" })
);

export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/index.ts"),
      name: "@mgxs/common",
      // the proper extensions will be added
      fileName: "index",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        ...Object.keys(pkg.peerDependencies),
        ...Object.keys(pkg.devDependencies),
      ],
      plugins: [
        image(),
        json(),
        url({
          include: ["**/*.ttf"],
          limit: Infinity,
        }),
        terser(),
      ],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: "React",
        },
      },
    },
  },
});
