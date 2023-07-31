import { getDailyColor } from '@/utils/calendar'
import React, { useMemo } from 'react'

// type Props = {
//   weeks: string[]
//   color: 'red' | 'blue' | 'black'
// }

export default function Weeks() {
  const weeks = useMemo(() => ['일', '월', '화', '수', '목', '금', '토'], [])

  return weeks.map((week, i) => {
    return (
      <div key={week} className={`${getDailyColor(i)} text-center bg-slate-300`}>
        {week + '요일'}
      </div>
    )
  })
}
