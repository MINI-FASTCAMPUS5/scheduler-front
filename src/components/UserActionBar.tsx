import React, { useState } from 'react'
import SidebarMenu from './sidebar/SidebarMenu'
import { useLocation } from 'react-router-dom'

const sidebarMenu = [
  {
    title: '행사 신청 캘린더',
    id: 'user-sidebar-0'
  },
  {
    title: '마이 페이지',
    id: 'user-sidebar-1'
  }
]

export default function UserActionBar() {
  const location = useLocation()
  // console.log('location : ', location.pathname)

  let idx = 0
  if (location.pathname.includes('user/apply')) idx = 2
  if (location.pathname.includes('mypage')) idx = 3
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
