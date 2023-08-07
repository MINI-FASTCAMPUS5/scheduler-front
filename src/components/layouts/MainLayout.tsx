import { DATE_ROUTE_FORMAT } from '@/constants'
import useUser from '@/hooks/user'
import dayjs from 'dayjs'
import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export default function MainLayout() {
  const navigate = useNavigate()
  const { getUserInfo, loggedIn } = useUser()

  useEffect(() => {
    if (loggedIn) {
      navigate(`/calendar/${dayjs(new Date()).format(DATE_ROUTE_FORMAT)}`)
      return
    }
    navigate('/login/api/test')
  }, [getUserInfo, navigate, loggedIn])
  return (
    <main className='flex min-h-screen'>
      <Outlet />
    </main>
  )
}
