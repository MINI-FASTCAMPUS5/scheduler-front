import React, { useEffect, useState } from 'react'
import SidebarMenu from './sidebar/SidebarMenu'
import { useLocation, useParams } from 'react-router-dom'
import { BiCalendarAlt } from 'react-icons/bi'
import { BiCalendarPlus } from 'react-icons/bi'
import { BiSolidCommentCheck } from 'react-icons/bi'
import { BiSolidUserRectangle } from 'react-icons/bi'
import { DATE_ROUTE_FORMAT } from '@/constants'
import dayjs from 'dayjs'

export default function AdminActionBar() {
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
      title: '행사 일정 캘린더',
      id: 'admin-sidebar-0',
      Icon: BiCalendarAlt,
      url: calendarPath
    },
    {
      title: '행사 등록/수정',
      id: 'admin-sidebar-1',
      Icon: BiCalendarPlus,
      url: '/manager/event' + calendarPath
    },
    {
      title: '신청 승인/취소',
      id: 'admin-sidebar-2',
      Icon: BiSolidCommentCheck,
      url: '/manager/approval'
    },
    {
      title: '매니저 페이지',
      id: 'admin-sidebar-3',
      Icon: BiSolidUserRectangle,
      url: '/manager/dashboard'
    }
  ]

  useEffect(() => {
    let idx = -1
    if (location.pathname.includes('/calendar')) idx = 0
    if (location.pathname.includes('/manager/event/calendar/')) idx = 1
    if (location.pathname.includes('/manager/approval')) idx = 2
    if (location.pathname.includes('/manager/dashboard')) idx = 3
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
