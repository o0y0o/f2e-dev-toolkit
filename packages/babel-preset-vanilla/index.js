const defaultModuleAlias = { '@app': './src' }

module.exports = (_, { moduleAlias = defaultModuleAlias }) => ({
  presets: [require.resolve('@babel/preset-env')],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      { alias: moduleAlias, transformFunctions: ['module.hot.accept'] }
    ],
    [require.resolve('@babel/plugin-proposal-decorators'), { legacy: true }],
    require.resolve('@babel/plugin-proposal-class-properties'),
    require.resolve('@babel/plugin-proposal-do-expressions'),
    require.resolve('@babel/plugin-proposal-export-default-from'),
    require.resolve('@babel/plugin-proposal-export-namespace-from'),
    require.resolve('@babel/plugin-proposal-function-bind'),
    require.resolve('@babel/plugin-proposal-logical-assignment-operators'),
    require.resolve('@babel/plugin-proposal-nullish-coalescing-operator'),
    require.resolve('@babel/plugin-proposal-optional-chaining'),
    require.resolve('@babel/plugin-proposal-partial-application'),
    [
      require.resolve('@babel/plugin-proposal-pipeline-operator'),
      { proposal: 'minimal' }
    ],
    require.resolve('@babel/plugin-proposal-private-methods'),
    require.resolve('@babel/plugin-proposal-throw-expressions'),
    require.resolve('@babel/plugin-syntax-dynamic-import'),
    require.resolve('@babel/plugin-transform-runtime'),
    [
      require.resolve('babel-plugin-transform-imports'),
      {
        'lodash/fp': {
          transform: 'lodash/fp/${member}',
          preventFullImport: true
        },
        lodash: {
          transform: 'lodash/${member}',
          preventFullImport: true
        },
        ramda: {
          transform: 'ramda/src/${member}',
          preventFullImport: true
        }
      }
    ]
  ],
  env: {
    test: {
      presets: [
        [require.resolve('@babel/preset-env'), { targets: { node: 'current' } }]
      ]
    }
  }
})
