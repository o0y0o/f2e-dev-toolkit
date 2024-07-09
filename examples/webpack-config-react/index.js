const path = require('path')
const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')

const app = express()
const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'dist')))
app.use(
  '/api/currency-rates',
  createProxyMiddleware({
    target:
      'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.min.json',
    pathRewrite: { '^/api/currency-rates': '' },
    changeOrigin: true,
    on: {
      proxyReq: proxyReq => (proxyReq.path = proxyReq.path.replace(/\/$/, ''))
    }
  })
)

app.listen(port, () => {
  console.log(`Starting server at http://localhost:${port}\n`) // eslint-disable-line no-console
})
