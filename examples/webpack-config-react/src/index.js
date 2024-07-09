import './index.css'
import App from '@src/components/App'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(<App />)

if (app.env.ENABLE_SERVICE_WORKER && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
  })
}

/* eslint-disable-next-line no-console */
console.log(`${app.env.NAME} - ${app.env.REVISION}`)
