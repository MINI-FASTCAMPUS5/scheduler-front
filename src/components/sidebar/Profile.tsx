import { AdminUser, FanUser } from '@/models/user'
import React from 'react'
import { Link } from 'react-router-dom'
import useUser from '@/hooks/user'

type Props = {
  user: Partial<AdminUser | FanUser>
}
export default function Profile({ user }: Props) {
  const { logout } = useUser()
  return (
    <div className='mb-8'>
      <div className='flex justify-center items-center p-4 gap-4 mt-3 mb-3'>
        <img className='w-[70px] h-[70px] rounded-[2.5rem] border-[2px] transition hover:scale-[1.05]' src={user.profileImage} />
        <div className='text-center'>
          <h2 className='text-xl text-white font-bold font-gmarket'> {user.fullName}</h2>
          <Link
            to={`${user.role === 'ADMIN' ? '/manager' : '/user'}/edit`}
            className='inline-block bg-white text-main font-gmarket pt-[1px] px-4 rounded-xl font-bold text-[0.8rem] leading-6 mt-2 transition hover:bg-point hover:text-white hover:scale-105'
          >
            수정
          </Link>
        </div>
      </div>
      <div className='flex justify-center pt-2'>
        <div
          className='font-bold bg-point text-white flex justify-center items-center w-4/5 rounded-xl font-gmarket h-[40px] transition hover:bg-wait cursor-pointer'
          onClick={() => logout()}
        >로그아웃</div>
      </div>
    </div>
  )
}
