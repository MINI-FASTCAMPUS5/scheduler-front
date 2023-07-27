import React from 'react'
import { Outlet } from 'react-router-dom'

export default function CalendarLayout() {
  return (
    <main className=''>
      <Outlet />
    </main>
  )
}
