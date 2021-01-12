module.exports = function ({ isDev, useSourceMap }) {
  return isDev
    ? 'eval-cheap-module-source-map'
    : useSourceMap
    ? 'source-map'
    : false
}
