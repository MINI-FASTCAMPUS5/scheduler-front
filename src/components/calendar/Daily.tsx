import React, { useEffect } from 'react'
import dayjs from 'dayjs'
import useSchedule from '@/hooks/schedule'
import useResize from '@/hooks/resize'
import { getProviderSchdule } from '@/utils/calendar'
import DailySchedule from '@/components/calendar/DailySchedule'

type Props = {
  daily: string[]
}
export default function Daily({ daily }: Props) {
  const { width, resize, setWidth } = useResize('.ceil')
  const { month, schedule, isFetching } = useSchedule()

  // * resize 이벤트는 화면 사이즈가 변경되야만 발생하기 때문에, 페이지가 처음로드되면 resize 이벤트를 발생시킵니다.
  useEffect(() => {
    setWidth(() => 0)
    if (!isFetching) {
      setTimeout(() => {
        resize()
      }, 100)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching])

  return daily?.map((date) => {
    const disable = dayjs(date).month() + 1 !== Number(month) ? true : false
    const providerSchedule = getProviderSchdule(schedule, date)
    const today = dayjs(date).date()
    let bgStyle = 'bg-blue-50'
    if (dayjs(date).format('ddd') === '일' || dayjs(date).format('ddd') === '토')
      bgStyle = 'bg-blue-100'
    return (
      <div key={'daily' + date} className={`ceil ${bgStyle}`}>
        <div className={`relative ${disable ? 'text-gray-400' : 'text-[#6C27FF]'} text-[0.8rem]`}>
          <div className='pl-2 font-bold'>{Math.floor(today / 10) === 0 ? `0${today}` : today}</div>
          {providerSchedule.map((s) => (
            <DailySchedule key={s.id} schedule={s} ceilWidth={width} date={date} />
          ))}
        </div>
      </div>
    )
  })
}
