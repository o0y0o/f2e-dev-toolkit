const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware')
const evalSourceMapMiddleware = require('react-dev-utils/evalSourceMapMiddleware')
const getStatsConfig = require('./getStatsConfig')

module.exports = function ({ publicPath, host, port, proxy }) {
  return {
    host: host || 'local-ip',
    port: +port || 'auto',
    proxy,
    compress: true,
    hot: true,
    historyApiFallback: true,
    static: false,
    client: {
      logging: 'none',
      overlay: false
    },
    devMiddleware: {
      publicPath,
      stats: getStatsConfig()
    },
    setupMiddlewares: function (middlewares, devServer) {
      middlewares.unshift(
        evalSourceMapMiddleware(devServer),
        errorOverlayMiddleware()
      )
      return middlewares
    }
  }
}
