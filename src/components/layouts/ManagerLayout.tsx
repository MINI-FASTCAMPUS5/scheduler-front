import { SideBar } from '@/components/SideBar'
import { useUser } from '@/hooks/user'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export default function ManagerLayout() {
  const navigate = useNavigate()
  const { getUserInfo, loggedIn, loading } = useUser()

  useEffect(() => {
    // 브라우저 히스토리를 교체합니다.
    if (loggedIn && getUserInfo().role !== 'ADMIN') window.location.replace('/404')
  }, [getUserInfo, loggedIn, navigate, loading])

  return (
    <div>
      <div id='portal' />
      <div className='grid grid-cols-cal-frame-w'>
        {loggedIn && !loading && <SideBar />}
        {loggedIn && !loading && <Outlet />}
      </div>
    </div>
  )
}
