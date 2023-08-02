import { AdminUser, FanUser } from '@/models/user'
import React from 'react'
import Button from './ui/Button'

type Props = {
  user: Partial<AdminUser | FanUser>
}
export default function Profile({ user }: Props) {
  return (
    <>
      <div className='flex justify-center items-center p-4 gap-4'>
        <img
          className='w-20 h-20 rounded-[2.5rem]'
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
        <Button
          text='로그아웃'
          type='red'
          size='md'
          className='font-bold w-4/5 rounded-xl'
          onClick={() => {
            alert('임시로 페이지를 새로 고쳐 로그아웃합니다.')
            window.location.href = '/login/test'
          }}
        />
      </div>
    </>
  )
}
