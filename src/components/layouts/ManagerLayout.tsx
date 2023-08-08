import React, { useEffect } from 'react'
import useUser from '@/hooks/user'
import { Outlet, useNavigate } from 'react-router-dom'
import SideBar from '@/components/SideBar'

export default function ManagerLayout() {
  const navigate = useNavigate()
  const { getUserInfo, loggedIn } = useUser()

  useEffect(() => {
    if (!loggedIn) {
      alert('로그인 후 이용해주세요')
      navigate('/login')
      return
    }
    const user = getUserInfo()
    if (user.role !== 'ADMIN') {
      alert('관리자만 접근할 수 있는 페이지 입니다!')
      navigate('/login')
      return
    }
  }, [getUserInfo, loggedIn, navigate])

  return (
    <div>
      <div id='portal' />
      <div className='grid grid-cols-cal-frame-w'>
        {loggedIn && <SideBar />}
        {loggedIn && <Outlet />}
      </div>
    </div>
  )
}
