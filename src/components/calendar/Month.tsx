import React from 'react'
import 'dayjs/locale/ko'
import dayjs from 'dayjs'

export default function Month() {
  const dailyIdx = getCurrentdailyIndex()
  const weeks = ['일', '월', '화', '수', '목', '금', '토']

  return (
    <div
      className={`
      grid grid-cols-cal-w md:grid-rows-cal-h
      grid-rows-none
      truncate w-fit m-auto
      border-[1px]`}
    >
      {weeks.map((week, i) => {
        return (
          <div className={`${getDailyColor(i)} text-center bg-slate-300`} key={week}>
            {week}
          </div>
        )
      })}
      {dailyIdx.map((day, i) => {
        const trancate = i % 6 === 0 ? 'truncate' : ''
        return (
          <div
            className={`${getDailyColor(
              i
            )} ${trancate} text-clip border-[1px] relative text-[0.8rem]`}
            key={day + i}
          >
            <div className='text-end'>{day}</div>
            {i === 4 && (
              <>
                <div className='bg-red-500 absolute top-[20px] z-10 rounded-[15px] pl-2 truncate w-[400px]'>
                  준내 긴 일정입니다. 이게 daily를 덮어야합니다. 오버플로우되면 elipsis로 표시되면
                  좋겠습니다.
                </div>
                <div className='bg-red-500 absolute z-10 top-[45px] rounded-l-[15px] pl-2'>
                  준내 긴 일정입니다. 이게 daily를 덮어야합니다. 오버플로우되면 elipsis로 표시되면
                  좋겠습니다.
                </div>
                <div className='bg-red-500 absolute z-10 top-[70px] rounded-[15px]  pl-2'>
                  오버플로우되면 elipsis로 표시되면 좋겠습니다.
                </div>
              </>
            )}
          </div>
        )
      })}
    </div>
  )
}

function getCurrentdailyIndex() {
  dayjs.locale('ko')
  const date = new Date()
  const year = dayjs(date).year()
  const month = dayjs(date).month() + 1
  const lastDay = dayjs(`${year}-${month}-01`).endOf('month').date()

  const startDay = dayjs(`${year}-${month}-01`).format('ddd')

  let startDateIdx = 0
  const weeks = ['일', '월', '화', '수', '목', '금', '토']

  for (let i = 0; i < weeks.length; i++) {
    if (weeks[i] === startDay) {
      startDateIdx = i
      break
    }
  }

  const dailyIndex = Array(42)
    .fill(0)
    .map((zero, i) => {
      if (i < startDateIdx) return zero
      if (i - startDateIdx + 1 > lastDay) return zero
      return i - startDateIdx + 1
    })

  return dailyIndex
}

function getDailyColor(idx: number) {
  let color = idx % 7 === 0 ? 'text-red-600' : 'text-black'
  if (idx % 7 === 6) color = 'text-blue-600'
  return color
}
