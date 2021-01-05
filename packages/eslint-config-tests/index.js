module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: { requireConfigFile: false },
  extends: ['standard', 'prettier'],
  plugins: ['import'],
  env: { mocha: true, jasmine: true, jest: true },
  rules: {
    'import/order': 'error',
    'no-console': 'error',
    'no-unused-expressions': 'off',
    'no-unused-vars': ['error', { ignoreRestSiblings: true }],
    'no-var': 'error',
    quotes: ['error', 'single', { avoidEscape: true }]
  }
}
