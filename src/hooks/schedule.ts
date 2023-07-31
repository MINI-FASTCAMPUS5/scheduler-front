import { DATE_FORMAT } from '@/constants'
import { SCHEDULE_7_MONTH, SCHEDULE_8_MONTH } from '@/mocks/schedule'
import { ProviderSchedule } from '@/models/schedule'
import { delay } from '@/utils'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function useSchedule() {
  const params = useParams()
  const [schedule, setSchedule] = useState<ProviderSchedule[]>([])
  const [isFetching, setIsFetching] = useState(true)
  // ? year, month가 없는 경우 체크 필요 redirect 해야함
  const [year, setYear] = useState(params.year ? parseInt(params.year) : 0)
  const [month, setMonth] = useState(params.month ? parseInt(params.month) : 0)
  const [day, setDay] = useState(params.day ? parseInt(params.day) : 0)

  useEffect(() => {
    // ? year, month가 없는 경우 체크 필요 redirect 해야함
    if (!month || !year) return
    setIsFetching(true)
    // * API 호출 로직, API가 완성되면 로직이 크게 변경됩니다.
    let scheduleData = SCHEDULE_7_MONTH
    if (month === 8) scheduleData = SCHEDULE_8_MONTH
    if (month === 6) scheduleData = []
    if (month === 9) scheduleData = []

    scheduleData.map((s) => {
      return {
        ...s,
        startDate: dayjs(s.startDate).format(DATE_FORMAT),
        endDate: dayjs(s.endDate).format(DATE_FORMAT)
      }
    })
    delay<ProviderSchedule[]>(scheduleData, 2000).then((res) => {
      setSchedule(res)
      setIsFetching(false)
    })
  }, [year, month])

  useEffect(() => {
    if (
      typeof params.year === 'undefined' ||
      typeof params.month === 'undefined' ||
      typeof params.day === 'undefined'
    ) {
      return alert('잘못된 접근입니다.')
    }
    setYear(parseInt(params.year))
    setMonth(parseInt(params.month))
    setDay(parseInt(params.day))
  }, [params.year, params.month, params.day])

  return { schedule, isFetching, year, month, day, setYear, setMonth, setDay }
}
