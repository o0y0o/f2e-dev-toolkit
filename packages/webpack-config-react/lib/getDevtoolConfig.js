module.exports = function ({ isDev, useSourceMap }) {
  return isDev
    ? 'cheap-module-eval-source-map'
    : useSourceMap
    ? 'source-map'
    : false
}
