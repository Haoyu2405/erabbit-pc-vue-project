module.exports = {
  root: false,
  env: {
    node: false,
  },
  extends: ["plugin:vue/vue3-essential", "@vue/standard"],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    quotes: "off",
    semi: "off",
    "comma-dangle": "off",
  },
};