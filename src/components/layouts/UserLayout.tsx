import useUser from '@/hooks/user'
import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import SideBar from '@/components/SideBar'

export default function ManagerLayout() {
  const navigate = useNavigate()
  const { getUserInfo, loggedIn } = useUser()

  useEffect(() => {
    if (!loggedIn) {
      alert('로그인 후 이용해주세요')
      navigate('/login/test')
      return
    }
    const user = getUserInfo()
    if (user.role !== 'USER') {
      alert('사용자만 접근할 수 있는 페이지 입니다!')
      navigate('/login/test')
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
