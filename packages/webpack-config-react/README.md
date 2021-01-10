# @0y0/webpack-config-react · [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/o0y0o/f2e-dev-toolkit/blob/master/LICENSE) [![npm](https://img.shields.io/npm/v/@0y0/webpack-config-react.svg)](https://www.npmjs.com/package/@0y0/webpack-config-react)

`@0y0/webpack-config-react` is a common webpack config for React.

## Installation

```sh
npm install @0y0/webpack-config-react --save-dev
```

## Usage

```js
const createWebpackConfig = require('@0y0/webpack-config-react')
const webpackConfig = createWebpackConfig(options)
```

### Options

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| **`isDev`** | `boolean` | `true` | Whether or not development environment |
| **`appName`** | `string` (required) | | Application name |
| **`rootDir`** | `string` (required) | | Project directory |
| **`srcDir`** | `string` | `{rootDir}/src` | Source directory |
| **`distDir`** | `string` | `{rootDir}/dist` | Distribution directory |
| **`staticDir`** | `string` | `{rootDir}/src/static` | Static directory |
| **`jsChunks`** | `object` | `{ app: '{rootDir}/src/index.js' }` | JS entries |
| **`htmlChunks`** | `object` | `{ app: '{rootDir}/src/index.html' }` | HTML entries |
| **`publicPath`** | `string` | `/` | Public path |
| **`assetPath`** | `string` | `/` | Asset path |
| **`serviceWorkerPath`** | `string` | `/sw.js` | Service worker path |
| **`resolveAlias`** | `object` | | Module aliases. See [webpack doc](https://webpack.js.org/configuration/resolve/#resolvealias) for details |
| **`chunkGroups`** | `object` | | Cache groups config of split chunk plugin. See [webpack doc](https://webpack.js.org/plugins/split-chunks-plugin/#splitchunkscachegroups) for details |
| **`variables`** | `object` | `{}` | Global variables |
| **`workboxOptions`** | `object` | | Workbox options. See [workbox doc](https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-webpack-plugin.GenerateSW#GenerateSW) for details |
| **`useSourceMap`** | `boolean` | `false` | Whether or not enable source map |
| **`useWebpackAnalyzer`** | `boolean` | `false` | Whether or not enable webpack-bundle-analyzer plugin |
| **`host`** | `string` | `localhost` | Dev server host |
| **`port`** | `number` | `8080` | Dev server port |
| **`proxy`** | `object` | | Dev server proxy. See [webpack doc](https://webpack.js.org/configuration/dev-server/#devserverproxy) for details |

Check out the [example app](./example) to see more details.

## License

[MIT](https://github.com/o0y0o/f2e-dev-toolkit/blob/master/LICENSE)
