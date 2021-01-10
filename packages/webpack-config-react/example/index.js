const path = require('path')
const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')

const app = express()
const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'dist')))
app.use(
  '/api/currency-rates',
  createProxyMiddleware({
    target: 'https://api.ratesapi.io/api/latest',
    pathRewrite: { '^/api/currency-rates': '' },
    changeOrigin: true
  })
)

app.listen(port, () => {
  console.log(`Starting server at http://localhost:${port}\n`) // eslint-disable-line no-console
})
