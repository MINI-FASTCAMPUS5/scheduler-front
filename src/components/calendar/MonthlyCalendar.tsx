import React from 'react'
import 'dayjs/locale/ko'
import dayjs from 'dayjs'
import { CALENDAR_TAG_ID } from '@/constants'
import Weeks from './Weeks'
import Daily from './Daily'
import useSchedule from '@/hooks/schedule'

export default function Month() {
  const { year, month } = useSchedule()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const dailyIdx = caculateDailyIdx(year, month)

  return (
    <div className='w-full'>
      <div
        id={CALENDAR_TAG_ID}
        className={`grid grid-cols-cal-w grid-rows-cal-h-10 md:grid-rows-cal-h-13
       truncate w-fit border-[1px] m-auto
       transition-all duration-100 ease-in-out
       `}
      >
        {/* 달력의 요일을 표기 */}
        <Weeks />
        {/* 달력의 날짜를 표기 */}
        <Daily daily={dailyIdx} />
      </div>
    </div>
  )
}

function caculateDailyIdx(year: number, month: number) {
  // * 오늘의 년 월 일, 시작 요일(월~일) 구하기
  dayjs.locale('ko')
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

  // * 칸에 맞춰서 일자를 채워 넣기 (7 * 6 달력)
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
