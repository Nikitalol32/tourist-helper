module.exports = {
  plugins: [
    'cypress'
  ],
  env: {
    mocha: true,
    'cypress/globals': true
  },
  rules: {
    strict: 'off',
		'no-tabs': ['error', {'allowIndentationTabs': true}],
    'indent': ['error', 'tab']
  }
}
