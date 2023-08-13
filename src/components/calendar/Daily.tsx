import React, { useState, useEffect, useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import dayjs from 'dayjs'
import useSchedule from '@/hooks/schedule'
import useResize from '@/hooks/resize'
import useUser from '@/hooks/user'
import useHover from '@/hooks/hover'
import { ProviderScheduleWithPos, getProviderSchdule } from '@/utils/calendar'
import DailySchedule from '@/components/calendar/DailySchedule'
import MoreButton from '@/components/calendar/MoreButton'
import CalendarModal from '@/components/calendar/CalendarModal'
import DailyDetail from '@/components/calendar/DailyDetail'
import ModalPortal from '@/components/ui/ModalPortal'
import CalendarAction from '@/components/calendar/CalendarAction'
import { DATE_FORMAT } from '@/constants'
import weekday from 'dayjs/plugin/weekday'
dayjs.extend(weekday)

type Props = {
  daily: string[]
  limit: number
}
export default function Daily({ daily, limit }: Props) {
  const { getUserInfo } = useUser()
  const user = getUserInfo()
  const [isAdmin] = useState(user.role === 'ADMIN' ? true : false)
  const { pathname } = useLocation()
  // * 모달 관련 속성
  const [openPortal, setOpenPortal] = useState(false)
  const [portalType, setPortalType] = useState<'edit' | 'reserve' | 'add'>('reserve')
  const [openMoreModal, setOpenMoreModal] = useState(false)
  const [targetSchedule, setTargetSchedule] = useState({} as ProviderScheduleWithPos)
  const [targetDate, setTargetDate] = useState('')
  // * 스타일링 관련 속성
  const { width, resize, setWidth } = useResize('.cell')

  // * 행사 등록/수정 페이지 + 어드민일 경우 자신이 등록한 스케줄만 가져옵니다.
  const adminId = isAdmin && pathname.includes('manager/event/calendar') ? user.id : ''
  const { month, adminSchedule, reservedList, isFetching } = useSchedule()
  // * 어드민이고 매니저 페이지일 경우 마우스 호버 이벤트를 추가합니다.
  useHover(adminId && adminSchedule?.length !== 0 ? true : false)

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
      setOpenMoreModal(false)
      setTargetSchedule(schedule)
      setPortalType(() => {
        if (pathname.includes('manager/event/calendar') && user.id === schedule.userId) {
          return 'edit'
        }
        return 'reserve'
      })
      setOpenPortal(true)
    },
    [pathname, user.id]
  )

  // * 더보기 모달창을 닫습니다.
  const setCloseMoreModal = useCallback(() => {
    setOpenMoreModal(false)
    setTargetDate('')
  }, [])

  // * 모달창을 닫습니다.
  const setClosePortal = useCallback(() => {
    setOpenPortal(false)
  }, [])

  // todo handleEdit, handleReserve, handleSubmitSchedule 함수를 하나로 합칠 수 있을 것 같습니다.
  // todo toast는 모달 내부에서 처리하도록 하기
  // * 수정 모달에서 수정 버튼을 누르면 실행됩니다.
  const handleEdit = () => {
    setOpenPortal(false)
  }

  const handleReserve = () => {
    setOpenPortal(false)
  }

  // * 공연 추가 모달에서 새로운 공연을 추가하면 실행됩니다.
  const handleSubmitSchedule = () => {
    setOpenPortal(false)
  }

  const handleOnClickCell = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, date: string) => {
    if (!pathname.includes('manager/event/calendar') || !isAdmin) return
    if ((e.target as HTMLElement).classList.contains('moreBtn')) return
    // * 클릭한 부분이 cell의 스케줄 부분이라면 공연 수정, cell이라면 return합니다. (handleSchedule에서 처리)
    if ((e.target as HTMLElement).classList.contains('schedule-cell')) return
    setPortalType('add')
    setTargetDate(date)
    setOpenPortal(true)
  }

  // * 스케줄이 변경되면 width를 다시 계산합니다.
  useEffect(() => {
    setWidth(() => 20)
    // prettier-ignore
    if (!isFetching) {setTimeout(() => { resize()}, 100) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching])

  const reserveStyle = {
    WAITING: {
      from: 'from-wait',
      bg: 'bg-wait'
    },
    ACCEPT: {
      from: 'from-confirm',
      bg: 'bg-confirm'
    },
    REFUSE: {
      from: 'from-point',
      bg: 'bg-point'
    }
  }

  type Visited = string[][]
  // todo limit은 외부에서 받기

  let visited: Visited = Array(7)
    .fill(null)
    .map(() => Array(limit).fill(null))

  // current weeks of month
  const getWeeksNumber = (dateFrom: Date) => {
    const currentDate = dateFrom.getDate()
    const startOfMonth = new Date(dateFrom.setDate(1))
    const weekDay = startOfMonth.getDay()
    return Math.floor((weekDay - 1 + currentDate) / 7) + 1
  }

  let week = 1
  const hoverEvent = adminId ? 'hover:bg-[#6344ff2a] hover:cursor-pointer' : ''
  return (
    <>
      {daily?.map((date, i) => {
        const disable = dayjs(date).month() + 1 !== Number(month) ? true : false
        const providerSchedule = getProviderSchdule(adminSchedule, date)
        const reservedSchedule = reservedList?.filter((r) => r.reservedDate === date)
        const isToday = today === dayjs(date).format(DATE_FORMAT)
        let textColor = isToday ? 'text-point' : 'text-main'
        if (disable) textColor += ' opacity-20'

        const currentWeek = getWeeksNumber(new Date(date))
        // 주 가 바뀌면 visited 초기화
        if (week !== currentWeek) {
          visited = visited.map(() => Array(limit).fill(null))
        }
        week = currentWeek
        const currentDay = new Date(date).getDay()
        providerSchedule?.forEach((s) => {
          // * 빈 공간이 없다면 return
          if (visited[currentDay].indexOf(null!) === -1) {
            return
          }
          // * 일치하는 스케줄이 이미 존재한다면 return
          if (visited[currentDay].find((v) => v === s.id)) {
            return
          }

          // * 빈 공간이 있다면 채워넣기
          const startDate =
            s.startDate < dayjs(date).weekday(0).format(DATE_FORMAT)
              ? dayjs(date).weekday(0).format(DATE_FORMAT)
              : s.startDate
          const cells = dayjs(s.endDate).diff(dayjs(startDate), 'day') + 1
          Array(cells)
            .fill(s.id)
            .map((v, i) => {
              if (currentDay + i > 6) return
              if (visited[currentDay].indexOf(v) !== -1) {
                visited[currentDay + i][visited[currentDay].indexOf(v)] = v
              } else {
                visited[currentDay + i][visited[currentDay + i].indexOf(null!)] = v
              }
            })
        })

        providerSchedule?.sort(
          (a, b) => visited[currentDay].indexOf(a.id) - visited[currentDay].indexOf(b.id)
        )

        return (
          <div
            key={`daily-${date}-${i}`}
            className={`cell min-h-[100px] md:min-h-[120px] font-gmarket
            ${getBgStyle(date)} transition-all ease-in-out duration-150 ${hoverEvent}`}
            onClick={(e) => handleOnClickCell(e, date)}
          >
            {/* <div className='h-full hover:bg-[rgba(0,0,0,0.1)] transition-all ease-in-out duration-150' /> */}
            <div id={`monthly-${date}`} className={`h-full relative ${textColor}`}>
              <span className='pl-2 font-bold'>
                {dayjs(date).date() / 10 < 1 ? '0' + dayjs(date).date() : dayjs(date).date()}{' '}
              </span>
              {providerSchedule?.map((s, j) => {
                if (disable || j > 1) return null
                return (
                  <DailySchedule
                    key={s.id + s.title + j}
                    schedule={s}
                    reservedList={reservedList}
                    cellWidth={width}
                    date={date}
                    onClickSchedule={handleSchedule}
                  />
                )
              })}
              {reservedSchedule?.map((r, i) => {
                r.progress === 'REFUSE'
                return (
                  <>
                    <div
                      key={`reserved-${r.reservedDate + i}`}
                      className={`absolute top-0 w-full h-full bg-gradient-to-t 
                    ${reserveStyle[r.progress].from} opacity-40 to-transparent z-[0]`}
                    />
                    <div
                      className={`absolute right-2 top-2 w-[10px] h-[10px] rounded-full
                  ${reserveStyle[r.progress].bg} opacity-100 custom-ping`}
                    />
                  </>
                )
              })}
              {providerSchedule.length > 2 && (
                <div key={`morebtn-${date}-${i}`} className='absolute'>
                  <MoreButton
                    date={date}
                    restItem={providerSchedule[0].restItem}
                    onClick={handleViewMore}
                  />
                </div>
              )}
            </div>
          </div>
        )
      })}
      {openMoreModal && (
        <CalendarModal onClose={setCloseMoreModal}>
          <DailyDetail date={targetDate} onClick={handleSchedule} />
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
              onEdit={handleEdit}
              onReserve={handleReserve}
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
