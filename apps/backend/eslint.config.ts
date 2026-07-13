import { nestJsConfig } from "@repo/eslint-config/backend";
import { defineConfig, globalIgnores } from "@eslint/config-helpers";

export default defineConfig(
  ...nestJsConfig,

  globalIgnores([".prettierrc.mjs", "eslint.config.ts"]),
);
