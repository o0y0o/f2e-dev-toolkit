# @0y0/webpack-config-react · [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/o0y0o/f2e-dev-toolkit/blob/master/LICENSE) [![npm](https://img.shields.io/npm/v/@0y0/webpack-config-react.svg)](https://www.npmjs.com/package/@0y0/webpack-config-react)

`@0y0/webpack-config-react` is a common webpack config for React.

## Installation

```sh
npm install @0y0/webpack-config-react --save-dev
```

## Usage

```js
const createWebpackConfig = require('@0y0/webpack-config-react')
const webpackConfig = createWebpackConfig({
  isDev, // [boolean] whether or not development environment (default: true)
  appName, // [string] application name (required)
  rootDir, // [string] project directory (required)
  srcDir, // [string] source directory (default: {rootDir}/src)
  distDir, // [string] distribution directory (default: {rootDir}/dist)
  staticDir, // [string] static directory (default: {srcDir}/static)
  jsChunks, // [object] js entries (default: { app: {srcDir}/index.js })
  htmlChunks, // [object] html entries (default: { app: {srcDir}/index.html })
  publicPath, // [string] public path (default: /)
  assetPath, // [string] asset path (default: /)
  serviceWorkerPath, // [string] service worker path (default: /sw.js)
  resolveAlias, // [object] module aliases (doc: https://webpack.js.org/plugins/split-chunks-plugin/#splitchunkscachegroups)
  chunkGroups, // [object] cache groups config of split chunk plugin (doc: https://webpack.js.org/plugins/split-chunks-plugin/#splitchunkscachegroups)
  variables, // [object] global variables (default: {})
  workboxOptions, // [object] workbox options (doc: https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-webpack-plugin.GenerateSW#GenerateSW)
  useSourceMap, // [boolean] enable source map (default: false)
  useWebpackAnalyzer, // [boolean] enable webpack-bundle-analyzer plugin (default: false)
  host, // [string] dev server host (default: localhost)
  port, // [number] dev server port (default: 8080)
  proxy // [object] dev server proxy (doc: https://webpack.js.org/configuration/dev-server/#devserverproxy)
})
```

Check out the [example app](./example) to see more details.

## License

[MIT](https://github.com/o0y0o/f2e-dev-toolkit/blob/master/LICENSE)
