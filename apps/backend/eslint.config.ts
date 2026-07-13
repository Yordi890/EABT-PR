import { nestJsConfig } from "../../packages/config/eslint/eslint.config.backend.js";

/** @type {import("eslint").Linter.Config} */
export default [
  ...nestJsConfig,
  {
    ignores: ['.prettierrc.mjs', 'eslint.config.mjs'],
  },

];
