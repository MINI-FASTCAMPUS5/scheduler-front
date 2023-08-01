import React, { useState } from 'react'
import SidebarMenu from './sidebar/SidebarMenu'
import { useLocation } from 'react-router-dom'
import { AiTwotoneCalendar } from 'react-icons/ai'
import { AiOutlineEdit } from 'react-icons/ai'
import { BiMessageRoundedCheck } from 'react-icons/bi'
import { FaUserEdit } from 'react-icons/fa'

const sidebarMenu = [
  {
    title: '행사 일정 캘린더',
    id: 'admin-sidebar-0',
    Icon: AiTwotoneCalendar
  },
  {
    title: '행사 등록/수정',
    id: 'admin-sidebar-1',
    Icon: AiOutlineEdit
  },
  {
    title: '신청 승인/취소',
    id: 'admin-sidebar-2',
    Icon: BiMessageRoundedCheck
  },
  {
    title: '매니저 페이지',
    id: 'admin-sidebar-3',
    Icon: FaUserEdit
  }
]

export default function AdminActionBar() {
  const location = useLocation()
  // console.log('location : ', location.pathname)

  let idx = 0
  if (location.pathname.includes('apply')) idx = 2
  if (location.pathname.includes('manager')) idx = 3
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
