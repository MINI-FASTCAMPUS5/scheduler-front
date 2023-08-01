import React, { useState } from 'react'
import SidebarMenu from './sidebar/SidebarMenu'
import { useLocation } from 'react-router-dom'

const sidebarMenu = [
  {
    title: '행사 일정 캘린더',
    id: 'admin-sidebar-0'
  },
  {
    title: '행사 등록/수정',
    id: 'admin-sidebar-1'
  },
  {
    title: '신청 승인/취소',
    id: 'admin-sidebar-2'
  },
  {
    title: '매니저 페이지',
    id: 'admin-sidebar-3'
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
            {menu.title}
          </SidebarMenu>
        )
      })}
    </div>
  )
}
