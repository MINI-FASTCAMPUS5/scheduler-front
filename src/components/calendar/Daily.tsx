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
import useUser from '@/hooks/user'
import { useLocation } from 'react-router-dom'
import { ScheduleAddFormData } from './AddForm'
import useHover from '@/hooks/hover'

type Props = {
  daily: string[]
}
export default function Daily({ daily }: Props) {
  const { getUserInfo } = useUser()
  const user = getUserInfo()
  const { pathname } = useLocation()
  const [openPortal, setOpenPortal] = useState(false)
  const [targetSchedule, setTargetSchedule] = useState({} as ProviderScheduleWithPos)
  const [openMoreModal, setOpenMoreModal] = useState(false)
  const [targetDate, setTargetDate] = useState('')
  const { width, resize, setWidth } = useResize('.cell')
  const [isAdmin] = useState(user.role === 'ADMIN' ? true : false)
  const [portalType, setPortalType] = useState<'edit' | 'reserve' | 'add'>('reserve')

  // * 행사 등록/수정 페이지 + 어드민일 경우 자신이 등록한 스케줄만 가져옵니다.
  const adminId = isAdmin && pathname.includes('manager/event/calendar') ? user.id : undefined
  const { month, schedule, isFetching } = useSchedule(adminId)

  // * 어드민이고 매니저 페이지일 경우 마우스 호버 이벤트를 추가합니다.
  useHover(adminId ? true : false)

  const today = dayjs(new Date()).format(DATE_FORMAT)

  // * 더보기 버튼 클릭시 모달창을 띄웁니다.
  const handleViewMore = useCallback((date: string) => {
    if (!document.getElementById(`monthly-${date}`)) return
    setTargetDate(date)
    setOpenMoreModal(true)
  }, [])

  // * /manager 페이지라면 수정 모달을 띄우고, /calendar 페이지라면 예약 모달을 띄웁니다.
  const handleSchedule = useCallback(
    (schedule: ProviderScheduleWithPos) => {
      setTargetSchedule(schedule)
      setPortalType(pathname.includes('manager/event/calendar') ? 'edit' : 'reserve')
      setOpenPortal(true)
    },
    [pathname]
  )

  // * 예약 모달에서 예약 버튼을 누르면 실행됩니다.
  const handleReserve = (schedule: ProviderScheduleWithPos, selectedDate: string) => {
    alert(`${schedule.title} 공연을 ${selectedDate}에 예약 하셨습니다.`)
    setOpenPortal(false)
  }

  // * 더보기 모달창을 닫습니다.
  const setCloseMoreModal = useCallback(() => {
    setOpenMoreModal(false)
    setTargetDate('')
  }, [])

  // * 모달창을 닫습니다.
  const setClosePortal = useCallback(() => {
    setOpenPortal(false)
  }, [])

  // * 수정 모달에서 수정 버튼을 누르면 실행됩니다.
  const handleEdit = (schedule: ProviderScheduleWithPos) => {
    alert(`${schedule.title} 공연을 ${schedule.startDate} ~ ${schedule.endDate}로 수정 하셨습니다.`)
    setOpenPortal(false)
  }

  // * 공연 추가 모달에서 새로운 공연을 추가하면 실행됩니다.
  const handleSubmitSchedule = (schedule: ScheduleAddFormData) => {
    alert(
      schedule.title +
        ' 공연을 ' +
        schedule.startDate +
        ' ~ ' +
        schedule.endDate +
        '로 등록 하셨습니다.'
    )
    setOpenPortal(false)
  }

  const handleOnClickCell = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, date: string) => {
    if (!pathname.includes('manager/event/calendar') || !isAdmin) return

    // * 클릭한 부분이 cell의 스케줄 부분이라면 공연 수정 모달을 띄웁니다.
    if ((e.target as HTMLElement).classList.contains('schedule-cell')) {
      setTargetDate(date)
      setPortalType('edit')
      setOpenPortal(true)
      return
    }
    setTargetDate(date)
    setPortalType('add')
    setOpenPortal(true)
    return
  }

  // * 스케줄이 변경되면 width를 다시 계산합니다.
  useEffect(() => {
    setWidth(() => 0)
    // prettier-ignore
    if (!isFetching) {  setTimeout(() => { resize()}, 100) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching])

  const hoverEvent = adminId ? 'hover:border-point hover:border-[1px] hover:cursor-pointer' : ''
  return (
    <>
      {daily?.map((date) => {
        const disable = dayjs(date).month() + 1 !== Number(month) ? true : false
        const providerSchedule = getProviderSchdule(schedule, date)
        let textColor = today === dayjs(date).format(DATE_FORMAT) ? 'text-point' : 'text-main'
        if (disable) textColor += ' opacity-20'
        return (
          <div
            key={'daily' + date}
            className={`cell ${getBgStyle(
              date
            )} transition-all ease-in-out duration-150 ${hoverEvent}`}
            onClick={(e) => handleOnClickCell(e, date)}
          >
            {/* <div className='h-full hover:bg-[rgba(0,0,0,0.1)] transition-all ease-in-out duration-150' /> */}
            <div id={`monthly-${date}`} className={`h-full relative ${textColor}`}>
              <span className='pl-2 font-bold'>
                {dayjs(date).date() / 10 < 1 ? '0' + dayjs(date).date() : dayjs(date).date()}
              </span>
              {providerSchedule?.map((s, i) => {
                if (disable || i > 1) return null
                return (
                  <DailySchedule
                    key={s.id}
                    schedule={s}
                    cellWidth={width}
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
              type={portalType}
              user={isAdmin ? 'admin' : 'fan'}
              schedule={targetSchedule}
              date={targetDate}
              onCancle={setClosePortal}
              onReserve={handleReserve}
              onEdit={handleEdit}
              onSubmit={handleSubmitSchedule}
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
  bgStyle
  return bgStyle
}
