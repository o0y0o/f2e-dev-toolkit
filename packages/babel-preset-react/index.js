const defaultModuleAlias = { '@app': './src' }

module.exports = (_, { moduleAlias = defaultModuleAlias }) => ({
  presets: [
    [require.resolve('@babel/preset-env')],
    [require.resolve('@babel/preset-react'), { runtime: 'automatic' }]
  ],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      { alias: moduleAlias, transformFunctions: ['module.hot.accept'] }
    ],
    [require.resolve('@babel/plugin-proposal-decorators'), { legacy: true }],
    require.resolve('@babel/plugin-proposal-class-properties'),
    require.resolve('@babel/plugin-proposal-do-expressions'),
    require.resolve('@babel/plugin-proposal-export-default-from'),
    require.resolve('@babel/plugin-proposal-function-bind'),
    require.resolve('@babel/plugin-proposal-partial-application'),
    [
      require.resolve('@babel/plugin-proposal-pipeline-operator'),
      { proposal: 'minimal' }
    ],
    require.resolve('@babel/plugin-proposal-private-methods'),
    require.resolve('@babel/plugin-proposal-throw-expressions'),
    require.resolve('@babel/plugin-syntax-dynamic-import'),
    require.resolve('@babel/plugin-transform-runtime'),
    require.resolve('babel-plugin-styled-components'),
    [
      require.resolve('babel-plugin-transform-imports'),
      {
        'lodash/fp': {
          transform: 'lodash/fp/${member}', // eslint-disable-line no-template-curly-in-string
          preventFullImport: true
        },
        lodash: {
          transform: 'lodash/${member}', // eslint-disable-line no-template-curly-in-string
          preventFullImport: true
        },
        ramda: {
          transform: 'ramda/src/${member}', // eslint-disable-line no-template-curly-in-string
          preventFullImport: true
        },
        'redux-actions': {
          transform: 'redux-actions/lib/${member}', // eslint-disable-line no-template-curly-in-string
          preventFullImport: true
        },
        'react-icons': {
          transform: 'react-icons/${member}', // eslint-disable-line no-template-curly-in-string
          preventFullImport: true
        }
      }
    ]
  ],
  env: {
    production: {
      plugins: [
        [
          require.resolve('babel-plugin-transform-react-remove-prop-types'),
          { removeImport: true }
        ]
      ]
    },
    test: {
      presets: [
        [require.resolve('@babel/preset-env'), { targets: { node: 'current' } }]
      ]
    }
  }
})
