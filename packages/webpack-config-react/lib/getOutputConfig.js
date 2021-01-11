module.exports = function ({ isDev, distDir, assetPath, publicPath }) {
  if (isDev) {
    return {
      filename: `${assetPath}js/[name].bundle.js`,
      chunkFilename: `${assetPath}js/[name].chunk.js`,
      publicPath
    }
  }
  return {
    path: distDir,
    filename: `${assetPath}js/[name].[chunkhash:8].js`,
    chunkFilename: `${assetPath}js/[name].[chunkhash:8].chunk.js`,
    publicPath
  }
}
