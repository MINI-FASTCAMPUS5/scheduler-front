import { useUser } from '@/hooks/user'
import { Outlet } from 'react-router-dom'

export default function CalendarLayout() {
  const { loggedIn, loading } = useUser()

  return (
    <main className='relative h-full'>
      {loggedIn && !loading && <Outlet />}
      <div id='portal' />
    </main>
  )
}
