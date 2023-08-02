import React, { useState } from 'react'
import { ProviderScheduleWithPos } from '@/utils/calendar'
import Banner from '../Banner'
import ReserveFormInfomation from './ReserveFormInfomation'
import Button from '../ui/Button'

type Props = {
  schedule: ProviderScheduleWithPos
  user: 'admin' | 'fan'
  onCancle: () => void
  onReserve: (schedule: ProviderScheduleWithPos, selectedDate: string) => void
}

export default function ReserveForm({ schedule, onCancle, onReserve, user }: Props) {
  const [selectedDate, setSelectedDate] = useState('')
  return (
    <section className='overflow-hidden h-full p-4 px-12'>
      <div className='h-full flex flex-col justify-between rounded-2xl'>
        <Banner
          className='py-4'
          src='/YeonganIdolLogoOrigin.svg'
          type='post'
          alt='newjeans banner'
        />
        <div className='flex-1'>
          <ReserveFormInfomation
            schedule={schedule}
            onChageDate={(date) => setSelectedDate(date)}
          />
        </div>
        <div className='flex justify-around py-4'>
          {user === 'fan' ? (
            <>
              <Button
                disabled={!selectedDate}
                text='신청하기'
                size='lg'
                className='w-3/12 font-bold'
                onClick={() => {
                  if (!selectedDate) return alert('날짜를 선택해주세요.')
                  onReserve(schedule, selectedDate)
                }}
              />
              <Button
                text='취소'
                type='red'
                size='lg'
                className='w-3/12 font-bold'
                onClick={() => onCancle()}
              />
            </>
          ) : (
            <div className='text-2xl font-bold text-point'>매니저는 예약할 수 없습니다!</div>
          )}
        </div>
      </div>
    </section>
  )
}
