import comments from "@eslint-community/eslint-plugin-eslint-comments/configs";
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  comments.recommended,
  {
    rules: {
      // Enforced by CI: no unused code, no `any`, no stray debugging.
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "error",
      "no-console": ["error", { allow: ["warn", "error"] }],
      eqeqeq: ["error", "always"],
      // Every eslint-disable needs a reason: `// eslint-disable-next-line rule -- why`.
      "@eslint-community/eslint-comments/require-description": "error",
      "@eslint-community/eslint-comments/no-unused-disable": "error",
      // Environment variables are read once, validated, in src/env.ts.
      "no-restricted-syntax": [
        "error",
        {
          selector: "MemberExpression[object.name='process'][property.name='env']",
          message: "Read environment variables via `env` from `@/env`, not `process.env`.",
        },
      ],
    },
  },
  {
    files: ["src/env.ts", "next.config.ts", "vitest.config.mts"],
    rules: { "no-restricted-syntax": "off" },
  },
  // Must be last: turns off stylistic rules that conflict with Prettier.
  prettier,
  globalIgnores([".next/**", "out/**", "build/**", "coverage/**", "next-env.d.ts"]),
]);

export default eslintConfig;
