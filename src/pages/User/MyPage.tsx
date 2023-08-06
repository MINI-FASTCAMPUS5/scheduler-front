import React from 'react'
import FullProfile from '@/components/FullProfile'
import useUser from '@/hooks/user'
import { useNavigate } from 'react-router-dom'
import ReserveDetail from '@/components/user/ReserveDetail'

export default function MyPage() {
  const navigate = useNavigate()
  const { getUserInfo } = useUser()
  const fan = getUserInfo()

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
