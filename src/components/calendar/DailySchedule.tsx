import React from 'react'
import dayjs from 'dayjs'
import type { ProviderScheduleWithPos } from '@/utils/calendar'
import { ProviderReservedList } from '@/models/schedule'

type Props = {
  schedule: ProviderScheduleWithPos
  reservedList: ProviderReservedList[] | undefined
  cellWidth: number
  date: string
  skip?: boolean
  onClickSchedule: (schedule: ProviderScheduleWithPos) => void
}

export default function DailySchedule({
  schedule,
  cellWidth: cellWidth,
  onClickSchedule,
  reservedList,
  date
}: Props) {
  const startDate = dayjs(date).day() === 0 ? date : schedule.startDate
  let cells = Math.min(dayjs(schedule.endDate).diff(dayjs(startDate), 'day') + 1, 8)
  if (schedule.pos === 'start-end') cells = 1

  const bgByProgress = {
    WAITING: 'bg-wait hover:bg-[#d9960f]',
    ACCEPT: 'bg-confirm hover:bg-[#5cbbd7]',
    REFUSE: 'bg-point hover:bg-[#f43f5e]'
  }
  let bgStyle = 'bg-main hover:bg-[#4619a5]'
  if (typeof reservedList !== 'undefined') {
    reservedList.forEach((r) => {
      if (r.scheduleId === schedule.id) {
        bgStyle = bgByProgress[r.progress]
      }
    })
  }

  return (
    <div className={'relative my-1 text-white text-[0.8rem]'}>
      {schedule.pos.includes('start') ? (
        <>
          <span className='whitespace-nowrap invisible'>{schedule.title}</span>
          <button
            className={`
              flex justify-start items-center absolute left-0 top-0 text-start whitespace-nowrap z-50 cursor-pointer transition-all ease-in-out duration-700
              `}
            style={{
              minWidth: `${cellWidth * cells}px`,
              maxWidth: `${cellWidth * cells}px`
            }}
            onClick={() => {
              onClickSchedule(schedule)
            }}
          >
            <img
              src={schedule.profileImage}
              alt={schedule.fullName}
              className='schedule-cell absolute max-w-[19px] max-h-[19px] aspect-square object-cover z-40'
            />
            <div
              className={`schedule-cell w-full ${
                schedule.pos === 'start-end' ? 'rounded' : 'rounded'
              } min-w-[100px] cursor-pointer ${bgStyle} pl-8 transition-all ease-in-out z-30 duration-200 overflow-hidden`}
            >
              {schedule.title}
            </div>
          </button>
        </>
      ) : (
        <div className='whitespace-nowrap invisible'>{schedule.title}</div>
      )}
    </div>
  )
}
