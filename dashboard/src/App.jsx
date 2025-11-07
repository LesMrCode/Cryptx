import React from 'react'
import Sidebar from "./components/layout/Sidebar.jsx";
import Header from "./components/layout/Header.jsx";
import Maincontent from "./components/layout/Maincontent.jsx";

export default function App() {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1'>
        <Header />

        <main className="flex-1 overflow-y-auto bg-white">
          <Maincontent />
        </main>
      </div>
    </div>
  )
}