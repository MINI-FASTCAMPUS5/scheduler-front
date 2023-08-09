import React from 'react'
import useUser from '@/hooks/user'
import AdminActionBar from '@/components/AdminActionBar'
import UserActionBar from '@/components/UserActionBar'
import Profile from '@/components/sidebar/Profile'
import SearchForm from '@/components/SearchForm'
import SideBarAd from './SideBarAd'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'
import { DATE_ROUTE_FORMAT } from '@/constants'

export default function SideBar() {
  const navigate = useNavigate()
  const location = useLocation()
  const { getUserInfo } = useUser()
  const user = getUserInfo()

  const handleSubmit = (value: string) => {
    navigate(`${location.pathname}?keyword=${value}`)
  }

  return (
    <aside
      className={`sticky mt-2 left-2 mb-2 flex flex-col min-w-[290px] max-w-[290px] max-h-[calc(100vh_-_1rem)] min-h-[860px] pt-6 rounded-[20px] bg-main z-[60]
      transition-all ease-out duration-75`}
    >
      <div className='mb-8'>
        <Link to={`/calendar/${dayjs(new Date()).format(DATE_ROUTE_FORMAT)}`}>
          <img className='m-auto mt-[16px] transition hover:scale-105' src='/yearly_idol.png' width='220px' alt='연간 아이돌' />
        </Link>
      </div>
      <div className='mb-4'>
        <SearchForm onSubmit={handleSubmit} />
      </div>
      {user.role === 'USER' && <UserActionBar />}
      {user.role === 'ADMIN' && <AdminActionBar />}
      {/* todo : useUser hooks를 내부에서 호출할지 정하자, 그리고 버튼 디자인 정해지면 버튼은 재사용 가능하게 변경하지*/}
      <div className='mb-auto overflow-y-scroll scrollbar-hide border-dashed border-y-2 border-[#8a70ff] mt-4'>
        {user.role === 'USER' && <SideBarAd />}
        {user.role === 'ADMIN' && <div className='flex h-[280px]' />}
      </div>
      <Profile user={user} />
    </aside>
  )
}
