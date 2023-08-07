import React, { useState, useMemo } from 'react'
import SidebarMenu from './sidebar/SidebarMenu'
import { useLocation } from 'react-router-dom'
import { AiTwotoneCalendar } from 'react-icons/ai'
import { AiOutlineEdit } from 'react-icons/ai'
import { BiMessageRoundedCheck } from 'react-icons/bi'
import { FaUserEdit } from 'react-icons/fa'
import { DATE_ROUTE_FORMAT } from '@/constants'
import dayjs from 'dayjs'

export default function AdminActionBar() {
  const location = useLocation()
  const date = new Date()
  const sidebarMenu = useMemo(
    () => [
      {
        title: '행사 일정 캘린더',
        id: 'admin-sidebar-0',
        Icon: AiTwotoneCalendar,
        url: `/calendar/${dayjs(date).format(DATE_ROUTE_FORMAT)}`
      },
      {
        title: '행사 등록/수정',
        id: 'admin-sidebar-1',
        Icon: AiOutlineEdit,
        url: `/manager/event/calendar/${dayjs(date).format(DATE_ROUTE_FORMAT)}`
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
      },
      {
        title: '임시 스케줄 추가 페이지 (제거예정)',
        id: 'admin-sidebar-4',
        Icon: FaUserEdit,
        url: '/calendar/schedule'
      }
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )
  let idx = 0
  if (location.pathname.includes('/manager/event/calendar/')) idx = 1
  if (location.pathname.includes('/manager/approval')) idx = 2
  if (location.pathname.includes('/manager/dashboard')) idx = 3
  const [activeId, setActiveId] = useState(sidebarMenu[idx].id)

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
