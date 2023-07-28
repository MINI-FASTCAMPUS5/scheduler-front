import React, { useMemo } from 'react'
import 'dayjs/locale/ko'
import dayjs from 'dayjs'
import { CALENDAR_TAG_ID } from '@/constants'

export default function Month() {
  const currentDate = new Date()
  const dailyIdx = caculateDailyIdx()
  // ? constants로 뺄까?
  const weeks = useMemo(() => ['일', '월', '화', '수', '목', '금', '토'], [])

  return (
    <div className='w-full'>
      <div
        id={CALENDAR_TAG_ID}
        className={`grid grid-cols-cal-w grid-rows-cal-h-10 md:grid-rows-cal-h-13
       truncate w-fit border-[1px] m-auto
       transition-all duration-100 ease-in-out
       `}
      >
        {weeks.map((week, i) => {
          return (
            <div className={`${getDailyColor(i)} text-center bg-slate-300`} key={week}>
              {week}
            </div>
          )
        })}
        {dailyIdx.map((date, i) => {
          // const trancate = i % 6 === 0 ? 'truncate' : '' 이렇게 구현 안됨
          // todo 요거에 따라서 추가적으로 클릭 기능 등 구현해야함
          const disable = dayjs(date).month() !== dayjs(currentDate).month() ? 'text-gray-300' : ''

          // return으로 Daily Component, disable도 넘겨 줘야 함
          return (
            <div
              className={`${getDailyColor(i)} text-clip border-[1px] relative text-[0.8rem]`}
              key={`calendar-${date}-${i}`}
            >
              <div className={`${disable} text-end`}>{dayjs(date).date()}</div>
              {i === 12 && (
                <>
                  <div className='bg-red-500 text-black absolute top-[20px] z-20 rounded-[15px] pl-2 truncate w-[400px]'>
                    준내 긴 일정입니다. 이게 daily를 덮어야합니다. 오버플로우되면 elipsis로 표시되면
                    좋겠습니다.
                  </div>
                  <div className='bg-red-500 text-black absolute z-20 top-[45px] rounded-l-[15px] pl-2'>
                    준내 긴 일정입니다. 이게 daily를 덮어야합니다. 오버플로우되면 elipsis로 표시되면
                    좋겠습니다.
                  </div>
                  <div className='bg-red-500 text-black absolute z-20 top-[70px] rounded-[15px]  pl-2'>
                    오버플로우되면 elipsis로 표시되면 좋겠습니다.
                  </div>
                </>
              )}
              {i === 22 && (
                <>
                  <div className='bg-red-500 text-black absolute top-[20px] z-20 rounded-[15px] pl-2 truncate w-[400px]'>
                    준내 긴 일정입니다. 이게 daily를 덮어야합니다. 오버플로우되면 elipsis로 표시되면
                    좋겠습니다.
                  </div>
                  <div className='bg-red-500 text-black absolute z-20 top-[45px] rounded-l-[15px] truncate pl-2'>
                    준내 긴 일정입니다. 이게 daily를 덮어야합니다. 오버플로우되면 elipsis로 표시되면
                    좋겠습니다.
                  </div>
                  <div className='bg-red-500 text-black absolute z-20 top-[70px] rounded-[15px]  pl-2'>
                    오버플로우되면 elipsis로 표시되면 좋겠습니다.
                  </div>
                </>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function caculateDailyIdx() {
  // * 오늘의 년 월 일, 시작 요일(월~일) 구하기
  dayjs.locale('ko')
  const date = new Date()
  const year = dayjs(date).year()
  const month = dayjs(date).month() + 1
  const lastDay = dayjs(`${year}-${month}-01`).endOf('month').date()
  const startDay = dayjs(`${year}-${month}-01`).format('ddd')
  const weeks = ['일', '월', '화', '수', '목', '금', '토']

  // * 첫 주 중 며칠이 1일인지 구하기
  let startDateIdx = 0
  for (let i = 0; i < weeks.length; i++) {
    if (weeks[i] === startDay) {
      startDateIdx = i
      break
    }
  }

  // * 다음 달의 마지막 일 구하기 (30일 | 31일 | 28일)
  const lastDate = month === 1 ? `${year - 1}-${month - 1}` : `${year}-${month - 1}`
  const prevLastDay = dayjs(lastDate).endOf('month').date()

  // * 42칸에 맞춰서 일자를 채워 넣기 (7 * 6 달력)
  const nextDate = month === 12 ? `${year + 1}-1` : `${year}-${month + 1}`
  let nextDay = 1
  const dailyIndex = Array(42)
    .fill(0)
    .map((_, i) => {
      if (i < startDateIdx) return `${lastDate}-${prevLastDay - startDateIdx + i + 1}`
      if (i - startDateIdx + 1 > lastDay) return `${nextDate}-${nextDay++}`
      return `${year}-${month}-${i - startDateIdx + 1}`
    })
  return dailyIndex
}

// * 임의의 3가지 색, 색깔이 정해지면 수정해야합니다.
function getDailyColor(idx: number) {
  let color = idx % 7 === 0 ? 'text-red-600' : 'text-black'
  if (idx % 7 === 6) color = 'text-blue-600'
  return color
}
