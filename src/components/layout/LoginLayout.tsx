import React from 'react'
import { Outlet } from 'react-router-dom'

export default function LoginLayout() {
  return (
    <main className='flex min-h-screen'>
      <Outlet />
    </main>
  )
}
