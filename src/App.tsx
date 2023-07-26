import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from '@/components/Layout'
import Home from '@/pages/Home'
import Sample from '@/pages/Sample'
import '@/App.css'
import Optimistic from './pages/Optimistic'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/sample' element={<Sample />} />
        <Route path='/sample/optimistic' element={<Optimistic />} />
      </Route>
    </Routes>
  )
}

export default App
