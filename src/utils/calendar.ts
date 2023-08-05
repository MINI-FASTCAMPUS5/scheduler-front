import type { DirectionType } from '@/components/ui/ArrowButton'
import { DATE_FORMAT, DATE_ROUTE_FORMAT } from '@/constants'
import type { ProviderSchedule } from '@/models/schedule'
import dayjs from 'dayjs'

/**
 * @description 캘린더의 이동 방향과(차월, 익월) 현재 날짜를 받아서 다음 켈린더 URL을 반환
 * */
export function swipeCalendar(
  direction: DirectionType,
  p: { year: number; month: number; today?: string; path: string }
) {
  const { month, year, today, path } = p
  // * 현재 day를 계산
  const date = new Date()
  const currentMonth = month + (direction === 'left' ? -1 : 1)
  const day = date.getMonth() + 1 === currentMonth ? date.getDate() : 1
  if (direction === 'left') {
    const prevDate = dayjs(`${year}/${month}/${today ? today : day}`).subtract(1, 'month')
    return `${path}/${dayjs(prevDate).format(DATE_ROUTE_FORMAT)}`
  }
  if (direction === 'right') {
    return `${path}/${dayjs(dayjs(`${year}/${currentMonth}/${today ? today : day}`)).format(
      DATE_ROUTE_FORMAT
    )}`
  }
  alert('잘못된 접근입니다.')
  //  todo 비정상적 주소 이동 어떻게 처리할지 정하기
  return `${path}/${year}/${month}/1`
}

/**
 * @description 켈린더의 이동방향에 맞게 애니메이션을 추가
 */
export function appendSwipeAnimation(id: string, direction: DirectionType) {
  if (typeof window === 'undefined') return
  const calendar = document.getElementById(id)
  calendar?.classList.remove('move-from-left')
  calendar?.classList.remove('move-from-right')
  if (direction === 'left') setTimeout(() => calendar?.classList.add('move-from-left'))
  if (direction === 'right') setTimeout(() => calendar?.classList.add('move-from-right'))
}

// * 임의의 3가지 색, 색깔이 정해지면 수정해야합니다.
export function getDailyColor(idx: number) {
  let color = idx % 7 === 0 ? 'text-main font-bold' : 'text-main font-bold'
  if (idx % 7 === 6) color = 'text-main font-bold'
  return color
}

export type SchedulePosition = 'start' | 'between' | 'end' | 'start-end'
export type ProviderScheduleWithPos = ProviderSchedule & { pos: SchedulePosition; restItem: number }

/**
 * @description schedule들을 받아서 가공합니다. ProviderScheduleWithPos[] 형태로 반환합니다.
 */
export function getProviderSchdule(
  schedule: ProviderSchedule[] | undefined,
  date: string
): ProviderScheduleWithPos[] {
  if (typeof schedule === 'undefined') return []
  const filtetedSchedule = schedule.filter((s) => s.startDate <= date && s.endDate >= date)
  const prevSchedule = schedule.filter(
    (s) =>
      s.startDate <= dayjs(date).subtract(1, 'day').format(DATE_FORMAT) &&
      s.endDate >= dayjs(date).subtract(1, 'day').format(DATE_FORMAT)
  )

  const restItem = filtetedSchedule.length > 2 ? filtetedSchedule.length - 2 : 0

  const providerSchedule: ProviderScheduleWithPos[] = Array(100).fill(null)
  filtetedSchedule
    .map((s) => {
      // * position 속성 추가 설정
      let pos: SchedulePosition = 'between'
      if (s.startDate === date) pos = 'start'
      if (s.endDate === date) pos = 'end'

      if (dayjs(date).format('ddd') === '일') {
        if (s.startDate <= date && s.endDate >= date) pos = 'start'
        if (s.endDate === date && s.startDate !== date) pos = 'start-end'
      }
      if (s.startDate === date && s.endDate === date) pos = 'start-end'
      return { ...s, pos, restItem }
    })
    .forEach((s, i) => {
      // * 하루 전 스케줄과 오늘 스케줄을 비교해서 적절한 인덱스에 스케줄을 넣는다.
      const pi = prevSchedule.findIndex((ps) => ps.id === s.id)
      if (pi !== -1) {
        if (pi == 2 && providerSchedule[i] === null) {
          providerSchedule[pi] = { ...s, pos: 'start' }
        } else {
          providerSchedule[pi] = { ...s }
        }
      } else {
        for (let j = 0; j < providerSchedule.length; j++) {
          if (providerSchedule[j] === null) {
            providerSchedule[j] = { ...s }
            break
          }
        }
      }
    })

  return providerSchedule.filter((s) => s !== null)
}
