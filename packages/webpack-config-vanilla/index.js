const getDevServerConfig = require('./lib/getDevServerConfig')
const getDevtoolConfig = require('./lib/getDevtoolConfig')
const getModuleConfig = require('./lib/getModuleConfig')
const getOptimizationConfig = require('./lib/getOptimizationConfig')
const getOptions = require('./lib/getOptions')
const getOutputConfig = require('./lib/getOutputConfig')
const getPluginConfig = require('./lib/getPluginConfig')
const getResolveConfig = require('./lib/getResolveConfig')
const getStatsConfig = require('./lib/getStatsConfig')

module.exports = function (parameters) {
  const {
    isDev,
    appName,
    rootDir,
    srcDir,
    distDir,
    staticDir,
    jsChunks,
    htmlChunks,
    publicPath,
    assetPath,
    serviceWorkerPath,
    resolveAlias,
    chunkGroups,
    variables,
    workboxOptions,
    useSourceMap,
    useWebpackAnalyzer,
    host,
    port,
    proxy
  } = getOptions(parameters)
  return {
    mode: isDev ? 'development' : 'production',
    stats: getStatsConfig(),
    bail: !isDev,
    devtool: getDevtoolConfig({ isDev, useSourceMap }),
    entry: jsChunks,
    output: getOutputConfig({ isDev, distDir, publicPath, assetPath }),
    optimization: getOptimizationConfig({ isDev, chunkGroups, useSourceMap }),
    resolve: getResolveConfig({ resolveAlias }),
    module: getModuleConfig({ isDev, srcDir, useSourceMap }),
    plugins: getPluginConfig({
      isDev,
      appName,
      rootDir,
      staticDir,
      htmlChunks,
      publicPath,
      assetPath,
      serviceWorkerPath,
      variables,
      workboxOptions,
      useWebpackAnalyzer
    }),
    devServer: getDevServerConfig({ publicPath, host, port, proxy })
  }
}
