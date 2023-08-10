import React, { useState, useEffect } from 'react'
import useSchedule from '@/hooks/schedule'
import { ProviderScheduleWithPos, getProviderSchdule } from '@/utils/calendar'
import DailySchedule from '@/components/calendar/DailySchedule'
import Banner from '@/components/Banner'
import CheerUpLoading from '@/components/ui/CheerUpLoading'

type Props = {
  date: string
  onClick: (schedule: ProviderScheduleWithPos) => void
}
export default function DailyDetail({ date, onClick }: Props) {
  const { adminSchedule, reservedList, isFetching } = useSchedule()
  const [scheduleWithPos, setScheduleWithPos] = useState<ProviderScheduleWithPos[]>([])

  useEffect(() => {
    const filteredSchedule = getProviderSchdule(adminSchedule, date).map((s) => {
      s.pos = 'start'
      return s
    })
    setScheduleWithPos(filteredSchedule)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adminSchedule, isFetching])

  return (
    <section className='overflow-hidden h-full p-4'>
      <div className='h-full'>
        <div className='p-4'>
          <h1 className='flex flex-col text-2xl font-bold text-main font-gmarket'>
            <strong className='text-3xl flex justify-center'>{date}</strong>
            <span className='flex justify-center border-2 border-main w-[130px] text-[18px] rounded-xl pt-[1px] ml-auto mr-auto mt-2 mb-6'>
              행사 리스트
            </span>
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
            <div className='text-main pt-4 font-bold'>추가된 데이터 확인 중...</div>
          )}
          <div className='h-[460px] rounded-[16px] border-[1px] overflow-scroll p-4'>
            {scheduleWithPos?.map((s) => {
              return (
                <div
                  key={`monthly-detail-${s.id}`}
                  className='max-w-[540px] overflow-hidden font-gmarket mr-auto ml-auto bg-boxbg rounded-[10px] p-2 mb-2'
                >
                  <div className='flex flex-col justify-center'>
                    <strong className='flex'>{s.title}</strong>
                    <span className='flex text-[10px] text-[#888888]'>
                      ({s.startDate} ~ {s.endDate})
                    </span>
                  </div>
                  <div className='flex w-full overflow-hidden'>
                    <DailySchedule
                      cellWidth={600}
                      date={date}
                      schedule={s}
                      reservedList={reservedList}
                      onClickSchedule={onClick}
                    />
                  </div>
                </div>
              )
            })}
          </div>
          <div className=' border-dashed border-boxline ml-4 mr-4 cursor-pointer'>
            <Banner className='py-4' src='/newjeans_ad.png' type='top' alt='newjeans banner' />
          </div>
        </div>
      </div>
    </section>
  )
}
