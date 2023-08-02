import useUser from '@/hooks/user'
import React from 'react'
import AdminActionBar from './AdminActionBar'
import UserActionBar from './UserActionBar'
import Profile from './Profile'
import SearchForm from './SearchForm'

export default function SideBar() {
  const { getUserInfo } = useUser()
  const user = getUserInfo()

  const handleSubmit = (value: string) => {
    alert(value + '를 검색합니다.')
  }

  return (
    <div className='relative h-full z-[100]'>
      <aside className='fixed h-[98%] min-w-[300px] max-w-[300px]  top-0 left-0 m-2 pt-4 rounded-[20px] bg-main transition-all ease-out duration-75 overflow-y-scroll scrollbar-hide'>
        <div className='my-4'>
          <img className='m-auto' src='/yearly_idol.png' width='240px' alt='연간 아이돌' />
        </div>
        <SearchForm onSubmit={handleSubmit} />
        <div className='flex flex-col justify-between'>
          <div className='min-h-[300px]'>
            {user.role === 'USER' && <UserActionBar />}
            {user.role === 'ADMIN' && <AdminActionBar />}
          </div>
          <div className='max-h-[300px] py-24 border-dotted border-y-2 border-white text-white p-4' />
          {/* todo : useUser hooks를 내부에서 호출할지 알아서 정하자, 그리고 버튼 디자인 정해지면 버튼은 재사용가능하게 변경하지*/}
          <Profile user={user} />
        </div>
      </aside>
    </div>
  )
}
