import React, { useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ToggleButton, { ToggleType } from '@/components/ui/ToggleButton'
import useSchedule from '@/hooks/schedule'
import { appendSwipeAnimation, swipeCalendar } from '@/utils/calendar'
import { CALENDAR_TAG_ID } from '@/constants'

export default function CalendarSwiper() {
  const { isFetching } = useSchedule()
  const params = useParams()
  const { year, month } = params
  const navigate = useNavigate()

  const handleToggleBtn = useCallback(
    (direction: ToggleType) => {
      //  todo 비정상적 주소 이동 어떻게 처리할지 정하기
      if (!year || !month) return alert('비정상적인 접근입니다.')
      const path = swipeCalendar(direction, year, month)
      navigate(path)
      appendSwipeAnimation(CALENDAR_TAG_ID, direction)
    },
    [navigate, year, month]
  )

  return (
    <div className='flex'>
      <ToggleButton disabled={isFetching} direction='left' onClick={handleToggleBtn} />
      <h1 className='text-2xl'>{`${year}년 ${month}월`}</h1>
      <ToggleButton disabled={isFetching} direction='right' onClick={handleToggleBtn} />
    </div>
  )
}
