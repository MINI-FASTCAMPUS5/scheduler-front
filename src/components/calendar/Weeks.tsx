import React, { useMemo } from 'react'

export default function Weeks() {
  const weeks = useMemo(() => ['일', '월', '화', '수', '목', '금', '토'], [])

  return weeks.map((week) => {
    return (
      <div key={week} className={'text-center bg-main font-bold text-white leading-7 font-gmarket'}>
        {week + '요일'}
      </div>
    )
  })
}
