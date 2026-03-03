import { config } from "@remotion/eslint-config-flat"

// ignore no-unused-vars rule
config.rules["@typescript-eslint/no-unused-vars"] = [
  "error",
  {
    args: "all",
    argsIgnorePattern: "^_",
    caughtErrors: "all",
    caughtErrorsIgnorePattern: "^_",
    destructuredArrayIgnorePattern: "^_",
    varsIgnorePattern: "^_",
    ignoreRestSiblings: true,
  },
]

export default config
