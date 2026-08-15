import { defineConfig, globalIgnores } from "@eslint/config-helpers";

import { frontendConfig } from "@repo/eslint-config/frontend";

export default defineConfig(
  ...frontendConfig,

  globalIgnores([".prettierrc.mjs", "eslint.config.ts"]),
);