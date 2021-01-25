module.exports = function ({ resolveAlias }) {
  return { alias: resolveAlias, extensions: ['.js', '.jsx', '.json'] }
}
