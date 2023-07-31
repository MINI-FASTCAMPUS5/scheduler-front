import React from 'react'
import dayjs from 'dayjs'
import type { ProviderSchedule } from '@/models/schedule'
import type { SchedulePosition } from '@/utils/calendar'

type Props = {
  schedule: ProviderSchedule & { pos: SchedulePosition }
  ceilWidth: number
  date: string
}

export default function DailySchedule({ schedule, ceilWidth }: Props) {
  const ceils = dayjs(schedule.endDate).diff(dayjs(schedule.startDate), 'day')
  return (
    <div className={'relative mb-1 text-black '}>
      <div>
        {schedule.pos.includes('start') ? (
          <>
            <span className='whitespace-nowrap invisible'>{schedule.title}</span>
            <span
              className={`
              flex justify-start items-center absolute  left-0 top-0 text-start whitespace-nowrap z-30 rounded-xl cursor-pointer
               bg-purple-400 hover:bg-purple-500 
               transition-all ease-in-out duration-200
              `}
              style={{
                minWidth: `${ceilWidth * ceils}px`
                // paddingRight: `${ceilWidth === 0 && '5rem'}`
              }}
            >
              <img
                src={schedule.profileImage}
                alt={schedule.fullName}
                className='w-6 h-6 rounded-[0.75rem]'
              />
              <div className='rounded-xl cursor-pointer bg-purple-400 hover:bg-purple-500 pr-4'>
                {schedule.title}
              </div>
            </span>
          </>
        ) : (
          <div className='whitespace-nowrap invisible'>{schedule.title}</div>
        )}
      </div>
    </div>
  )
}