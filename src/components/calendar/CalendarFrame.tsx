import useSchedule from '@/hooks/schedule'
import React from 'react'

export default function CalendarFrame() {
  const { schedule, isFetching } = useSchedule()
  return (
    <div>
      {isFetching && <div>schedule data를 가져오고 있습니다!</div>}
      <ul>
        {schedule.map((item) => (
          <li className='m-10' key={item.id}>
            <p>이벤트 명 : {item.title}</p>
            <p>기획사 : {item.fullName}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
