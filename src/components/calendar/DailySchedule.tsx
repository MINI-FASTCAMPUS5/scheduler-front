import { ProviderSchedule } from '@/models/schedule'
import React from 'react'

type Props = {
  type: 'start' | 'end' | 'between'
  schedule: ProviderSchedule
}

const style = {
  container: {
    start: '',
    end: 'bg-slate-500 rounded-r-xl',
    between: 'bg-slate-500'
  },
  text: {
    start: 'inline-block h-full ml-2 pl-2 bg-slate-500 text-black rounded-l-xl whitespace-nowrap',
    end: '',
    between: ''
  }
}

export default function DailySchedule({ schedule, type }: Props) {
  return (
    <div className={style.container[type]}>
      {type === 'start' ? (
        <span className={style.text[type]}>{schedule.title}</span>
      ) : (
        <span>-</span>
      )}
    </div>
  )
}
