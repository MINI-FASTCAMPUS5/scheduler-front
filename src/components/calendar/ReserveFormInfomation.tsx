import { DATE_FORMAT } from '@/constants'
import { ProviderScheduleWithPos } from '@/utils/calendar'
import { BiCalendarX } from 'react-icons/bi'
import dayjs from 'dayjs'
import React from 'react'

type Props = {
  schedule: ProviderScheduleWithPos
  onChageDate: (date: string) => void
}

export default function ReserveFormInfomation({ schedule, onChageDate }: Props) {
  const date = new Date()

  const itemStyle = 'flex justify-between items-center pb-8'
  return (
    <ul>
      <li className={itemStyle}>
        <span className='text-xl font-bold font-gmarket mt-10'>{'행사명'}</span>
        <span className='mt-10 text-[16px] text-[#696969] font-gmarket'>{schedule.title}</span>
      </li>
      <li className={itemStyle}>
        <span className='text-xl font-bold font-gmarket'>{'행사 날짜'}</span>
        <span className='text-[16px] text-[#696969] font-gmarket'>
          {schedule.startDate} ~ {schedule.endDate}
        </span>
      </li>
      <li className={itemStyle}>
        <span className='text-xl font-bold font-gmarket'>{'공연 선택'}</span>
        <span className='text-[16px] text-[#696969]'>
          {schedule.startDate < dayjs(date).format(DATE_FORMAT) ? (
            <div className='bg-inputbox flex rounded-[10px] h-[30px] pl-[12px] pr-[12px]'>
              <span>
                {schedule.endDate > dayjs(date).format(DATE_FORMAT)
                  ? '진행 중인 행사입니다!'
                  : <div className='text-[#b3b3b3] font-bold mt-[3px]'>이미 끝난 행사입니다!</div>}
              </span>
              <BiCalendarX className='flex m-auto ml-2 w-5 h-5 mt-[5px] text-[#b3b3b3]' />
            </div>
          ) : (
            <input
              type='date'
              className='bg-slate-100 px-4 rounded-xl'
              min={schedule.startDate}
              max={schedule.endDate}
              onChange={(e) => onChageDate(e.target.value)}
            />
          )}
        </span>
      </li>
      <li className={itemStyle}>
        <span className='text-xl font-bold font-gmarket'>{'행사 설명'}</span>
        <span className='text-[16px] text-[#696969] font-gmarket'>{schedule.description}</span>
      </li>
    </ul>
  )
}
