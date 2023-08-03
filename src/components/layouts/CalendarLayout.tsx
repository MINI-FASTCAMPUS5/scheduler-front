import React, { useEffect } from 'react'
import useUser from '@/hooks/user'
import { Outlet, useNavigate } from 'react-router-dom'

export default function CalendarLayout() {
  const navigate = useNavigate()
  const { loggedIn } = useUser()

  useEffect(() => {
    if (!loggedIn) navigate('/login/test')
  }, [loggedIn, navigate])

  return (
    <main className='relative h-full'>
      {loggedIn && <Outlet />}
      <div id='portal' />
    </main>
  )
}
