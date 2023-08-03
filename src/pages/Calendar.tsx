import Banner from '@/components/Banner'
import SideBar from '@/components/SideBar'
import CalendarFrame from '@/components/calendar/CalendarFrame'
// import useUser from '@/hooks/user'
import React from 'react'

export default function CalendarPage() {
  // const { getUserInfo } = useUser()

  return (
    <div className='grid grid-cols-cal-frame-w'>
      <SideBar />
      {/*  max-w-[1432px] px-[0.25rem]는 켈린더 최대 너비입니다. */}
      <div className='mb-12 min-w-[760px] max-w-[1432px] px-[1.25rem]'>
        <Banner className='py-4' src='/newjeans_ad.png' type='top' alt='newjeans banner' />
        <CalendarFrame />
      </div>
    </div>
  )
}
