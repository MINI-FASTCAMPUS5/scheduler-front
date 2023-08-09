import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const CalendarLayout = lazy(() => import('@/components/layouts/CalendarLayout'))
const CalendarPage = lazy(() => import('@/pages/Calendar'))
const Sample = lazy(() => import('@/pages/Sample/Sample'))

const Optimistic = lazy(() => import('@/pages/Sample/Optimistic'))
const MainLayout = lazy(() => import('@/components/layouts/MainLayout'))
const SignUpTestPage = lazy(() => import('@/pages/Sample/SignUpTestPage'))
const Home = lazy(() => import('./pages/Home'))

const SignupPage = lazy(() => import('pages/SignupPage'))
const SignInPage = lazy(() => import('pages/SignInPage'))

const ApprovalPage = lazy(() => import('./pages/Manager/Approval'))
const ManagerEventAddEditPage = lazy(() => import('./pages/Manager/ManagerEventAddEdit'))
const ManagerDashboardPage = lazy(() => import('./pages/Manager/ManagerDashboard'))
const ManagerLayout = lazy(() => import('./components/layouts/ManagerLayout'))
const UserLayout = lazy(() => import('./components/layouts/UserLayout'))
const MyPage = lazy(() => import('./pages/User/MyPage'))
const Edit = lazy(() => import('./pages/User/Edit'))
const SignInAPITestPage = lazy(() => import('./pages/Sample/SignInAPITestPage'))
const ScheduleAddTestPage = lazy(() => import('./pages/Sample/Schedule'))

import '@/App.css'
function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
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
