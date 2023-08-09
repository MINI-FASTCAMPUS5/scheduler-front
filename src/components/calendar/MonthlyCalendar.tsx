import React from 'react'
import { CALENDAR_TAG_ID } from '@/constants'
import useSchedule from '@/hooks/schedule'
import Weeks from '@/components/calendar/Weeks'
import Daily from '@/components/calendar/Daily'
import { caculateDailyIdx } from '@/utils/calendar'
import { useLocation, useNavigate } from 'react-router-dom'
import Button from '../ui/Button'

export default function MonthlyCalendar() {
  const location = useLocation()
  const navigate = useNavigate()
  const { year, month, isSuccess } = useSchedule()
  const dailyIdx = caculateDailyIdx(year, month)
  const searchParams = new URLSearchParams(location.search)
  const keyword = searchParams.get('keyword')

  return (
    <>
      {keyword && (
        <div className='pl-1 w-full max-w-[1420px] mx-auto'>
          <Button
            text={`검색 취소하기 : ${keyword}`}
            size='sm'
            onClick={() => navigate(location.pathname)}
          />
        </div>
      )}
      <div
        id={CALENDAR_TAG_ID}
        className={`grid grid-cols-cal-w gap-1 grid-rows-cal-h-13 m-auto overflow-x-hidden 
transition-all duration-100 ease-in-out rounded-xl border-[4px] border-white`}
      >
        <Weeks />
        {isSuccess ? (
          <Daily daily={dailyIdx} />
        ) : (
          dailyIdx.map((d, i) => (
            <div key={`dailyIdx-${d + i}`} className='cell min-h-[100px] md:min-h-[120px]' />
          ))
        )}
      </div>
    </>
  )
}
