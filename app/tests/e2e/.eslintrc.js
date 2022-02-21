module.exports = {
  plugins: [
    "cypress",
  ],
  env: {
    mocha: true,
    "cypress/globals": true,
  },
  rules: {
    strict: "off",
    "no-tabs": ["error", {"allowIndentationTabs": true}],
    "indent": ["error" , "tab"],
    semi: [2, "never"],
    "global-require": "off",
		"one-var": "off",
    "no-plusplus": "off",
  },
};
