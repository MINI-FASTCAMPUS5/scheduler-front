import React from 'react'
import { Route, Routes } from 'react-router-dom'

import CalendarLayout from '@/components/layout/CalendarLayout'
import CalendarPage from '@/pages/Calendar'
import Sample from '@/pages/Sample/Sample'
import '@/App.css'
import Optimistic from '@/pages/Sample/Optimistic'
import UserProvider from '@/context/UserProvider'
import MainLayout from '@/components/layout/MainLayout'
import SignInOrUpTestPage from '@/pages/Sample/SignInOrUpTestPage'
import Home from './pages/Home'

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path='/calendar' element={<CalendarLayout />}>
          <Route path='/calendar/:year/:month/:day' element={<CalendarPage />} />
        </Route>

        <Route path='/' element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/login/test' element={<SignInOrUpTestPage />} />
        </Route>

        {/* ! react-query Sample 페이지입니다 ! */}
        <Route path='/sample' element={<Sample />} />
        <Route path='/sample/optimistic' element={<Optimistic />} />
      </Routes>
    </UserProvider>
  )
}

export default App
