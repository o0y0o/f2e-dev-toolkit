import { lazy, Suspense } from 'react'

const CurrencyRateSection = lazy(() =>
  import('@src/components/CurrencyRateSection')
)

export default function App() {
  return (
    <div>
      <h1>webpack-config-react-example</h1>
      <p>A React example app to demo @0y0/webpack-config-react.</p>
      <hr />
      <Suspense fallback={<div>Loading Component...</div>}>
        <CurrencyRateSection />
      </Suspense>
    </div>
  )
}
