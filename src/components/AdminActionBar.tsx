import { DATE_ROUTE_FORMAT } from '@/constants'
import dayjs from 'dayjs'
import React, { useEffect, useMemo, useState } from 'react'
import {
  BiCalendarAlt,
  BiCalendarPlus,
  BiSolidCommentCheck,
  BiSolidUserRectangle
} from 'react-icons/bi'
import { useLocation, useParams } from 'react-router-dom'
import SidebarMenu from './sidebar/SidebarMenu'

export default function AdminActionBar() {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const [activeId, setActiveId] = useState('')

  const { year, month, day } = useParams()

  let calendarPath =
    year && month && day
      ? `/calendar/${year}/${month}/${day}`
      : `/calendar/${dayjs().format(DATE_ROUTE_FORMAT)}`

  searchParams.get('keyword') && (calendarPath += `?keyword=${searchParams.get('keyword')}`)

  const sidebarMenu = useMemo(
    () => [
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
    ],
    [calendarPath]
  )

  useEffect(() => {
    const idx = sidebarMenu.findIndex(({ url }) => location.pathname.includes(url))
    setActiveId(`admin-sidebar-${idx}`)
  }, [location.pathname, sidebarMenu])

  return (
    <div className='mb-6'>
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
