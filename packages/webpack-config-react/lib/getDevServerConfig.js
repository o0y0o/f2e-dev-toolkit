const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware')
const evalSourceMapMiddleware = require('react-dev-utils/evalSourceMapMiddleware')
const getStatsConfig = require('./getStatsConfig')

module.exports = function ({ publicPath, host, port, proxy }) {
  return {
    stats: getStatsConfig(),
    contentBase: false,
    host: host || '0.0.0.0',
    port: parseInt(port, 10) || 3000,
    proxy,
    publicPath,
    historyApiFallback: true,
    hot: true,
    compress: true,
    clientLogLevel: 'none',
    overlay: false,
    before: function (app, server) {
      app.use(evalSourceMapMiddleware(server))
      app.use(errorOverlayMiddleware())
    }
  }
}
