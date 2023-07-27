import SideBar from '@/components/SideBar'
import useSchedule from '@/hooks/schedule'
import useUser from '@/hooks/user'
import React from 'react'

export default function CalendarPage() {
  const { getUserInfo } = useUser()
  const { schedule, isFetching } = useSchedule()

  return (
    <div className='flex bg-orange-[rgba(213, 171, 123, 0.9)] h-full min-h-screen'>
      <SideBar />
      <div>
        <h1>Calendar Page 입니다요~</h1>
        <h2>
          <strong>{getUserInfo().fullName}</strong>님의 켈린더
        </h2>
        {isFetching && <div>schedule data를 가져오고 있습니다!</div>}
        <ul className='flex flex-wrap'>
          {schedule.map((item) => (
            <li className='m-10' key={item.id}>
              <p>이벤트 명 : {item.title}</p>
              <p>기획사 : {item.fullName}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
