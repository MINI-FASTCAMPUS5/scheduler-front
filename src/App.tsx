import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import CalendarLayout from '@/components/layouts/CalendarLayout'
import CalendarPage from '@/pages/Calendar'
const Sample = lazy(() => import('@/pages/Sample/Sample'))
import Optimistic from '@/pages/Sample/Optimistic'

const MainLayout = lazy(() => import('@/components/layouts/MainLayout'))
const Home = lazy(() => import('./pages/Home'))
const SignupPage = lazy(() => import('pages/SignupPage'))
const SignInPage = lazy(() => import('pages/SignInPage'))
const SignUpTestPage = lazy(() => import('@/pages/Sample/SignUpTestPage'))

import ApprovalPage from './pages/Manager/Approval'
import ManagerEventAddEditPage from './pages/Manager/ManagerEventAddEdit'
import ManagerDashboardPage from './pages/Manager/ManagerDashboard'
import ManagerLayout from './components/layouts/ManagerLayout'
import UserLayout from './components/layouts/UserLayout'
import MyPage from './pages/User/MyPage'
import Edit from './pages/User/Edit'

const SignInAPITestPage = lazy(() => import('./pages/Sample/SignInAPITestPage'))
const ScheduleAddTestPage = lazy(() => import('./pages/Sample/Schedule'))

import '@/App.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <>
      <Suspense fallback={<div />}>
        <ToastContainer />
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
            <Route path='/manager/edit' element={<Edit />} />
          </Route>
          <Route path='/user' element={<UserLayout />}>
            <Route path='/user/mypage' element={<MyPage />} />
            <Route path='/user/edit' element={<Edit />} />
          </Route>
          <Route />
          <Route path='/' element={<MainLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<SignInPage />} />
            <Route path='/signup' element={<SignupPage />} />
          </Route>
          {/* ! react-query Sample 페이지입니다 ! */}
          <Route path='/sample' element={<Sample />} />
          <Route path='/login/api/test' element={<SignInAPITestPage />} />
          <Route path='/signup/test' element={<SignUpTestPage />} />
          <Route path='/sample/optimistic' element={<Optimistic />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
