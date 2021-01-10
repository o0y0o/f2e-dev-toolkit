const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const safePostCssParser = require('postcss-safe-parser')
const TerserPlugin = require('terser-webpack-plugin')

function getTerserPlugin({ useSourceMap }) {
  return new TerserPlugin({
    terserOptions: { mangle: { safari10: true }, output: { ascii_only: true } },
    parallel: true,
    cache: true,
    sourceMap: useSourceMap
  })
}

function getOptimizeCssAssetsPlugin({ useSourceMap }) {
  return new OptimizeCssAssetsPlugin({
    cssProcessorOptions: {
      parser: safePostCssParser,
      map: useSourceMap ? { inline: false, annotation: true } : false
    }
  })
}

module.exports = function ({ isDev, chunkGroups, useSourceMap }) {
  if (isDev) {
    return {
      splitChunks: { chunks: 'all' },
      runtimeChunk: true
    }
  }
  return {
    splitChunks: {
      chunks: 'all',
      name: false,
      cacheGroups: chunkGroups
    },
    runtimeChunk: true,
    minimizer: [
      getTerserPlugin({ useSourceMap }),
      getOptimizeCssAssetsPlugin({ useSourceMap })
    ]
  }
}
