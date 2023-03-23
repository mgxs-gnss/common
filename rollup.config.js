import fs from "fs";
import typescript from "@rollup/plugin-typescript";
import url from "@rollup/plugin-url";
import terser from "@rollup/plugin-terser";
import json from "@rollup/plugin-json";
import image from "@rollup/plugin-image";

const pkg = JSON.parse(
  fs.readFileSync("./package.json", { encoding: "utf-8" })
);

export default [
  {
    input: "src/index.ts",
    external: [
      ...Object.keys(pkg.peerDependencies),
      ...Object.keys(pkg.devDependencies),
      "react/jsx-runtime",
      "@emotion/react",
      /react\./,
    ],
    plugins: [
      image(),
      json(),
      url({
        include: ["**/*.ttf"],
        limit: Infinity,
      }),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
    ],
    output: [
      {
        file: pkg.main,
        format: "es",
      },
    ],
  },
];
