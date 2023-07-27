import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'

export default function CalendarLayout() {
  return (
    <main className='flex'>
      <SideBar />
      <Outlet />
    </main>
  )
}
