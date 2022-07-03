const { resolve } = require("path");
module.exports = {
  // https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
  // This option interrupts the configuration hierarchy at this file
  // Remove this if you have an higher level ESLint config file (it usually happens into a monorepos)
  root: true,

  // https://eslint.vuejs.org/user-guide/#how-to-use-custom-parser
  // Must use parserOptions instead of "parser" to allow vue-eslint-parser to keep working
  // `parser: 'vue-eslint-parser'` is already included with any 'plugin:vue/**' config and should be omitted
  parserOptions: {
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#configuration
    // https://github.com/TypeStrong/fork-ts-checker-webpack-plugin#eslint
    // Needed to make the parser take into account 'vue' files
    extraFileExtensions: [".vue"],
    parser: "@typescript-eslint/parser",
    project: resolve(__dirname, "./tsconfig.json"),
    tsconfigRootDir: __dirname,
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
  },

  env: {
    browser: true,
  },

  // Rules order is important, please avoid shuffling them
  extends: [
    // Base ESLint recommended rules
    // 'eslint:recommended',

    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#usage
    // ESLint typescript rules
    "plugin:@typescript-eslint/recommended",
    // consider disabling this class of rules if linting takes too long
    "plugin:@typescript-eslint/recommended-requiring-type-checking",

    // Uncomment any of the lines below to choose desired strictness,
    // but leave only one uncommented!
    // See https://eslint.vuejs.org/rules/#available-rules
    // "plugin:vue/vue3-essential", // Priority A: Essential (Error Prevention)
    // "plugin:vue/vue3-strongly-recommended", // Priority B: Strongly Recommended (Improving Readability)
    'plugin:vue/vue3-recommended', // Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead)

    // https://github.com/prettier/eslint-config-prettier#installation
    // usage with Prettier, provided by 'eslint-config-prettier'.
    // 'prettier'
  ],

  plugins: [
    // required to apply rules which need type information
    "@typescript-eslint",

    // https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-file
    // required to lint *.vue files
    "vue",

    // https://github.com/typescript-eslint/typescript-eslint/issues/389#issuecomment-509292674
    // Prettier has not been included as plugin to avoid performance impact
    // add it as an extension for your IDE
  ],

  globals: {
    ga: "readonly", // Google Analytics
    cordova: "readonly",
    process: "readonly",
    Capacitor: "readonly",
    chrome: "readonly",
  },

  // add your custom rules here
  rules: {
    "prefer-promise-reject-errors": "off",

    // TypeScript
    quotes: [1, "double"],

    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/restrict-plus-operands": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-use-before-define": ["error", { functions: false }],
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-misused-promises": 0,
    "@typescript-eslint/no-unsafe-argument": 0,
    "@typescript-eslint/restrict-template-expressions": 0,
    "func-style": ["error", "declaration"],
    "vue/multiline-html-element-content-newline": 0,
    "vue/html-closing-bracket-newline": 0,
    "vue/html-indent": 0,
    "vue/attribute-hyphenation": 0,
    "vue/max-attributes-per-line": 0,
    "vue/require-prop-types": 0,
    "vue/first-attribute-linebreak": 0,
    "vue/v-on-event-hyphenation": 0,
    "vue/component-tags-order": 0,
    "vue/multi-word-component-names": 0,

    semi: ["error", "never"],
    // allow debugger during development only
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
  },
};
