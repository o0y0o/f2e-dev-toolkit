const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

function getJsMinimizer() {
  return new TerserPlugin({
    extractComments: false,
    terserOptions: { format: { ascii_only: true }, safari10: true }
  })
}

function getCssMinimizer() {
  return new CssMinimizerPlugin()
}

module.exports = function ({ isDev, chunkGroups, runtimeChunk }) {
  if (isDev) return { splitChunks: { chunks: 'all' }, runtimeChunk }
  return {
    splitChunks: { chunks: 'all', cacheGroups: chunkGroups },
    runtimeChunk,
    minimizer: [getJsMinimizer(), getCssMinimizer()]
  }
}
