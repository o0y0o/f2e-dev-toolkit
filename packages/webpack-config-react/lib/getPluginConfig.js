const path = require('path')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin').CleanWebpackPlugin
const CopyPlugin = require('copy-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin')
const ModuleNotFoundPlugin = require('react-dev-utils/ModuleNotFoundPlugin')
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin')
const webpack = require('webpack')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const ManifestPlugin = require('webpack-manifest-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')
const getHtmlMinifierConfig = require('./getHtmlMinifierConfig')

function stringify(input) {
  const type = typeof input
  if (type === 'string') return JSON.stringify(input)
  if (type === 'object') return stringifyObject(input)
  return input
}

function stringifyObject(input) {
  return Object.keys(input).reduce((output, key) => {
    output[key] = stringify(input[key])
    return output
  }, {})
}

function getCssExtractPlugin({ assetPath }) {
  return new MiniCssExtractPlugin({
    filename: `${assetPath}css/[name].[contenthash:8].css`,
    chunkFilename: `${assetPath}css/[name].[contenthash:8].chunk.css`
  })
}

function getWorkboxPlugin({ appName, serviceWorkerPath, workboxOptions }) {
  return new WorkboxPlugin.GenerateSW({
    cacheId: appName,
    swDest: serviceWorkerPath.replace(/^\//, ''),
    clientsClaim: true,
    skipWaiting: true,
    navigateFallback: '/index.html',
    navigateFallbackDenylist: [/^\/api/, /\/[^/]+\.[^/]+$/],
    ...workboxOptions
  })
}

module.exports = function ({
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
}) {
  const plugins = [
    new CleanPlugin(),
    new CaseSensitivePathsPlugin(),
    ...Object.entries(htmlChunks).map(
      ([name, html]) =>
        new HtmlPlugin({
          chunks: [name],
          minify: !isDev && getHtmlMinifierConfig(),
          filename: /([^/]+)$/.exec(html)[1],
          template: html
        })
    ),
    new InterpolateHtmlPlugin(HtmlPlugin, { PUBLIC_PATH: publicPath }),
    new ManifestPlugin({ fileName: 'asset-manifest.json', publicPath }),
    new ModuleNotFoundPlugin(rootDir),
    new webpack.DefinePlugin(stringify(variables)),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new CopyPlugin({ patterns: [staticDir] })
  ]
  if (isDev) {
    plugins.push(
      new WatchMissingNodeModulesPlugin(path.join(rootDir, 'node_modules')),
      new webpack.HotModuleReplacementPlugin(),
      new ReactRefreshWebpackPlugin()
    )
  } else {
    plugins.push(
      getCssExtractPlugin({ assetPath }),
      getWorkboxPlugin({ appName, serviceWorkerPath, workboxOptions })
    )
    if (useWebpackAnalyzer) plugins.push(new BundleAnalyzerPlugin())
  }
  return plugins
}
