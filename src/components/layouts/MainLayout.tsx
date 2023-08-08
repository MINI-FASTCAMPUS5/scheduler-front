import { DATE_ROUTE_FORMAT } from '@/constants'
import useUser from '@/hooks/user'
import dayjs from 'dayjs'
import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

export default function MainLayout() {
  const location = useLocation()
  const navigate = useNavigate()
  const { getUserInfo, loggedIn } = useUser()

  useEffect(() => {
    if (loggedIn) {
      navigate(`/calendar/${dayjs(new Date()).format(DATE_ROUTE_FORMAT)}`)
      return
    }
    if (location.pathname === '/login' || location.pathname === '/signup') return
    else navigate('/login')
  }, [getUserInfo, navigate, loggedIn, location.pathname])

  return (
    <main className='relative flex min-h-screen w-full'>
      <div className='absolute flex w-[350px] h-[400px] border-4 p-4 top-24 right-48 rounded-xl z-[999]'>
        <Outlet />
      </div>
    </main>
  )
}
