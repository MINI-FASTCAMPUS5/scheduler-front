import useUser from '@/hooks/user'
import React from 'react'
import AdminActionBar from '@/components/AdminActionBar'
import UserActionBar from '@/components/UserActionBar'
import Profile from '@/components/sidebar/Profile'
import SearchForm from '@/components/SearchForm'

export default function SideBar() {
  const { getUserInfo } = useUser()
  const user = getUserInfo()

  const handleSubmit = (value: string) => {
    alert(value + '를 검색합니다.')
  }

  return (
    <aside
      className={`sticky top-2 left-2 mb-2 flex flex-col min-w-[300px] max-w-[300px] max-h-[calc(100vh_-_1rem)] min-h-[860px] pt-4 rounded-[20px] bg-main z-[60]
      transition-all ease-out duration-75`}
    >
      <div>
        <img className='m-auto' src='/yearly_idol.png' width='240px' alt='연간 아이돌' />
      </div>
      <SearchForm onSubmit={handleSubmit} />
      {user.role === 'USER' && <UserActionBar />}
      {user.role === 'ADMIN' && <AdminActionBar />}
      {/* todo : useUser hooks를 내부에서 호출할지 정하자, 그리고 버튼 디자인 정해지면 버튼은 재사용 가능하게 변경하지*/}
      <div className='max-h-[300px] py-24 my-4 border-dotted border-y-2 border-white text-white p-4' />
      <Profile user={user} />
    </aside>
  )
}
