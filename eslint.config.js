import js from "@eslint/js"
import vitestPlugin from "@vitest/eslint-plugin"
import prettierConfig from "eslint-config-prettier/flat"
import reactPlugin from "eslint-plugin-react"
import reactHooksPlugin from "eslint-plugin-react-hooks"
import globals from "globals"

const eslintConfig = [
  {
    name: "global-ignores",
    ignores: [
      "**/*.snap",
      "**/dist/",
      "**/.yalc/",
      "**/build/",
      "**/temp/",
      "**/.temp/",
      "**/.tmp/",
      "**/.yarn/",
      "**/coverage/",
      "tailwind.config.js", // 👈 Добавим чтобы не ругался
    ],
  },
  {
    name: "base-js",
    ...js.configs.recommended,
  },
  vitestPlugin.configs.recommended,
  {
    name: "react",
    ...reactPlugin.configs.recommended,
  },
  reactHooksPlugin.configs["recommended-latest"],
  {
    name: "main",
    linterOptions: {
      reportUnusedDisableDirectives: 2,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        // можно убрать projectService
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // ❌ Отключаем то, что мешает
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/consistent-type-imports": "off",
      "@typescript-eslint/consistent-type-definitions": "off",
      "no-restricted-imports": "off",
    },
  },
  prettierConfig,
]

export default eslintConfig
