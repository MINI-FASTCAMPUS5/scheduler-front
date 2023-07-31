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
    <div className={'relative mb-2 text-white'}>
      <div>
        {schedule.pos.includes('start') ? (
          <>
            <span className='whitespace-nowrap invisible'>{schedule.title}</span>
            <span
              className={`
              flex justify-start items-center absolute left-0 top-0 text-start whitespace-nowrap z-30 rounded-xl cursor-pointer ml-2
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
                className='absolute w-6 h-6 aspect- rounded-[20px]'
              />
              <div className='rounded-xl w-full cursor-pointer bg-[#6C27FF] hover:bg-[#4619a5] pl-8 pr-4 transition-all ease-in-out duration-200'>
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
