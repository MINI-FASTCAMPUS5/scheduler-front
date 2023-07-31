import useSchedule from '@/hooks/schedule'
import { getDailyColor } from '@/utils/calendar'
import dayjs from 'dayjs'
import React from 'react'
import DailySchedule from './DailySchedule'
// import useResize from '@/hooks/resize'

type Props = {
  daily: string[]
}
export default function Daily({ daily }: Props) {
  // const { width, height } = useResize('.ceil')
  const { month, schedule } = useSchedule()
  // const { schedule } = useSchedule()

  return daily?.map((date, i) => {
    const disable = dayjs(date).month() + 1 !== Number(month) ? 'text-gray-300' : ''
    const providerSchedule = schedule
      ?.filter((s) => s.startDate <= date && s.endDate >= date)
      .sort((a, b) => (a.title > b.title ? 1 : -1))
    // const fanSchedule = ['foo', 'bar'] // 아직 미구현
    return (
      <div key={'daily' + date} className='ceil'>
        <div className={`${disable} text-end ${!disable && getDailyColor(i)}`}>
          {dayjs(date).date()}
          {providerSchedule.map((s) => {
            const type = s.startDate === date ? 'start' : s.endDate === date ? 'end' : 'between'
            return <DailySchedule key={s.id} schedule={s} type={type} />
          })}
        </div>
      </div>
    )
  })
}
