module.exports = {
  env: {
    browser: true,
    es2023: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended", // "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-essential",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  ignorePatterns: [".output", "dist"],
  plugins: ["@typescript-eslint", "vue"],
  rules: {
    "linebreak-style": ["error", "unix"],
    semi: ["error", "never"],
    "no-undef": "off",
    "unused-default-export": "off",
    "vue/multi-word-component-names": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "vue/no-parsing-error": "off", // &nbsp error
    "@typescript-eslint/ban-ts-comment": "off",
  },
}
