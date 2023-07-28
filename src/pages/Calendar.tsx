import SideBar from '@/components/SideBar'
import CalendarFrame from '@/components/calendar/CalendarFrame'
import useUser from '@/hooks/user'
import React from 'react'

export default function CalendarPage() {
  const { getUserInfo } = useUser()

  return (
    <div className='grid grid-cols-cal-frame-w overflow-x-hidden'>
      <SideBar />
      <div className='px-4'>
        <h1>Calendar Page 입니다~</h1>
        <h2>
          <strong>{getUserInfo().fullName}</strong>님의 켈린더
        </h2>
        <CalendarFrame />
      </div>
    </div>
  )
}
