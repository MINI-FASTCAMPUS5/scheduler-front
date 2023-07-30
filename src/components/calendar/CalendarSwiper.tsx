import React, { useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ArrowButton, { DirectionType } from '@/components/ui/ArrowButton'
import useSchedule from '@/hooks/schedule'
import { appendSwipeAnimation, swipeCalendar } from '@/utils/calendar'
import { CALENDAR_TAG_ID } from '@/constants'
import Button from '../ui/Button'

export default function CalendarSwiper() {
  const { isFetching } = useSchedule()
  const params = useParams()
  const { year, month } = params
  const navigate = useNavigate()

  // * 이전/다음 달로 이동합니다.
  const handleArrowBtn = useCallback(
    (direction: DirectionType) => {
      //  todo 비정상적 주소 이동 어떻게 처리할지 정하기
      if (!year || !month) return alert('비정상적인 접근입니다.')
      const path = swipeCalendar(direction, year, month)
      navigate(path)
      appendSwipeAnimation(CALENDAR_TAG_ID, direction)
    },
    [navigate, year, month]
  )

  // todo max width를 캘린더와 동일하게 맞추기
  return (
    <div className='flex items-center justify-between mt-2 mb-14'>
      <div className='flex items-center'>
        <ArrowButton disabled={isFetching} direction='left' onClick={handleArrowBtn} />
        <h1 className='text-2xl mx-2'>{`${year}년 ${month}월`}</h1>
        <ArrowButton disabled={isFetching} direction='right' onClick={handleArrowBtn} />
      </div>
      <div className='flex'>
        <Button className='mr-2' text='오늘' />
        <Button className='mr-2' text='월간' />
        <Button text='연간' />
      </div>
    </div>
  )
}
