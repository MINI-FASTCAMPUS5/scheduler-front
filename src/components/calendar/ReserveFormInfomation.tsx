import { DATE_FORMAT } from '@/constants'
import { ProviderScheduleWithPos } from '@/utils/calendar'
import { FcOvertime } from 'react-icons/fc'
import dayjs from 'dayjs'
import React from 'react'

type Props = {
  schedule: ProviderScheduleWithPos
  onChageDate: (date: string) => void
}

export default function ReserveFormInfomation({ schedule, onChageDate }: Props) {
  const date = new Date()

  // todo 이미 지난 날짜는 예약 불가능하게 하기
  const itemStyle = 'flex justify-between items-center pb-8'
  return (
    <ul>
      <li className={itemStyle}>
        <span className='text-2xl font-bold'>{'행사명'}</span>
        <span className='text-lg font-bold'>{schedule.title}</span>
      </li>
      <li className={itemStyle}>
        <span className='text-2xl font-bold'>{'행사명'}</span>
        <span className='text-lg font-bold'>
          {schedule.startDate} ~ {schedule.endDate}
        </span>
      </li>
      <li className={itemStyle}>
        <span className='text-2xl font-bold'>{'공연 선택'}</span>
        <span className='text-lg font-bold'>
          {schedule.startDate < dayjs(date).format(DATE_FORMAT) ? (
            <div className='flex text-slate-500'>
              <span>
                {schedule.endDate > dayjs(date).format(DATE_FORMAT)
                  ? '진행 중인 행사입니다!'
                  : '이미 끝난 행사입니다!'}
              </span>
              <FcOvertime className='ml-2 w-8 h-8' />
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
        <span className='text-2xl font-bold'>{'행사 설명'}</span>
        <span className='text-lg font-bold'>어쩌고 저쩌고~~</span>
      </li>
    </ul>
  )
}
