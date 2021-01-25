const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = function (config) {
  config.plugins.push(new ReactRefreshWebpackPlugin())
  for (const rule of config.module.rules) {
    for (const entry of rule.use ?? []) {
      if (!entry.loader?.includes?.('babel-loader')) continue
      entry.options.plugins = [require.resolve('react-refresh/babel')]
    }
  }
}
