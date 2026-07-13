// packages/eslint-config/eslint.config.base.ts

import js from "@eslint/js";
import tseslint from "typescript-eslint";
import turboConfig from "eslint-config-turbo/flat";
import { defineConfig, globalIgnores } from "@eslint/config-helpers";

export default defineConfig(
  globalIgnores(["dist/**", "coverage/**", "node_modules/**", ".turbo/**"]),

  js.configs.recommended,

  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,

  ...turboConfig,

  {
    files: ["**/*.{ts,tsx,js,jsx}"],

    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },

    rules: {
      "no-console": "error",
    },
  },
);
