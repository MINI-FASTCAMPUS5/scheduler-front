import React, { useState } from 'react'
import SidebarMenu from './sidebar/SidebarMenu'
import { useLocation } from 'react-router-dom'
import { AiTwotoneCalendar } from 'react-icons/ai'
import { FaUserClock } from 'react-icons/fa'
import dayjs from 'dayjs'
import { DATE_ROUTE_FORMAT } from '@/constants'

export default function UserActionBar() {
  const location = useLocation()
  const sidebarMenu = [
    {
      title: '행사 신청 캘린더',
      id: 'user-sidebar-0',
      Icon: AiTwotoneCalendar,
      url: `/calendar/${dayjs(new Date()).format(DATE_ROUTE_FORMAT)}`
    },
    {
      title: '마이 페이지',
      id: 'user-sidebar-1',
      Icon: FaUserClock,
      url: '/user/mypage'
    }
  ]
  let idx = 0
  if (location.pathname.includes('mypage')) idx = 1
  // params로 체크해서 sidebarMenu[0] 몇번째 인지 정하기
  const [activeId, setActiveId] = useState(sidebarMenu[idx].id)

  // const openEventSidebar = () => {}

  return (
    <div>
      {sidebarMenu.map((menu, idx) => {
        return (
          <SidebarMenu
            key={menu.id}
            name={menu.id}
            isActive={activeId === menu.id}
            onClick={(name) => setActiveId(name)}
            idx={idx}
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
