import { AdminUser, FanUser } from '@/models/user'
import React from 'react'
import Button from '../ui/Button'
import { Link } from 'react-router-dom'
import useUser from '@/hooks/user'

type Props = {
  user: Partial<AdminUser | FanUser>
}
export default function Profile({ user }: Props) {
  const { logout } = useUser()
  return (
    <div className='mb-8'>
      <div className='flex justify-center items-center p-4 gap-4'>
        <img className='w-20 h-20 rounded-[2.5rem]' src={user.profileImage} />
        <div className='text-center'>
          <h2 className='text-xl text-white font-bold'> {user.fullName}</h2>
          <Link
            to={`${user.role === 'ADMIN' ? '/manager' : '/user'}/edit`}
            className='inline-block bg-white px-3 rounded-xl font-bold text-[0.9rem] leading-6 mt-4'
          >
            수정
          </Link>
        </div>
      </div>
      <div className='flex justify-center pt-2'>
        <Button
          text='로그아웃'
          type='red'
          size='md'
          className='font-bold w-4/5 rounded-xl'
          onClick={() => logout()}
        />
      </div>
    </div>
  )
}
