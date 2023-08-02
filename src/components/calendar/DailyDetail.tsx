import React, { useState, useEffect } from 'react'
import useSchedule from '@/hooks/schedule'
import { ProviderScheduleWithPos, getProviderSchdule } from '@/utils/calendar'
import DailySchedule from '@/components/calendar/DailySchedule'
import Banner from '@/components/Banner'
import CheerUpLoading from '@/components/ui/CheerUpLoading'

type Props = {
  date: string
}
export default function DailyDetail({ date }: Props) {
  const { schedule, isFetching } = useSchedule()
  const [scheduleWithPos, setScheduleWithPos] = useState<ProviderScheduleWithPos[]>([])

  useEffect(() => {
    const filteredSchedule = getProviderSchdule(schedule, date).map((s) => {
      s.pos = 'start'
      return s
    })

    setScheduleWithPos(filteredSchedule)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [schedule, isFetching])

  const handleClickSchedule = (schedule: ProviderScheduleWithPos) => {
    console.info('handleClickSchedule  : ', schedule)
  }

  return (
    <section className='overflow-hidden h-full p-4'>
      <div className='bg-blue-100 h-full rounded-2xl'>
        <div className='border-dotted border-white border-b-4 p-4'>
          <Banner className='py-4' src='/newjeans_ad.png' type='top' alt='newjeans banner' />
        </div>
        <div className='p-4'>
          <h1 className='text-2xl font-bold text-main'>
            <strong className='text-3xl '>{date}</strong> 행사 리스트
          </h1>
          {/* 임시 로당 바 */}
          {isFetching && scheduleWithPos.length === 0 && (
            <div className='flex flex-col pt-12 justify-center items-center'>
              <div className='text-2xl text-main font-bold text-center pb-8'>
                데이터를 가져오고 있습니다!
              </div>
              <div className='max-w-[200px]'>
                <CheerUpLoading />
              </div>
            </div>
          )}
          {isFetching && scheduleWithPos.length > 0 && (
            <div className='text-main pt-4 font-bold'>추가 데이터 확인 중...</div>
          )}
          {scheduleWithPos?.map((s) => {
            return (
              <div key={`monthly-detail-${s.id}`} className='max-w-[500px] overflow-hidden pt-4'>
                <div className='text-main'>
                  <strong>{s.title}</strong> ({s.startDate} ~ {s.endDate})
                </div>
                <DailySchedule
                  ceilWidth={500}
                  date={date}
                  schedule={s}
                  onClickSchedule={handleClickSchedule}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
