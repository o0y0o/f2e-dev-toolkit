# @0y0/webpack-config-react example

A React example app to demo @0y0/webpack-config-react.

## Project structure

```
example
├── package.json
├── node_modules
├── src
│   ├── components
│   │   ├── *.js
│   │   └── *.module.css
│   ├── fonts
│   │   └── *.ttf
│   ├── images
│   │   └── *.png
│   ├── static
│   │   ├── assets
│   │   │   ├── apple-icon.png
│   │   │   └── favicon.ico
│   │   └── manifest.json
│   ├── index.js
│   ├── index.css
│   ├── index.html
│   └── 404.html
└── dist
    ├── assets
    │   ├── css
    │   │   └── *.css
    │   ├── js
    │   │   └── *.js
    │   ├── media
    │   │   └── *.(ttf|png)
    │   ├── apple-icon.png
    │   └── favicon.ico
    ├── manifest.json
    ├── asset-manifest.json
    ├── sw.js
    ├── index.html
    └── 404.html
```

## Usage

### Install Packages

```sh
yarn install
```

### Run Development Server

```sh
yarn dev
```

### Run Production Build

```sh
yarn build
```

Check out [webpack.config.js](https://github.com/o0y0o/f2e-dev-toolkit/tree/master/packages/webpack-config-react/example/webpack.config.js) to learn how to setup `@0y0/webpack-config-react`.

### Run Production Server

```sh
yarn start
```
