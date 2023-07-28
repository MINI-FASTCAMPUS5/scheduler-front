import { ToggleType } from '@/components/ui/ToggleButton'
import { DATE_ROUTER_FORMAT } from '@/constants'
import dayjs from 'dayjs'

// * 캘린더의 이동 방향과(차월, 익월) 현재 날짜를 받아서 다음 켈린더 URL을 반환
export function swipeCalendar(direction: ToggleType, year: string, month: string, today?: string) {
  const date = new Date()
  const currentMonth = Number(month) + (direction === 'left' ? -1 : 1)
  const day = date.getMonth() + 1 === currentMonth ? date.getDate() : 1
  const nextDate = dayjs(`${year}/${month}/${today ? today : day}`)
  if (direction === 'left') {
    return `/calendar/${dayjs(nextDate.subtract(1, 'month')).format(DATE_ROUTER_FORMAT)}`
  }
  if (direction === 'right') {
    return `/calendar/${dayjs(nextDate.add(1, 'month')).format(DATE_ROUTER_FORMAT)}`
  }
  //  todo 비정상적 주소 이동 어떻게 처리할지 정하기
  return `/calendar/${year}/${month}/1`
}

export function appendSwipeAnimation(id: string, direction: ToggleType) {
  if (typeof window === 'undefined') return
  const calendar = document.getElementById(id)
  calendar?.classList.remove('move-from-left')
  calendar?.classList.remove('move-from-right')
  if (direction === 'left') setTimeout(() => calendar?.classList.add('move-from-left'))
  if (direction === 'right') setTimeout(() => calendar?.classList.add('move-from-right'))
}
