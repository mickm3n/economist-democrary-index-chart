import React from 'react'
import DemocracyIndexChart from './components/DemocracyIndexChart'

function App() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">全球民主指數趨勢 (2006-2024)</h1>
      <DemocracyIndexChart />
    </div>
  )
}

export default App
