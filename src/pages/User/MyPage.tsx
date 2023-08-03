import React, { useEffect, useState } from 'react'
import FullProfile from '@/components/FullProfile'
import useUser from '@/hooks/user'
import { FanUser } from '@/models/user'
import { useNavigate } from 'react-router-dom'

export default function MyPage() {
  const navigate = useNavigate()
  const { getUserInfo, loading, loggedIn } = useUser()
  const [fan] = useState(getUserInfo() as FanUser)

  useEffect(() => {
    // todo layout에서 로그인을 검사하기 떄문에 이로직이 필요없긴함!
    // todo 나중에 리펙토링할 떄 필요없으면 제거하자!
    if (!loggedIn) {
      alert('로그인이 필요합니다.')
      navigate('/login/test')
    }
  }, [loading, loggedIn, navigate])

  return (
    <div className='ml-4'>
      <h1>티켓 신청 내역</h1>
      <div className='flex'>
        <FullProfile src={fan.profileImage} name={fan.fullName} email={fan.email} />
        <div className='flex-1'>티켓 신청 내역</div>
      </div>
    </div>
  )
}
