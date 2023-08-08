import BannerSwiper from '@/components/BannerSwiper'
import CalendarFrame from '@/components/calendar/CalendarFrame'
import React from 'react'

export default function ManagerEventAddEditPage() {
  return (
    <div className='flex flex-col justify-center mb-12 min-w-[760px] px-[1.25rem]'>
      <div className='mt-2 mb-8'>
        <BannerSwiper />
      </div>
      <CalendarFrame />
    </div>
  )
}
