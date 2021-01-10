import { render } from 'react-dom'
import App from '@components/App'
import './index.css'

const rootElement = document.getElementById('root')
const renderApp = () => render(<App />, rootElement)

renderApp()

if (app.env.ENABLE_SERVICE_WORKER && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
  })
}

/* eslint-disable-next-line no-console */
console.log(`${app.env.NAME} - ${app.env.REVISION}`)
