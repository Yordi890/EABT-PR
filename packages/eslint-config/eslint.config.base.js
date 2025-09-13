/** @type {import("eslint").Linter.Config} */
const turboConfig = require("eslint-config-turbo").default;
// import { turboConfig } from "eslint-config-turbo/flat";

module.exports = {
  root: true,
  ...turboConfig,
  extends: [
    // ...turboConfig.extends,
    // "plugin:@typescript-eslint/recommended", // Para que no permita cosas como el require
    "plugin:prettier/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint/eslint-plugin"],
  parser: "@typescript-eslint/parser",
  ignorePatterns: [
    ".*.js",
    "*.setup.js",
    "*.config.js",
    ".turbo/",
    "dist/",
    "coverage/",
    "node_modules/",
    ".husky/",
  ],
  rules: {
    "no-console": "error",
  },
};
