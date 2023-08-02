import React from 'react'
import dayjs from 'dayjs'
import type { ProviderScheduleWithPos } from '@/utils/calendar'
// import useSchedule from '@/hooks/schedule'

type Props = {
  schedule: ProviderScheduleWithPos
  ceilWidth: number
  date: string
  skip?: boolean
  onClickSchedule: (schedule: ProviderScheduleWithPos) => void
}

export default function DailySchedule({ schedule, ceilWidth, onClickSchedule }: Props) {
  let ceils = dayjs(schedule.endDate).diff(dayjs(schedule.startDate), 'day') + 1
  if (schedule.pos === 'start-end') ceils = 1
  return (
    <div className={'relative my-1 text-white text-[0.8rem] daily-ceil'}>
      {schedule.pos.includes('start') ? (
        <>
          <span className='whitespace-nowrap invisible'>{schedule.title}</span>
          <button
            className={`
              flex justify-start items-center absolute left-0 top-0 text-start whitespace-nowrap z-50 cursor-pointer transition-all ease-in-out duration-700
              `}
            style={{
              minWidth: `${ceilWidth * ceils}px`,
              maxWidth: `${ceilWidth * ceils}px`
            }}
            onClick={() => {
              onClickSchedule(schedule)
            }}
          >
            <img
              src={schedule.profileImage}
              alt={schedule.fullName}
              className='absolute w-5 h-5 z-40'
            />
            <div
              className={`w-full ${
                schedule.pos === 'start-end' ? 'rounded-l-xl' : 'rounded-xl'
              } min-w-[100px] cursor-pointer bg-main hover:bg-[#4619a5] pl-8 transition-all ease-in-out z-30 duration-200 overflow-hidden`}
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
