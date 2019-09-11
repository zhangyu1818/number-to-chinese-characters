import babel from "rollup-plugin-babel";
import clear from "rollup-plugin-clear";
import { uglify } from "rollup-plugin-uglify";

export default {
  input: "index.js",
  output: {
    dir: "dist",
    format: "umd",
    name: "N2C"
  },
  plugins: [clear({ targets: ["dist"] }), babel(), uglify()]
};
