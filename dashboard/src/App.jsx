import React from 'react'
import Sidebar from "./components/layout/Sidebar.jsx";
import Header from "./components/layout/Header.jsx";
import Maincontent from "./components/layout/Maincontent.jsx"; 
import MetricCard from "./components/ui/MetricCard.jsx";
import ChartVisual from "./components/ui/ChartVisual.jsx";
import TransactionTable from "./components/ui/TransactionTable.jsx"; 

export default function App() {
  return(
    <div className='flex'>
      <Sidebar />
      <div className='flex-1'>
      <Header />

      <main> 
      <Maincontent />
      <MetricCard />
      <ChartVisual />
      <TransactionTable />
      </main>
      </div>
    </div>
  )
}