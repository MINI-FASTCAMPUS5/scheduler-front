import React, { useState } from 'react'
import SidebarMenu from './sidebar/SidebarMenu'
import { useLocation, useParams } from 'react-router-dom'
import { AiTwotoneCalendar } from 'react-icons/ai'
import { AiOutlineEdit } from 'react-icons/ai'
import { BiMessageRoundedCheck } from 'react-icons/bi'
import { FaUserEdit } from 'react-icons/fa'
import { DATE_ROUTE_FORMAT } from '@/constants'
import dayjs from 'dayjs'

export default function AdminActionBar() {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
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
      Icon: AiTwotoneCalendar,
      url: calendarPath
    },
    {
      title: '행사 등록/수정',
      id: 'admin-sidebar-1',
      Icon: AiOutlineEdit,
      url: '/manager/event' + calendarPath
    },
    {
      title: '신청 승인/취소',
      id: 'admin-sidebar-2',
      Icon: BiMessageRoundedCheck,
      url: '/manager/approval'
    },
    {
      title: '매니저 페이지',
      id: 'admin-sidebar-3',
      Icon: FaUserEdit,
      url: '/manager/dashboard'
    }
  ]
  let idx = 0
  if (location.pathname.includes('/manager/event/calendar/')) idx = 1
  if (location.pathname.includes('/manager/approval')) idx = 2
  if (location.pathname.includes('/manager/dashboard')) idx = 3
  const [activeId, setActiveId] = useState(sidebarMenu[idx].id)

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
