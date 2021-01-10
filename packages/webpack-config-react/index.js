const path = require('path')
const getDevServerConfig = require('./lib/getDevServerConfig')
const getDevtoolConfig = require('./lib/getDevtoolConfig')
const getModuleConfig = require('./lib/getModuleConfig')
const getOptimizationConfig = require('./lib/getOptimizationConfig')
const getOutputConfig = require('./lib/getOutputConfig')
const getPluginConfig = require('./lib/getPluginConfig')
const getResolveConfig = require('./lib/getResolveConfig')
const getStatsConfig = require('./lib/getStatsConfig')

module.exports = function ({
  isDev = true,
  appName,
  rootDir,
  srcDir = path.join(rootDir, 'src'),
  distDir = path.join(rootDir, 'dist'),
  staticDir = path.join(srcDir, 'static'),
  jsChunks = { app: path.join(srcDir, 'index.js') },
  htmlChunks = { app: path.join(srcDir, 'index.html') },
  publicPath = '/',
  assetPath = '/',
  serviceWorkerPath = '/sw.js',
  resolveAlias,
  chunkGroups,
  variables = {},
  workboxOptions,
  useSourceMap = false,
  useWebpackAnalyzer = false,
  host = 'localhost',
  port = 8080,
  proxy
}) {
  publicPath = `${publicPath}/`
    .replace(/^(?!\w+:\/\/)/, '/')
    .replace(/\/+/g, '/')
  assetPath = `${assetPath}/`
    .replace(/\/+/g, '/')
    .replace(/^\//, '')
    .replace(/([^/])$/, '$1/')
  return {
    mode: isDev ? 'development' : 'production',
    stats: getStatsConfig(),
    bail: !isDev,
    devtool: getDevtoolConfig({ isDev, useSourceMap }),
    entry: jsChunks,
    output: getOutputConfig({ isDev, distDir, publicPath, assetPath }),
    optimization: getOptimizationConfig({ isDev, chunkGroups, useSourceMap }),
    resolve: getResolveConfig({ resolveAlias }),
    module: getModuleConfig({ isDev, srcDir, assetPath, useSourceMap }),
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
