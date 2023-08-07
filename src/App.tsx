import React from 'react'
import { Route, Routes } from 'react-router-dom'

import CalendarLayout from '@/components/layouts/CalendarLayout'
import CalendarPage from '@/pages/Calendar'
import Sample from '@/pages/Sample/Sample'
import '@/App.css'
import Optimistic from '@/pages/Sample/Optimistic'
import MainLayout from '@/components/layouts/MainLayout'
import SignUpTestPage from '@/pages/Sample/SignUpTestPage'
import Home from './pages/Home'

import SignupPage from 'pages/SignupPage'
import SignInPage from 'pages/SignInPage'

import ApprovalPage from './pages/Manager/Approval'
import ManagerEventAddEditPage from './pages/Manager/ManagerEventAddEdit'
import ManagerDashboardPage from './pages/Manager/ManagerDashboard'
import ManagerLayout from './components/layouts/ManagerLayout'
import UserLayout from './components/layouts/UserLayout'
import MyPage from './pages/User/MyPage'
import Edit from './pages/User/Edit'
import SignInAPITestPage from './pages/Sample/SignInAPITestPage'
import ScheduleAddTestPage from './pages/Sample/Schedule'

function App() {
  return (
    <>
      <Routes>
        <Route path='/calendar' element={<CalendarLayout />}>
          <Route path='/calendar/:year/:month/:day' element={<CalendarPage />} />
          <Route path='/calendar/schedule' element={<ScheduleAddTestPage />} />
        </Route>
        <Route path='/manager' element={<ManagerLayout />}>
          <Route
            path='/manager/event/calendar/:year/:month/:day'
            element={<ManagerEventAddEditPage />}
          />
          <Route path='/manager/approval' element={<ApprovalPage />} />
          <Route path='/manager/dashboard' element={<ManagerDashboardPage />} />
        </Route>
        <Route path='/user' element={<UserLayout />}>
          <Route path='/user/mypage' element={<MyPage />} />
          <Route path='/user/edit' element={<Edit />} />
        </Route>
        <Route>
          <Route path='/login' element={<SignInPage />} />
        </Route>
        <Route>
          <Route path='/SignupPage' element={<SignupPage />} />
        </Route>
        <Route path='/' element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/login/api/test' element={<SignInAPITestPage />} />
          <Route path='/signup/test' element={<SignUpTestPage />} />
        </Route>
        {/* ! react-query Sample 페이지입니다 ! */}
        <Route path='/sample' element={<Sample />} />
        <Route path='/sample/optimistic' element={<Optimistic />} />
      </Routes>
    </>
  )
}

export default App
