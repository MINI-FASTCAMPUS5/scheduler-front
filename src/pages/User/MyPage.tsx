import React, { useEffect } from 'react'
import FullProfile from '@/components/FullProfile'
import useUser from '@/hooks/user'
import { useNavigate } from 'react-router-dom'
import ReserveDetail from '@/components/user/ReserveDetail'

export default function MyPage() {
  const navigate = useNavigate()
  const { getUserInfo, loggedIn } = useUser()
  const fan = getUserInfo()

  // todo layout에서 로그인되었는지 검사하기 떄문에 이 로직이 필요없긴함!
  // todo 나중에 리펙토링할 떄 필요없으면 제거하자!
  useEffect(() => {
    if (!loggedIn) {
      alert('로그인이 필요합니다.')
      navigate('/login/test')
    }
  }, [loggedIn, navigate])

  if (fan.role !== 'USER') {
    alert('관리자는 접근할 수 없는 페이지입니다.')
    navigate('/login/test')
    return
  }

  return (
    <div className='flex flex-col ml-4 p-4 h-screen'>
      <h1 className='text-3xl font-bold border-b-2 pb-2'>티켓 신청 내역</h1>
      <div className='flex h-full pt-8'>
        <FullProfile src={fan.profileImage} name={fan.fullName} email={fan.email} />
        <div className='w-3/5 ml-8'>
          <ReserveDetail user={fan} />
        </div>
      </div>
    </div>
  )
}
