import React from 'react'
import dayjs from 'dayjs'
import type { ProviderSchedule } from '@/models/schedule'
import type { SchedulePosition } from '@/utils/calendar'
// import useSchedule from '@/hooks/schedule'

type Props = {
  schedule: ProviderSchedule & { pos: SchedulePosition; restItem: number }
  ceilWidth: number
  date: string
  skip?: boolean
}

export default function DailySchedule({ schedule, ceilWidth }: Props) {
  let ceils = dayjs(schedule.endDate).diff(dayjs(schedule.startDate), 'day') + 1
  if (schedule.pos === 'start-end') ceils = 1
  return (
    <div className={'relative my-1 text-white'}>
      <div>
        {schedule.pos.includes('start') ? (
          <>
            <span className='whitespace-nowrap invisible'>{schedule.title}</span>
            <button
              className={`
              flex justify-start items-center absolute left-0 top-0 text-start whitespace-nowrap z-30 cursor-pointer
               transition-all ease-in-out duration-200
              `}
              style={{
                minWidth: `${ceilWidth * ceils}px`,
                maxWidth: `${ceilWidth * ceils}px`
              }}
            >
              <img
                src={schedule.profileImage}
                alt={schedule.fullName}
                className='absolute w-5 h-5'
              />
              <div
                className={`w-full ${
                  schedule.pos === 'start-end' ? 'rounded-l-xl' : 'rounded-xl'
                } min-w-[100px] cursor-pointer bg-[#6C27FF] hover:bg-[#4619a5] pl-8 transition-all ease-in-out duration-1000 overflow-hidden`}
              >
                {schedule.title}
              </div>
            </button>
          </>
        ) : (
          <div className='whitespace-nowrap invisible'>{schedule.title}</div>
        )}
      </div>
    </div>
  )
}
