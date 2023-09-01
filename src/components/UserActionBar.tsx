import { DATE_ROUTE_FORMAT } from '@/constants'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { BiCalendarCheck, BiSolidUserRectangle } from 'react-icons/bi'
import { useLocation, useParams } from 'react-router-dom'
import SidebarMenu from './sidebar/SidebarMenu'

export default function UserActionBar() {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const [activeIdx, setActiveIdx] = useState(-1)
  const { year, month, day } = useParams()
  let calendarPath =
    year && month && day
      ? `/calendar/${year}/${month}/${day}`
      : `/calendar/${dayjs().format(DATE_ROUTE_FORMAT)}`

  searchParams.get('keyword') && (calendarPath += `?keyword=${searchParams.get('keyword')}`)

  const sidebarMenu = [
    {
      title: '행사 신청 캘린더',
      Icon: BiCalendarCheck,
      url: calendarPath
    },
    {
      title: '마이 페이지',
      Icon: BiSolidUserRectangle,
      url: '/user/mypage'
    }
  ]

  useEffect(() => {
    let idx = -1
    if (location.pathname.includes('calendar')) idx = 0
    if (location.pathname.includes('user/mypage')) idx = 1
    setActiveIdx(idx)
  }, [location.pathname])

  return (
    <div className='mb-6'>
      {sidebarMenu.map((menu, i) => {
        return (
          <SidebarMenu
            key={`user-sidebar-menu-${i}`}
            isActive={activeIdx === i}
            onClick={(sidebarIdx) => setActiveIdx(sidebarIdx)}
            idx={i}
            url={menu.url}
          >
            <p className='flex items-center ml-4'>
              <menu.Icon className='mr-4 w-6 h-6' />
              {menu.title}
            </p>
          </SidebarMenu>
        )
      })}
    </div>
  )
}
