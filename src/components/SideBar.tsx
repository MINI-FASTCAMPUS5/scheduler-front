import useUser from '@/hooks/user'
import React from 'react'
import AdminActionBar from './AdminActionBar'
import UserActionBar from './UserActionBar'

export default function SideBar() {
  const { getUserInfo } = useUser()
  const user = getUserInfo()

  return (
    <div className='relative h-fulltransition-all ease-out duration-75 z-[100]'>
      <aside className='fixed h-[98%] min-w-[300px] max-w-[300px]  top-0 left-0 m-2 pt-4 rounded-[20px] bg-[#6C27FF] transition-all ease-out duration-75 overflow-y-scroll scrollbar-hide'>
        <div className='my-4'>
          <img className='m-auto' src='/yearly_idol.png' width='240px' alt='연간 아이돌' />
        </div>
        <div className='py-2 my-4s border-t-2 border-b-2 border-white text-white'>검색!</div>
        <div className='flex flex-col justify-between'>
          <div className='min-h-[300px]'>
            {user.role === 'USER' && <UserActionBar />}
            {user.role === 'ADMIN' && <AdminActionBar />}
          </div>
          <div className='max-h-[300px] py-24 border-dotted border-y-2 border-white text-white p-4' />
          <div>
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
              <button className='bg-[#FF00A5] text-white font-bold w-4/5 py-1 rounded-xl'>
                로그아웃
              </button>
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}
