import { SCHEDULE_7_MONTH, SCHEDULE_8_MONTH } from '@/mocks/schedule'
import { AdminSchedule } from '@/models/schedule'
import { delay } from '@/utils'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function useSchedule() {
  const params = useParams()
  const [schedule, setSchedule] = useState<AdminSchedule[]>([])
  const [isFetching, setIsFetching] = useState(true)
  const [year, setYear] = useState(params.year)
  const [month, setMonth] = useState(params.month)
  const [day, setDay] = useState(params.day)

  useEffect(() => {
    // ? month가 없는 경우 체크 필요
    if (!month) return
    setIsFetching(true)
    // * API 호출 로직, API가 완성되면 로직이 크게 변경됩니다.
    let scheduleData = SCHEDULE_7_MONTH
    if (month === '8') scheduleData = SCHEDULE_8_MONTH
    delay<AdminSchedule[]>(scheduleData, 2000).then((res) => {
      setSchedule(res)
      setIsFetching(false)
    })
  }, [month])

  return { schedule, isFetching, year, month, day, setYear, setMonth, setDay }
}
