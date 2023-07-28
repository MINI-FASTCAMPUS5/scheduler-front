import SideBar from '@/components/SideBar'
import CalendarFrame from '@/components/calendar/CalendarFrame'
import useUser from '@/hooks/user'
import React from 'react'

export default function CalendarPage() {
  const { getUserInfo } = useUser()

  return (
    <div className='flex bg-orange-[rgba(213, 171, 123, 0.9)] h-full min-h-screen'>
      <SideBar />
      <div>
        <h1>Calendar Page 입니다요~</h1>
        <h2>
          <strong>{getUserInfo().fullName}</strong>님의 켈린더
        </h2>
        <CalendarFrame />
      </div>
    </div>
  )
}
