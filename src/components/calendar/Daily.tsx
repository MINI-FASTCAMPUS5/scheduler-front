// import useSchedule from '@/hooks/schedule'
// import { ProviderSchedule } from '@/models/schedule'
import { getDailyColor } from '@/utils/calendar'
import dayjs from 'dayjs'
import React from 'react'
import { useParams } from 'react-router-dom'

type Props = {
  daily: string[]
}
export default function Daily({ daily }: Props) {
  const { month } = useParams()
  // const { schedule } = useSchedule()

  return daily?.map((date, i) => {
    const disable = dayjs(date).month() + 1 !== Number(month) ? 'text-gray-300' : ''
    // const providerSchedule = schedule?.filter((s) => s.startDate <= date && s.endDate >= date)
    // const fanSchedule = ['foo', 'bar'] // 아직 미구현
    return (
      <div key={'daily' + date}>
        <div className={`${disable} text-end ${!disable && getDailyColor(i)}`}>
          {dayjs(date).date()}
        </div>
      </div>
    )
  })
}
