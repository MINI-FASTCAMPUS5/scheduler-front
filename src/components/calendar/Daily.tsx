import { CalendarAction } from '@/components/calendar/CalendarAction'
import { CalendarModal } from '@/components/calendar/CalendarModal'
import { DailyDetail } from '@/components/calendar/DailyDetail'
import { DailySchedule } from '@/components/calendar/DailySchedule'
import { MoreButton } from '@/components/calendar/MoreButton'
import { ModalPortal } from '@/components/ui/ModalPortal'
import { DATE_FORMAT } from '@/constants'
import { useHover } from '@/hooks/hover'
import { useResize } from '@/hooks/resize'
import { useSchedule } from '@/hooks/schedule'
import { useUser } from '@/hooks/user'
import { ProviderScheduleWithPos, getProviderSchdule } from '@/utils/calendar'
import dayjs from 'dayjs'
import weekday from 'dayjs/plugin/weekday'
import { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ReservedCellCover } from './ReservedCellCover'
dayjs.extend(weekday)

interface DailyProps {
  daily: string[]
  limit: number
}
export function Daily({ daily, limit }: DailyProps) {
  const { getUserInfo } = useUser()
  const user = getUserInfo()
  const { month, adminSchedule, reservedList, isFetching } = useSchedule()
  const { pathname } = useLocation()
  // * 모달 관련 속성
  const [portalType, setPortalType] = useState<DaillyCalendarPortalType>('RESERVE')
  const [openCalendarActionModal, setOpenCalendarActionModal] = useState(false)
  const [openDailyDetailModal, setOpenDailyDetailModal] = useState(false)
  const [targetSchedule, setTargetSchedule] = useState({} as ProviderScheduleWithPos)
  const [targetDate, setTargetDate] = useState('')
  // * 스타일링 관련 속성
  const { width, resize, setWidth } = useResize('.cell')
  const [isAdmin] = useState(user.role === 'ADMIN' ? true : false)

  // * 행사 등록/수정 페이지 + 어드민일 경우 자신이 등록한 스케줄만 가져옵니다.
  const adminId = isAdmin && pathname.includes('manager/event/calendar') ? user.id : ''
  // * 어드민이고 매니저 페이지일 경우 마우스 호버 이벤트를 추가합니다.
  useHover(adminId && adminSchedule?.length !== 0 ? true : false)

  // * 더보기 버튼 클릭시 모달창을 띄웁니다.
  const handleViewMore = useCallback((date: string) => {
    if (!document.getElementById(`monthly-${date}`)) return
    setTargetDate(date)
    setOpenDailyDetailModal(true)
  }, [])

  // * /manager 페이지라면 수정 모달을 띄우고, /calendar 페이지라면 예약 모달을 띄웁니다.
  const handleSchedule = useCallback(
    (schedule: ProviderScheduleWithPos) => {
      setOpenDailyDetailModal(false)
      setTargetSchedule(schedule)
      setPortalType(() => {
        if (pathname.includes('manager/event/calendar') && user.id === schedule.userId) {
          return 'EDIT'
        }
        return 'RESERVE'
      })
      setOpenCalendarActionModal(true)
    },
    [pathname, user.id]
  )

  // * 더보기 모달창을 닫습니다.
  const setCloseDailyDetailModal = useCallback(() => {
    setOpenDailyDetailModal(false)
    setTargetDate('')
  }, [])

  const handleOnClickCell = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, date: string) => {
    if (!pathname.includes('manager/event/calendar') || !isAdmin) return
    if ((e.target as HTMLElement).classList.contains('moreBtn')) return
    // * 클릭한 부분이 cell의 스케줄 부분이라면 공연 수정, cell이라면 return합니다. (handleSchedule에서 처리)
    if ((e.target as HTMLElement).classList.contains('schedule-cell')) return
    setPortalType('ADD')
    setTargetDate(date)
    setOpenCalendarActionModal(true)
  }

  // * 스케줄이 변경되면 width를 다시 계산합니다.
  useEffect(() => {
    setWidth(0)
    // prettier-ignore
    if (!isFetching) {setTimeout(() => resize(), 0) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching])

  let cells: string[][] = Array(7)
    .fill(null)
    .map(() => Array(limit).fill(null))

  let week = 1
  return (
    <>
      {daily?.map((date, i) => {
        const disable = dayjs(date).month() + 1 !== Number(month) ? true : false
        const isToday = dayjs().format(DATE_FORMAT) === dayjs(date).format(DATE_FORMAT)

        const providerSchedule = getProviderSchdule(adminSchedule, date)
        const reservedSchedule = reservedList?.filter((r) => r.reservedDate === date)

        const curWeek = convertWeekToNumber(new Date(date))
        if (week !== curWeek) {
          cells = cells.map(() => Array(limit).fill(null))
          week = curWeek
        }
        fillSchedule(providerSchedule, cells, date, limit)

        return (
          <div
            key={`daily-${date}-${i}`}
            className={`cell min-h-[100px] md:min-h-[120px] font-gmarket
            ${getDailyCellBgStyle(date)} transition-all ease-in-out duration-150 
            ${adminId && 'hover:bg-[#6344ff2a] hover:cursor-pointer'}`}
            onClick={(e) => handleOnClickCell(e, date)}
          >
            <div
              id={`monthly-${date}`}
              className={`h-full relative 
              ${isToday ? 'text-point' : 'text-main'} 
              ${disable && ' opacity-20'}`}
            >
              <span className='pl-2 font-bold'>{getTwoDigitDate(date)}</span>
              {providerSchedule?.map((schedule, j) => {
                if (disable || j > 1) return null
                return (
                  <DailySchedule
                    key={schedule.id}
                    schedule={schedule}
                    reservedList={reservedList}
                    cellWidth={width}
                    date={date}
                    onClickSchedule={handleSchedule}
                  />
                )
              })}
              {!!reservedSchedule?.length && (
                <ReservedCellCover progress={reservedSchedule[0].progress} />
              )}
              {providerSchedule[0]?.restItem >= 1 && (
                <MoreButton
                  date={date}
                  count={providerSchedule[0].restItem}
                  onClick={handleViewMore}
                />
              )}
            </div>
          </div>
        )
      })}
      {openDailyDetailModal && (
        <ModalPortal>
          <CalendarModal onClose={setCloseDailyDetailModal}>
            <DailyDetail date={targetDate} onClick={handleSchedule} />
          </CalendarModal>
        </ModalPortal>
      )}
      {openCalendarActionModal && (
        <ModalPortal>
          <CalendarModal onClose={() => setOpenCalendarActionModal(false)}>
            <CalendarAction
              type={portalType}
              schedule={targetSchedule}
              date={targetDate}
              onCancle={() => setOpenCalendarActionModal(false)}
              onEdit={() => setOpenCalendarActionModal(false)}
              onReserve={() => setOpenCalendarActionModal(false)}
              onSubmit={() => setOpenCalendarActionModal(false)}
            />
          </CalendarModal>
        </ModalPortal>
      )}
    </>
  )
}

