import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import CalendarLayout from '@/components/layouts/CalendarLayout'
import CalendarPage from '@/pages/Calendar'

const MainLayout = lazy(() => import('@/components/layouts/MainLayout'))
const SignupPage = lazy(() => import('pages/SignupPage'))
const SignInPage = lazy(() => import('pages/SignInPage'))

import ManagerLayout from './components/layouts/ManagerLayout'
import UserLayout from './components/layouts/UserLayout'
import ApprovalPage from './pages/Manager/Approval'
import ManagerDashboardPage from './pages/Manager/ManagerDashboard'
import ManagerEventAddEditPage from './pages/Manager/ManagerEventAddEdit'
import Edit from './pages/User/Edit'
import MyPage from './pages/User/MyPage'

const ScheduleAddTestPage = lazy(() => import('../legacy/Sample/Schedule'))

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
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
          <Route path='/login' element={<SignInPage />} />
          <Route path='/signup' element={<SignupPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
