import React, { useEffect } from 'react'
import useUser from '@/hooks/user'
import { Outlet, useNavigate } from 'react-router-dom'

export default function CalendarLayout() {
  const navigate = useNavigate()
  const { loggedIn, loading } = useUser()
  useEffect(() => {
    if (!loggedIn && !loading) navigate('/login')
  }, [loggedIn, navigate, loading])

  return (
    <main className='relative h-full'>
      {loggedIn && !loading && <Outlet />}
      <div id='portal' />
    </main>
  )
}
