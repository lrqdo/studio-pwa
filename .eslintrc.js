module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: "eslint:recommended",
  rules: {
    "no-console": "off",
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"]
  }
};
