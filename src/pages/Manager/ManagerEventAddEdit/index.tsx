import Banner from '@/components/Banner'
import CalendarFrame from '@/components/calendar/CalendarFrame'
import React from 'react'

export default function ManagerEventAddEditPage() {
  return (
    <div className='mb-12 min-w-[760px] max-w-[1432px] px-[1.25rem]'>
      <Banner className='py-4' src='/newjeans_ad.png' type='top' alt='newjeans banner' />
      <CalendarFrame />
    </div>
  )
}
