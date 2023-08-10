import React from 'react'
import useSchedule from '@/hooks/schedule'
import MonthlyCalendar from '@/components/calendar/MonthlyCalendar'
import CalendarSwiper from '@/components/calendar/CalendarSwiper'
import CheerUpLoading from '@/components/ui/CheerUpLoading'

export default function CalendarFrame() {
  const { isFetching, isLoading } = useSchedule()

  return (
    <>
      <CalendarSwiper />
      {(isFetching || isLoading) && (
        <div className='fixed flex flex-col w-full h-full left-0 top-0 bg-white bg-opacity-30 z-[9999] justify-center items-center opacity-90 overflow-hidden' style={{ backdropFilter: 'blur(80px)' }}>
          <div className='text-main  text-5xl font-gmarket font-bold opacity-100 mb-12'>
            낭만있는 덕후 생활
          </div>
          <CheerUpLoading />
          {/* <span className='animate-ping absolute inline-flex h-full w-full bg-purple-100 opacity-10' /> */}
        </div>
      )}
      <MonthlyCalendar />
    </>
  )
}
