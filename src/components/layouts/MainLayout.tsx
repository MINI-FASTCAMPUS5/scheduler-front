import { DATE_ROUTE_FORMAT } from '@/constants'
import useUser from '@/hooks/user'
import dayjs from 'dayjs'
import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Scene from '../ui/animation/Scene'

export default function MainLayout() {
  const location = useLocation()
  const navigate = useNavigate()
  const { getUserInfo, loggedIn, loading } = useUser()

  useEffect(() => {
    console.info('로그인 확인')
    console.info('LOADING : ', loading)
    console.info('LOGGEDIN : ', loggedIn)
    if (loggedIn && !loading) {
      window.location.replace(`/calendar/${dayjs(new Date()).format(DATE_ROUTE_FORMAT)}`)
      // navigate(`/calendar/${dayjs(new Date()).format(DATE_ROUTE_FORMAT)}`)
      return
    } else {
      if (location.pathname === '/login' || location.pathname === '/signup') return
      else navigate('/login')
    }
  }, [getUserInfo, navigate, loggedIn, location.pathname, loading])

  return (
    <main className='relative flex h-[100vh] w-[100vw]'>
      <div className='absolute flex max-h-[400px] border-4 p-4 rounded-xl z-[999] m-auto top-0 right-48 bottom-0'>
        <Outlet />
      </div>
      <Scene />
    </main>
  )
}
