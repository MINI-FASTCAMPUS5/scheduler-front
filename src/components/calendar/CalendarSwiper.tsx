import React, { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'

import useSchedule from '@/hooks/schedule'
import { appendSwipeAnimation, swipeCalendar } from '@/utils/calendar'
import { CALENDAR_TAG_ID, DATE_ROUTE_FORMAT } from '@/constants'

import Button from '@/components/ui/Button'
import HighlightInformation from '@/components/calendar/HighlightInformation'
import ArrowButton, { DirectionType } from '@/components/ui/ArrowButton'
import useUser from '@/hooks/user'
import { toast } from 'react-toastify'

export default function CalendarSwiper() {
  const { getUserInfo } = useUser()
  const user = getUserInfo()
  const location = useLocation()
  const { isFetching } = useSchedule()
  const { year, month } = useSchedule()
  const navigate = useNavigate()

  // * 이전/다음 달로 이동합니다.
  const handleArrowBtn = useCallback(
    (direction: DirectionType) => {
      if (!year || !month) return toast.error('비정상적인 접근입니다.')
      const route = location.pathname.split(`/${year}`)[0]
      const path = swipeCalendar(direction, {
        year,
        month,
        path: route
      })
      const searchParams = new URLSearchParams(location.search)
      navigate(
        `${path}${searchParams.get('keyword') ? `?keyword=${searchParams.get('keyword')}` : ''}`
      )
      appendSwipeAnimation(CALENDAR_TAG_ID, direction)
    },
    [navigate, year, month, location.pathname, location.search]
  )

  // * 오늘로 이동합니다.
  const navagateToCurrentDate = useCallback(() => {
    const date = new Date()
    const path = `/calendar/${dayjs(date).format(DATE_ROUTE_FORMAT)}`
    navigate(path)
  }, [navigate])

  // todo max width를 캘린더와 동일하게 맞추기
  return (
    <div className='flex items-center justify-center w-full max-w-[1420px] mt-2 mb-4 mx-auto'>
      <div className='w-[33.33%] flex-wrap'>{user.role === 'USER' && <HighlightInformation />}</div>
      <div className='flex flex-1 justify-center'>
        <ArrowButton disabled={isFetching} direction='left' onClick={handleArrowBtn} />
        <h1 className='text-2xl mx-2 text-main whitespace-nowrap'>
          <span className='mr-2'>
            <strong className='text-4xl'>{year}</strong>년
          </span>
          <span>
            <strong className='text-4xl'>{month}</strong>월
          </span>
        </h1>
        <ArrowButton disabled={isFetching} direction='right' onClick={handleArrowBtn} />
        <Button
          className='mt-auto  min-w-[50px] ml-8'
          size='sm'
          text='오늘'
          onClick={navagateToCurrentDate}
        />
      </div>
      <div className='flex w-[33.33%] justify-end'>
        {/* <Button className='mr-2' text='월간' onClick={navagateToCurrentDate} /> */}
        {/* <Button text='연간' /> */}
      </div>
    </div>
  )
}
