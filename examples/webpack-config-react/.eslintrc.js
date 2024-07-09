const path = require('path')

module.exports = {
  extends: '@0y0/react',
  parserOptions: {
    requireConfigFile: true,
    babelOptions: { configFile: path.join(__dirname, './.babelrc') }
  }
}
