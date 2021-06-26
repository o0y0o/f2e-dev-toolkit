import { lazy, Suspense } from 'react'
import css from './app.module.css'

const CurrencyRateSection = lazy(() =>
  import('@src/components/CurrencyRateSection')
)

export default function App() {
  return (
    <div className={css.app}>
      <h1>webpack-config-react-example</h1>
      <p>A React example app to demo @0y0/webpack-config-react.</p>
      <hr />
      <Suspense fallback={<div>Loading Component...</div>}>
        <CurrencyRateSection />
      </Suspense>
    </div>
  )
}
