import useUser from '@/hooks/user'
import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import SideBar from '@/components/SideBar'
import { toast } from 'react-toastify'

export default function ManagerLayout() {
  const navigate = useNavigate()
  const { getUserInfo, loggedIn, loading } = useUser()

  useEffect(() => {
    if (loading) return
    if (!loggedIn && !loading) {
      toast.warn('로그인 후 이용해주세요')
      navigate('/login')
      return
    }
    if (loggedIn && getUserInfo().role !== 'USER') {
      toast.warn('사용자만 접근할 수 있는 페이지 입니다!')
      navigate('/login')
      return
    }
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
