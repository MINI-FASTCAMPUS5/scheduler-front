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
    <div className='h-[100vh] w-[100vw]'>
      <div className=' absolute flex text-[50px] z-40 top-5 left-8'>
        <img src='/YeonganIdolLogoWhite.svg' className='w-[600px]' />
      </div>
      <div className=' absolute flex text-[16px] z-40 bottom-9 left-8 text-white opacity-50'>
        © 2023. 12 GROUP All rights reserved.
      </div>
      <div className=' absolute flex text-[10px] z-40 bottom-5 left-8 text-white opacity-50'>
        Illustrated by Chulmin Park & Source Zustand
      </div>
      <main className='absolute flex h-[100vh] w-[100vw] p-auto'>
        <div className=' flex w-[480px] bg-white p-10 rounded-[20px] z-[999] m-auto mr-[300px] shadow-xl'>
          <Outlet />
        </div>
      </main>
      <Scene />
    </div>
  )
}
