import useSchedule from '@/hooks/schedule'
import React from 'react'
import Month from './Month'

export default function CalendarFrame() {
  const { schedule, isFetching } = useSchedule()

  console.info(schedule)

  return (
    <div>
      {isFetching && <div>schedule data를 가져오고 있습니다!</div>}
      <ul />
      <Month />
    </div>
  )
}
