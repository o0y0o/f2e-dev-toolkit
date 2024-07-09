const miniCssExtractPlugin = require('mini-css-extract-plugin')
const postCssEnvPlugin = require('postcss-preset-env')
const postCssFlexBugsFixesPlugin = require('postcss-flexbugs-fixes')
const postCssSafeParser = require('postcss-safe-parser')

function getJsRule({ isDev, srcDir }) {
  return {
    test: /\.jsx?$/,
    include: srcDir,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: { cacheDirectory: true, cacheCompression: !isDev }
      }
    ]
  }
}

function getCssRule({ isDev, useSourceMap }) {
  const cssLoaderOptions = { importLoaders: 1, sourceMap: useSourceMap }
  const postCssPlugins = [
    postCssFlexBugsFixesPlugin,
    postCssEnvPlugin({ autoprefixer: { flexbox: 'no-2009' }, stage: 3 })
  ]
  const postCssLoaderOptions = {
    postcssOptions: { parser: postCssSafeParser, plugins: postCssPlugins },
    sourceMap: useSourceMap
  }
  const loaders = [
    isDev ? require.resolve('style-loader') : miniCssExtractPlugin.loader,
    { loader: require.resolve('css-loader'), options: cssLoaderOptions },
    { loader: require.resolve('postcss-loader'), options: postCssLoaderOptions }
  ]
  return { test: /\.css$/, use: loaders }
}

function getImageRule() {
  return { test: [/\.(gif|jpe?g|png|svg|webp)$/], type: 'asset' }
}

function getFontRule() {
  return { test: [/\.(ttf|woff2?|eot)$/], type: 'asset/resource' }
}

module.exports = function ({ isDev, srcDir, useSourceMap }) {
  return {
    strictExportPresence: true,
    rules: [
      getJsRule({ isDev, srcDir }),
      getCssRule({ isDev, useSourceMap }),
      getImageRule(),
      getFontRule()
    ]
  }
}
