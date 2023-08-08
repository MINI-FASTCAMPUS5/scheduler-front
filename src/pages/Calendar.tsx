import BannerSwiper from '@/components/BannerSwiper'
import SideBar from '@/components/SideBar'
import CalendarFrame from '@/components/calendar/CalendarFrame'
import React from 'react'

export default function CalendarPage() {
  return (
    <div className='grid grid-cols-cal-frame-w min-h-screen'>
      <SideBar />
      <div className='flex flex-col justify-center mb-12 min-w-[760px] px-[1.25rem]'>
        <div className='mt-2 mb-8'>
          <BannerSwiper />
        </div>
        <CalendarFrame />
      </div>
    </div>
  )
}
