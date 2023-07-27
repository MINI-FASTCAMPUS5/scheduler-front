import React from 'react'
import { Route, Routes } from 'react-router-dom'

import CalendarLayout from '@/components/CalendarLayout'
import CalendarPage from '@/pages/Calendar'
import Sample from '@/pages/Sample'
import '@/App.css'
import Optimistic from './pages/Optimistic'

function App() {
  return (
    <Routes>
      <Route path='/login' element={<div>로그인 페이지 레이아웃</div>} />
      <Route path='/' element={<CalendarLayout />}>
        <Route path='/' element={<CalendarPage />} />
        <Route path='/sample' element={<Sample />} />
        <Route path='/sample/optimistic' element={<Optimistic />} />
      </Route>
    </Routes>
  )
}

export default App
