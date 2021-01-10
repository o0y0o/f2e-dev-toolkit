module.exports = (_, options) => ({
  presets: [[require.resolve('@0y0/babel-preset-react'), options]],
  plugins: [
    [
      require.resolve('babel-plugin-import'),
      { libraryName: 'antd', style: 'css' },
      'antd'
    ]
  ]
})
