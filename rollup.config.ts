import typescript from "rollup-plugin-typescript2"
import pkg from "./package.json"

const config = [
  {
    input: "./src/index.ts",
    output: [
      {
        file: "./lib/index.cjs.js",
        format: "cjs",
      },
      {
        file: "./lib/index.esm.js",
        format: "es",
      },
    ],
    external: [...Object.keys(pkg.peerDependencies)],
    plugins: [
      typescript({ tsconfig: "./tsconfig.json" })
    ],
  },
]

export default config
