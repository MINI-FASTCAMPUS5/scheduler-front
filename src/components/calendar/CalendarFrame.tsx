import useSchedule from '@/hooks/schedule'
import React from 'react'
import MonthlyCalendar from '@/components/calendar/MonthlyCalendar'
import CalendarSwiper from '@/components/calendar/CalendarSwiper'
import CheerUpLoading from '@/components/ui/CheerUpLoading'

export default function CalendarFrame() {
  const { isFetching } = useSchedule()

  return (
    <>
      <CalendarSwiper />
      {/* 임시 fetch loading 태그입니다. */}
      {isFetching && (
        <div className='fixed flex flex-col w-full h-full left-0 top-0 bg-purple-50 z-[99999] justify-center items-center opacity-90 overflow-hidden'>
          <div className='text-black  text-7xl font-extrabold opacity-80 mb-12'>
            데이터를 가져오고 있습니다!
          </div>
          <CheerUpLoading />
          <span className='aanimate-ping absolute inline-flex h-full w-full rounded-full bg-purple-100  opacity-10' />
          {/* <span className='relative inline-flex rounded-full h-3 w-3 bg-orange-500 ' /> */}
        </div>
      )}
      <MonthlyCalendar />
    </>
  )
}
