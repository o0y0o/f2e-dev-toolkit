const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin').CleanWebpackPlugin
const CopyPlugin = require('copy-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin')
const ModuleNotFoundPlugin = require('react-dev-utils/ModuleNotFoundPlugin')
const webpack = require('webpack')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
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
    filename: `${assetPath}css/[name].[contenthash].css`,
    chunkFilename: `${assetPath}css/[name].[contenthash].chunk.css`
  })
}

function getWorkboxPlugin({ appName, serviceWorkerPath, workboxOptions }) {
  return new WorkboxPlugin.GenerateSW({
    cacheId: appName,
    swDest: serviceWorkerPath.replace(/^\//, ''),
    clientsClaim: true,
    skipWaiting: true,
    maximumFileSizeToCacheInBytes: 3 * 1024 * 1024,
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
  manifestOptions,
  workboxOptions,
  useWorkbox,
  useWebpackAnalyzer
}) {
  const plugins = [
    new CleanPlugin(),
    new CaseSensitivePathsPlugin(),
    ...Object.entries(htmlChunks).map(([name, options]) => {
      let html
      if (typeof options === 'string') html = options
      else ({ html, ...options } = options)
      return new HtmlPlugin({
        chunks: [name],
        minify: !isDev && getHtmlMinifierConfig(),
        filename: /([^/]+)$/.exec(html)[1],
        template: html,
        ...options
      })
    }),
    new InterpolateHtmlPlugin(HtmlPlugin, { PUBLIC_PATH: publicPath }),
    new ModuleNotFoundPlugin(rootDir),
    new webpack.DefinePlugin(stringify(variables)),
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/
    })
  ]

  if (manifestOptions !== false) {
    plugins.push(
      new WebpackManifestPlugin({
        fileName: 'asset-manifest.json',
        ...manifestOptions
      })
    )
  }

  if (staticDir !== false) {
    plugins.push(new CopyPlugin({ patterns: [staticDir].flat() }))
  }

  if (!isDev) {
    plugins.push(getCssExtractPlugin({ assetPath }))

    if (useWorkbox) {
      plugins.push(
        getWorkboxPlugin({
          appName,
          serviceWorkerPath,
          workboxOptions
        })
      )
    }

    if (useWebpackAnalyzer) {
      plugins.push(new BundleAnalyzerPlugin())
    }
  }
  return plugins
}
