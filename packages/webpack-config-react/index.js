const createConfig = require('@0y0/webpack-config-vanilla')
const getOptions = require('@0y0/webpack-config-vanilla/lib/getOptions')
const setReactRefreshConfig = require('./lib/setReactRefreshConfig')

module.exports = function (parameters) {
  const options = getOptions(parameters)
  const config = createConfig(options)
  if (options.isDev) setReactRefreshConfig(config)
  return config
}
