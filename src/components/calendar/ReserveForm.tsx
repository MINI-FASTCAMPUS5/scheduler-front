import React, { useState } from 'react'
import { ProviderScheduleWithPos } from '@/utils/calendar'
// import Banner from '@/components/Banner'
import ReserveFormInfomation from '@/components/calendar/ReserveFormInfomation'
import Button from '@/components/ui/Button'
import { toast } from 'react-toastify'
// import { MdDiversity1 } from 'react-icons/md'

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
        <div className='flex flex-col text-[34px] font-gmarket font-bold ml-auto mr-auto mt-4'>
          행사 신청
        </div>
        <div className='flex bg-white h-[200px] rounded-2xl overflow-hidden border mt-3 justify-center'>
          <div className='py-4 flex'>
            {schedule.image ? (
              <img src={schedule.image} />
            ) : (
              <img src={'/mock_image/event_default.jpg'} />
            )}
          </div>
        </div>
        <div className='flex-1'>
          <ReserveFormInfomation
            schedule={schedule}
            onChageDate={(date) => setSelectedDate(date)}
          />
        </div>
        <div className='flex justify-around py-10 mr-10 ml-10'>
          {user === 'fan' ? (
            <>
              <Button
                disabled={!selectedDate}
                text='신청하기'
                size='lg'
                className='w-[200px] h-[40px] font-bold font-gmarket'
                onClick={() => {
                  if (!selectedDate) return toast.error('날짜를 선택해주세요.')
                  onReserve(schedule, selectedDate)
                }}
              />
              <Button
                text='취소'
                type='red'
                size='lg'
                className='w-[200px] h-[40px] font-bold font-gmarket'
                onClick={() => onCancle()}
              />
            </>
          ) : (
            <div className='bg-point pt-2 pb-2 pl-4 pr-4 rounded-[14px] text-2xl font-gmarket font-bold text-white'>매니저는 예약할 수 없습니다!</div>
          )}
        </div>
      </div>
    </section>
  )
}
