import React, { useEffect, useState } from 'react'
import SidebarMenu from './sidebar/SidebarMenu'
import { useLocation, useParams } from 'react-router-dom'
import { BiCalendarCheck } from 'react-icons/bi'
import { BiSolidUserRectangle } from 'react-icons/bi'
import dayjs from 'dayjs'
import { DATE_ROUTE_FORMAT } from '@/constants'

export default function UserActionBar() {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const [activeId, setActiveId] = useState('')
  const { year, month, day } = useParams()
  let calendarPath =
    year && month && day
      ? `/calendar/${year}/${month}/${day}`
      : `/calendar/${dayjs(new Date()).format(DATE_ROUTE_FORMAT)}`

  searchParams.get('keyword') && (calendarPath += `?keyword=${searchParams.get('keyword')}`)

  const sidebarMenu = [
    {
      title: '행사 신청 캘린더',
      id: 'user-sidebar-0',
      Icon: BiCalendarCheck,
      url: calendarPath
    },
    {
      title: '마이 페이지',
      id: 'user-sidebar-1',
      Icon: BiSolidUserRectangle,
      url: '/user/mypage'
    }
  ]

  // params로 체크해서 sidebarMenu[0] 몇번째 인지 정하기

  useEffect(() => {
    let idx = -1
    if (location.pathname.includes('calendar')) idx = 0
    if (location.pathname.includes('user/mypage')) idx = 1
    setActiveId(() => (sidebarMenu[idx]?.id ? sidebarMenu[idx].id : ''))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])

  return (
    <div className='mb-6'>
      {sidebarMenu.map((menu, idx) => {
        if (!menu) return
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
