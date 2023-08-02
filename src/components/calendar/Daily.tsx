import React, { useState, useEffect, useCallback } from 'react'
import dayjs from 'dayjs'
import useSchedule from '@/hooks/schedule'
import useResize from '@/hooks/resize'
import { ProviderScheduleWithPos, getProviderSchdule } from '@/utils/calendar'
import DailySchedule from '@/components/calendar/DailySchedule'
import MoreButton from './MoreButton'
import CalendarModal from './CalendarModal'
import DailyDetail from './DailyDetail'
import ModalPortal from '../ui/ModalPortal'
import CalendarAction from './CalendarAction'
import { DATE_FORMAT } from '@/constants'

type Props = {
  daily: string[]
}
export default function Daily({ daily }: Props) {
  const [openPortal, setOpenPortal] = useState(false)
  const [targetSchedule, setTargetSchedule] = useState({} as ProviderScheduleWithPos)
  const [openMoreModal, setOpenMoreModal] = useState(false)
  const [targetDate, setTargetDate] = useState('')

  const { width, resize, setWidth } = useResize('.ceil')
  const { month, schedule, isFetching } = useSchedule()

  const today = dayjs(new Date()).format(DATE_FORMAT)

  const handleViewMore = useCallback((date: string) => {
    if (!document.getElementById(`monthly-${date}`)) return
    setTargetDate(date)
    setOpenMoreModal(true)
  }, [])

  const handleSchedule = useCallback((schedule: ProviderScheduleWithPos) => {
    setTargetSchedule(schedule)
    setOpenPortal(true)
  }, [])

  const handleReserve = (schedule: ProviderScheduleWithPos, selectedDate: string) => {
    alert(`${schedule.title} 공연을 ${selectedDate}에 예약 하셨습니다.`)
    setOpenPortal(false)
  }

  const setCloseMoreModal = useCallback(() => {
    setOpenMoreModal(false)
    setTargetDate('')
  }, [])

  const setClosePortal = useCallback(() => {
    setOpenPortal(false)
  }, [])

  useEffect(() => {
    setWidth(() => 0)
    // prettier-ignore
    if (!isFetching) setTimeout(() => { resize()}, 100)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching])

  return (
    <>
      {daily?.map((date) => {
        const disable = dayjs(date).month() + 1 !== Number(month) ? true : false
        const providerSchedule = getProviderSchdule(schedule, date)

        let textColor = today === dayjs(date).format(DATE_FORMAT) ? 'text-point' : 'text-main'
        if (disable) textColor += ' opacity-20'
        return (
          <div key={'daily' + date} className={`ceil ${getBgStyle(date)}`}>
            <div id={`monthly-${date}`} />
            <div className={`relative ${textColor}`}>
              <div className={'pl-2 font-bold'}>
                {dayjs(date).date() / 10 < 1 ? '0' + dayjs(date).date() : dayjs(date).date()}
              </div>
              {providerSchedule?.map((s, i) => {
                if (disable || i > 1) return null
                return (
                  <DailySchedule
                    key={s.id}
                    schedule={s}
                    ceilWidth={width}
                    date={date}
                    onClickSchedule={handleSchedule}
                  />
                )
              })}
              {providerSchedule.length > 2 && (
                <MoreButton
                  date={date}
                  restItem={providerSchedule[0].restItem}
                  onClick={handleViewMore}
                />
              )}
            </div>
          </div>
        )
      })}
      {openMoreModal && (
        <CalendarModal onClose={setCloseMoreModal}>
          <DailyDetail date={targetDate} />
        </CalendarModal>
      )}
      {openPortal && (
        <ModalPortal>
          <CalendarModal onClose={setClosePortal}>
            <CalendarAction
              type='reserve'
              schedule={targetSchedule}
              onCancle={setClosePortal}
              onReserve={handleReserve}
            />
          </CalendarModal>
        </ModalPortal>
      )}
    </>
  )
}

function getBgStyle(date: string) {
  let bgStyle = 'bg-blue-50'
  if (dayjs(date).format('ddd') === '일' || dayjs(date).format('ddd') === '토') {
    bgStyle = 'bg-blue-100'
  }
  return bgStyle
}
