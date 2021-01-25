const path = require('path')

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
  }
}
