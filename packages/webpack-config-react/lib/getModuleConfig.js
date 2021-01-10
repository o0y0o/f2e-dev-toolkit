const miniCssExtractPlugin = require('mini-css-extract-plugin')
const flexBugsFixesPostCssPlugin = require('postcss-flexbugs-fixes')
const envPostCssPlugin = require('postcss-preset-env')

function getJsRule({ isDev, srcDir }) {
  return {
    test: /\.jsx?$/,
    include: srcDir,
    use: [
      require.resolve('cache-loader'),
      {
        loader: require.resolve('babel-loader'),
        options: {
          cacheDirectory: true,
          cacheCompression: !isDev,
          plugins: isDev ? [require.resolve('react-refresh/babel')] : []
        }
      }
    ]
  }
}

function getCssRule({ isDev, useSourceMap }) {
  const cssLoaderOptions = { importLoaders: 1, sourceMap: useSourceMap }
  const postCssPlugins = [
    flexBugsFixesPostCssPlugin,
    envPostCssPlugin({ autoprefixer: { flexbox: 'no-2009' }, stage: 3 })
  ]
  const postCssLoaderOptions = {
    postcssOptions: { plugins: postCssPlugins },
    sourceMap: useSourceMap
  }
  const loaders = [
    isDev ? require.resolve('style-loader') : miniCssExtractPlugin.loader,
    { loader: require.resolve('css-loader'), options: cssLoaderOptions },
    { loader: require.resolve('postcss-loader'), options: postCssLoaderOptions }
  ]
  return { test: /\.css$/, use: loaders }
}

function getImageRule({ assetPath }) {
  return {
    test: [/\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
    loader: require.resolve('url-loader'),
    options: {
      limit: 10000,
      name: `${assetPath}media/[name].[hash:8].[ext]`
    }
  }
}

function getFontRule({ assetPath }) {
  return {
    test: [/\.svg$/, /\.ttf$/, /\.woff$/, /\.woff2$/, /\.eot$/],
    loader: require.resolve('file-loader'),
    options: {
      name: `${assetPath}media/[name].[hash:8].[ext]`
    }
  }
}

module.exports = function ({ isDev, srcDir, assetPath, useSourceMap }) {
  return {
    strictExportPresence: true,
    rules: [
      getJsRule({ isDev, srcDir }),
      getCssRule({ isDev, useSourceMap }),
      getImageRule({ assetPath }),
      getFontRule({ assetPath })
    ]
  }
}
