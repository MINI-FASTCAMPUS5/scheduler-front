import Banner from '@/components/Banner'
import SideBar from '@/components/SideBar'
import CalendarFrame from '@/components/calendar/CalendarFrame'
// import useUser from '@/hooks/user'
import React from 'react'

export default function CalendarPage() {
  // const { getUserInfo } = useUser()

  return (
    <div className='grid grid-cols-cal-frame-w overflow-x-hidden'>
      <SideBar />
      <div className='px-4 mb-12'>
        <Banner className='py-4' src='/newjeans_ad.png' type='top' alt='newjeans banner' />
        <CalendarFrame />
      </div>
    </div>
  )
}
