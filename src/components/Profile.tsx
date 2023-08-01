import { AdminUser, FanUser } from '@/models/user'
import React from 'react'

type Props = {
  user: Partial<AdminUser | FanUser>
}
export default function Profile({ user }: Props) {
  return (
    <>
      <div className='flex justify-center items-center p-4 gap-4'>
        <img
          className='w-20 h-20 rounded-[2.5rem] aspect-square object-cover'
          src={`http://localhost:5173/${user.profileImage}`}
        />
        <div className='text-center'>
          <h2 className='text-xl text-white font-bold'> {user.fullName}</h2>
          <button className='bg-white px-3 rounded-xl font-bold text-[0.9rem] leading-6 mt-2'>
            수정
          </button>
        </div>
      </div>
      <div className='flex justify-center pt-4'>
        <button className='bg-[#FF00A5] text-white font-bold w-4/5 py-1 rounded-xl'>
          로그아웃
        </button>
      </div>
    </>
  )
}
