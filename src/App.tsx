import React from 'react'
import { Route, Routes } from 'react-router-dom'

import CalendarLayout from '@/components/layouts/CalendarLayout'
import CalendarPage from '@/pages/Calendar'
import Sample from '@/pages/Sample/Sample'
import '@/App.css'
import Optimistic from '@/pages/Sample/Optimistic'
import MainLayout from '@/components/layouts/MainLayout'
import SignInOrUpTestPage from '@/pages/Sample/SignInOrUpTestPage'
import Home from './pages/Home'

import SignupPage from 'pages/SignupPage'
import SignInPage from 'pages/SignInPage'

import ApprovalPage from './pages/Manager/Approval'
import ManagerEventAddEditPage from './pages/Manager/ManagerEventAddEdit'
import ManagerDashboardPage from './pages/Manager/ManagerDashboard'
import ManagerLayout from './components/layouts/ManagerLayout'

function App() {
  return (
    <Routes>
      <Route path='/calendar' element={<CalendarLayout />}>
        <Route path='/calendar/:year/:month/:day' element={<CalendarPage />} />
      </Route>

      <Route path='/manager' element={<ManagerLayout />}>
        <Route
          path='/manager/event/calendar/:year/:month/:day'
          element={<ManagerEventAddEditPage />}
        />
        <Route path='/manager/approval' element={<ApprovalPage />} />
        <Route path='/manager/dashboard' element={<ManagerDashboardPage />} />
      </Route>

      <Route path='/' element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/login/test' element={<SignInOrUpTestPage />} />
      </Route>
      <Route>
        <Route path='/login' element={<SignInPage />} />
      </Route>
      <Route>
        <Route path='/SignupPage' element={<SignupPage />} />
      </Route>

      {/* ! react-query Sample 페이지입니다 ! */}
      <Route path='/sample' element={<Sample />} />
      <Route path='/sample/optimistic' element={<Optimistic />} />
    </Routes>
  )
}

export default App
