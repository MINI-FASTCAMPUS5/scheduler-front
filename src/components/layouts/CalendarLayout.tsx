import useUser from '@/hooks/user'
import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export default function CalendarLayout() {
  const navigate = useNavigate()
  const { loggedIn } = useUser()

  useEffect(() => {
    if (!loggedIn) navigate('/login/test')
  }, [loggedIn, navigate])

  return <main className=''>{loggedIn && <Outlet />}</main>
}
