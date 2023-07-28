import useSchedule from '@/hooks/schedule'
import React from 'react'
import Month from './Month'
import CalendarSwiper from './CalendarSwiper'

export default function CalendarFrame() {
  const { isFetching } = useSchedule()

  return (
    <>
      <CalendarSwiper />
      {/* 임시 fetch loading 태그입니다. */}
      {isFetching && (
        <div className='absolute flex w-full h-full left-0 top-0 bg-orange-700 z-[99999] justify-center items-center opacity-60 overflow-hidden'>
          <div className='text-black  text-7xl font-extrabold'>
            schedule data를 가져오고 있습니다!
          </div>
          <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-600  opacity-75' />
          {/* <span className='relative inline-flex rounded-full h-3 w-3 bg-orange-500 ' /> */}
        </div>
      )}
      <Month />
    </>
  )
}
