import React, { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'

import useSchedule from '@/hooks/schedule'
import { appendSwipeAnimation, swipeCalendar } from '@/utils/calendar'
import { CALENDAR_TAG_ID, DATE_ROUTE_FORMAT } from '@/constants'

import Button from '@/components/ui/Button'
import HighlightInformation from '@/components/calendar/HighlightInformation'
import ArrowButton, { DirectionType } from '@/components/ui/ArrowButton'

export default function CalendarSwiper() {
  const location = useLocation()
  const { isFetching } = useSchedule()
  const { year, month } = useSchedule()
  const navigate = useNavigate()

  // * 이전/다음 달로 이동합니다.
  const handleArrowBtn = useCallback(
    (direction: DirectionType) => {
      //  todo 비정상적 주소 이동 어떻게 처리할지 정하기
      if (!year || !month) return alert('비정상적인 접근입니다.')

      const route = location.pathname.split(`/${year}`)[0]
      const path = swipeCalendar(direction, {
        year,
        month,
        path: route
      })
      navigate(path)
      appendSwipeAnimation(CALENDAR_TAG_ID, direction)
    },
    [navigate, year, month, location.pathname]
  )

  // * 오늘로 이동합니다.
  const navagateToCurrentDate = useCallback(() => {
    const date = new Date()
    const path = `/calendar/${dayjs(date).format(DATE_ROUTE_FORMAT)}`
    navigate(path)
  }, [navigate])

  // todo max width를 캘린더와 동일하게 맞추기
  return (
    <div className='flex items-center  justify-between mt-2 mb-14  mx-auto'>
      <div className='min-w-[33.33%] basis-[33.33%] relative'>
        <HighlightInformation />
      </div>
      <div className='flex items-center basis-[33.33%]'>
        <ArrowButton disabled={isFetching} direction='left' onClick={handleArrowBtn} />
        <h1 className='text-2xl mx-2 text-main'>
          <span className='mr-2'>
            <strong className='text-4xl'>{year}</strong>년
          </span>
          <span>
            <strong className='text-4xl'>{month}</strong>월
          </span>
        </h1>
        <ArrowButton disabled={isFetching} direction='right' onClick={handleArrowBtn} />
      </div>
      <div className='flex basis-auto'>
        <Button className='mr-2' text='오늘' onClick={navagateToCurrentDate} />
        <Button className='mr-2' text='월간' onClick={navagateToCurrentDate} />
        <Button text='연간' />
      </div>
    </div>
  )
}
