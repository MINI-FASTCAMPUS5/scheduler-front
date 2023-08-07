import React from 'react'
import useSchedule from '@/hooks/schedule'
import MonthlyCalendar from '@/components/calendar/MonthlyCalendar'
import CalendarSwiper from '@/components/calendar/CalendarSwiper'
import CheerUpLoading from '@/components/ui/CheerUpLoading'
import useUser from '@/hooks/user'

export default function CalendarFrame() {
  const { getUserInfo } = useUser()
  const user = getUserInfo()
  const { isFetching, isLoading } = useSchedule(user.id ? user.id : '')

  return (
    <>
      <CalendarSwiper />
      {(isFetching || isLoading) && (
        <div className='fixed flex flex-col w-full h-full left-0 top-0 bg-purple-50 z-[9999] justify-center items-center opacity-90 overflow-hidden'>
          <div className='text-black  text-7xl font-extrabold opacity-80 mb-12'>
            데이터를 가져오고 있습니다!
          </div>
          <CheerUpLoading />
          <span className='animate-ping행사 일정 absolute inline-flex h-full w-full rounded-full bg-purple-100 opacity-10' />
        </div>
      )}
      <MonthlyCalendar />
    </>
  )
}
