module.exports = function ({ isDev, distDir, assetPath, publicPath }) {
  if (isDev) {
    return {
      path: distDir,
      filename: `${assetPath}js/[name].bundle.js`,
      chunkFilename: `${assetPath}js/[name].chunk.js`,
      assetModuleFilename: `${assetPath}media/[file]`,
      publicPath
    }
  }
  return {
    path: distDir,
    filename: `${assetPath}js/[name].[chunkhash].js`,
    chunkFilename: `${assetPath}js/[name].[chunkhash].chunk.js`,
    assetModuleFilename: `${assetPath}media/[name].[hash][ext]`,
    publicPath
  }
}
