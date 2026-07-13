import globals from "globals";

import nestjsTyped from "@darraghor/eslint-plugin-nestjs-typed";

import { defineConfig } from "@eslint/config-helpers";

import baseConfig from "./eslint.config.base.js";

/**
 * ESLint configuration for NestJS applications.
 */
export const nestJsConfig = defineConfig(
  ...baseConfig,

  {
    files: ["**/*.ts"],

    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },

      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },

    plugins: {
      "@darraghor/nestjs-typed": nestjsTyped,
    },

    rules: {
      /*
       * TypeScript rules
       */
      "@typescript-eslint/no-explicit-any": "off",

      "@typescript-eslint/no-floating-promises": "warn",

      "@typescript-eslint/no-misused-promises": "error",

      "@typescript-eslint/no-unsafe-argument": "warn",

      "@typescript-eslint/require-await": "warn",

      /*
       * General backend rules
       */
      // "no-console": "error",
    },
  },
);
