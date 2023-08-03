import React from 'react'
import dayjs from 'dayjs'
import 'dayjs/locale/ko'
import { CALENDAR_TAG_ID, DATE_FORMAT } from '@/constants'
import useSchedule from '@/hooks/schedule'
import Weeks from '@/components/calendar/Weeks'
import Daily from '@/components/calendar/Daily'

export default function MonthlyCalendar() {
  const { year, month } = useSchedule()

  // todo dayjs(date).dayjsInMonth로 달력 마지막 날 보고 인덱스 row를 6개 | 5개로 조정하기
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const dailyIdx = caculateDailyIdx(year, month)

  return (
    <div className='w-full'>
      <div
        id={CALENDAR_TAG_ID}
        className={`grid grid-cols-cal-w gap-1 grid-rows-cal-h-13
       w-fit  m-auto overflow-x-hidden
       transition-all duration-100 ease-in-out rounded-xl border-[4px] border-white
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

// * 현재 달, 이전 달, 다음 달의 날짜를 구해서 배열로 반환
function caculateDailyIdx(year: number, month: number) {
  const date = dayjs(`${year}-${month}-01`)

  // * 오늘의 년 월 일, 시작 요일(월~일) 구하기
  dayjs.locale('ko')
  const lastDay = date.endOf('month').date()
  const startDay = date.format('ddd')
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
  const prevDate = date.subtract(1, 'day').format(DATE_FORMAT)

  // * 칸에 맞춰서 일자를 채워 넣기 (7 * 6 달력으로 고정)
  const nextDate = date.add(1, 'month').format(DATE_FORMAT)

  let nextIdx = 0

  const dailyIndex = Array(weeks[startDateIdx] === '토' ? 42 : 35)
    .fill(0)
    .map((_, i) => {
      if (i < startDateIdx)
        // prettier-ignore
        return `${dayjs(prevDate).subtract(startDateIdx - i - 1, 'days').format(DATE_FORMAT)}`
      if (i - startDateIdx + 1 > lastDay)
        // prettier-ignore
        return `${dayjs(nextDate).add(nextIdx++, 'day').format(DATE_FORMAT)}`

      // * 현제 날짜
      return dayjs(`${year}-${month}-${i - startDateIdx + 1}`).format(DATE_FORMAT)
    })
  return dailyIndex
}
