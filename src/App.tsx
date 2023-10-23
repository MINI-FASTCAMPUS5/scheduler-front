import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import CalendarLayout from '@/components/layouts/CalendarLayout'
import MainLayout from '@/components/layouts/MainLayout'
import ManagerLayout from '@/components/layouts/ManagerLayout'
import UserLayout from '@/components/layouts/UserLayout'

const SignupPage = lazy(() => import('pages/SignupPage'))
const SignInPage = lazy(() => import('pages/SignInPage'))
const CalendarPage = lazy(() => import('@/pages/Calendar'))
const ApprovalPage = lazy(() => import('@/pages/Manager/Approval'))
const ManagerDashboardPage = lazy(() => import('@/pages/Manager/ManagerDashboard'))
const ManagerEventAddEditPage = lazy(() => import('@/pages/Manager/ManagerEventAddEdit'))
const Edit = lazy(() => import('@/pages/User/Edit'))
const MyPage = lazy(() => import('@/pages/User/MyPage'))

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <Suspense fallback={<div />}>
      <ToastContainer />
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
          <Route path='/manager/edit' element={<Edit />} />
        </Route>
        <Route path='/user' element={<UserLayout />}>
          <Route path='/user/mypage' element={<MyPage />} />
          <Route path='/user/edit' element={<Edit />} />
        </Route>
        <Route />
        <Route path='/' element={<MainLayout />}>
          <Route path='/' element={<SignInPage />} />
          <Route path='/login' element={<SignInPage />} />
          <Route path='/signup' element={<SignupPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
