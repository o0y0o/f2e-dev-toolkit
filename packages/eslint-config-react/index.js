module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: { requireConfigFile: false },
  extends: ['standard', 'plugin:react/recommended', 'prettier'],
  plugins: ['import', 'react', 'react-hooks', '@0y0/react'],
  settings: { react: { version: 'detect' } },
  globals: { app: true },
  env: { browser: true, commonjs: true, es6: true },
  rules: {
    'import/order': 'error',
    'no-console': 'error',
    'no-unused-vars': ['error', { ignoreRestSiblings: true }],
    'no-var': 'error',
    quotes: ['error', 'single', { avoidEscape: true }],
    'react/jsx-uses-react': 'off',
    'react/no-typos': 'error',
    'react/no-unused-prop-types': 'error',
    'react/no-unused-state': 'error',
    'react/prop-types': [
      'error',
      {
        ignore: [
          'children',
          'classes',
          'className',
          'history',
          'location',
          'match',
          'style'
        ]
      }
    ],
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    '@0y0/react/no-undefined-effect-deps': 'error'
  },
  overrides: [
    {
      files: ['**/*.{test,spec}.js', '**/*.{test,spec}.native.js'],
      env: { mocha: true, jasmine: true, jest: true },
      rules: { 'no-unused-expressions': 'off' }
    }
  ]
}
