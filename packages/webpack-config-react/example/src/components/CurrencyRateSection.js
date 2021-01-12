import { useEffect, useState } from 'react'
import css from './currencyRateSection.module.css'

function fetchCurrencyRates() {
  return fetch('/api/currency-rates').then(res => res.json())
}

function CurrencyRateDetail() {
  const [data, setData] = useState()

  useEffect(() => {
    fetchCurrencyRates().then(setData)
  }, [])

  if (!data) return <div>Loading Data...</div>
  return (
    <div>
      <div>
        <strong>Base: </strong>
        <span>{data.base}</span>
      </div>
      <ul>
        {Object.entries(data.rates).map(([currency, rate]) => (
          <li key={currency}>
            <strong>{currency}: </strong>
            <span>{rate}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function CurrencyRateSection() {
  return (
    <section>
      <div className={css.sectionTitle}>
        <i className={css.sectionIcon} />
        <h2>Currency Rates</h2>
      </div>
      <CurrencyRateDetail />
    </section>
  )
}