function fillSchedule(
  providerSchedule: ProviderScheduleWithPos[],
  cells: string[][],
  date: string,
  limit: number
) {
  const day = new Date(date).getDay()
  providerSchedule?.forEach((s) => {
    if (cells[day].indexOf(null!) === -1) return
    if (cells[day].find((v) => v === s.id)) return
    // * 빈 공간이 있다면 채워넣기
    const startDate =
      s.startDate < dayjs(date).weekday(0).format(DATE_FORMAT)
        ? dayjs(date).weekday(0).format(DATE_FORMAT)
        : s.startDate
    const scheduleRange = dayjs(s.endDate).diff(dayjs(startDate), 'day') + 1
    Array(scheduleRange)
      .fill(s.id)
      .forEach((v, i) => {
        if (day + i > 6) return
        if (cells[day].indexOf(v) !== -1) {
          cells[day + i][cells[day].indexOf(v)] = v
        } else {
          cells[day + i][cells[day + i].indexOf(null!)] = v
        }
      })
  })
  providerSchedule
    ?.sort((a, b) => cells[day].indexOf(a.id) - cells[day].indexOf(b.id))
    .splice(0, providerSchedule.length - limit)
}

function getTwoDigitDate(date: string) {
  return dayjs(date).date() / 10 < 1 ? '0' + dayjs(date).date() : dayjs(date).date()
}
function getDailyCellBgStyle(date: string) {
  let bgStyle = 'bg-blue-50'
  if (dayjs(date).format('ddd') === '일' || dayjs(date).format('ddd') === '토') {
    bgStyle = 'bg-blue-100'
  }
  return bgStyle
}

// current week of month
const convertWeekToNumber = (dateFrom: Date) => {
  const currentDate = dateFrom.getDate()
  const startOfMonth = new Date(dateFrom.setDate(1))
  const weekDay = startOfMonth.getDay()
  return Math.floor((weekDay - 1 + currentDate) / 7) + 1
}
