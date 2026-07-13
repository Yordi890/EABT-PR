import globals from "globals";

import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

import { defineConfig } from "@eslint/config-helpers";

import baseConfig from "./eslint.config.base.js";

/**
 * ESLint configuration for React frontend applications.
 */
export const frontendConfig = defineConfig(
  ...baseConfig,

  react.configs.flat.recommended,
  reactHooks.configs.flat.recommended,

  {
    files: ["**/*.{ts,tsx}"],

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      parserOptions: {
        projectService: true,
      },
    },

    rules: {
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/no-misused-promises": "error",
    },

    settings: {
      react: {
        version: "19.2.6",
      },
    },
  },
);
