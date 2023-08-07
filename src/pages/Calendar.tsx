import Banner from '@/components/Banner'
import SideBar from '@/components/SideBar'
import CalendarFrame from '@/components/calendar/CalendarFrame'
import React from 'react'

export default function CalendarPage() {
  return (
    <div className='grid grid-cols-cal-frame-w'>
      <SideBar />
      <div className='flex flex-col justify-center mb-12 min-w-[760px] px-[1.25rem]'>
        <div className='max-w-[1420px] m-auto'>
          <Banner className='py-4' src='/newjeans_ad.png' type='top' alt='newjeans banner' />
        </div>
        <CalendarFrame />
      </div>
    </div>
  )
}
