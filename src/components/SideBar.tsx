import { AdminActionBar } from '@/components/AdminActionBar'
import { SearchForm } from '@/components/SearchForm'
import { UserActionBar } from '@/components/UserActionBar'
import { Profile } from '@/components/sidebar/Profile'
import { DATE_ROUTE_FORMAT } from '@/constants'
import { useUser } from '@/hooks/user'
import dayjs from 'dayjs'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { SideBarAd } from './SideBarAd'

export function SideBar() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { getUserInfo } = useUser()
  const { role } = getUserInfo()

  const handleSubmit = (value: string) => {
    navigate(`${pathname}?keyword=${value}`)
  }

  return (
    <aside
      className={`sticky mt-2 left-2 mb-2 flex flex-col min-w-[290px] max-w-[290px] max-h-[calc(100vh_-_1rem)] min-h-[860px] pt-6 rounded-[20px] bg-main z-[60]
      transition-all ease-out duration-75`}
    >
      <div className='mb-8'>
        <Link to={`/calendar/${dayjs().format(DATE_ROUTE_FORMAT)}`}>
          <img
            className='m-auto mt-[16px] transition hover:scale-105'
            src='/yearly_idol.png'
            width='220px'
            alt='연간 아이돌'
          />
        </Link>
      </div>
      <div className='mb-4'>
        <SearchForm onSubmit={handleSubmit} />
      </div>
      {role === 'USER' && <UserActionBar />}
      {role === 'ADMIN' && <AdminActionBar />}
      <div className='mb-auto overflow-y-scroll scrollbar-hide border-dashed border-y-2 border-[#8a70ff] mt-4'>
        {role === 'USER' ? <SideBarAd /> : <div className='flex h-[280px]' />}
      </div>
      <Profile />
    </aside>
  )
}
