import { fetchSchedule } from '@/api/schedule'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { useParams } from 'react-router-dom'

export default function useSchedule(userId?: string) {
  const params = useParams()
  const [cookie] = useCookies(['AccessToken'])
  // ? year, month가 없는 경우 체크 필요 redirect 해야함
  const [year, setYear] = useState(params.year ? parseInt(params.year) : 0)
  const [month, setMonth] = useState(params.month ? parseInt(params.month) : 0)
  const [day, setDay] = useState(params.day ? parseInt(params.day) : 0)
  const {
    data: schedule,
    isFetching,
    isLoading,
    isError,
    isFetched,
    isSuccess
  } = useQuery(
    ['schedule', year, month, `${userId ? userId : ''}`],
    () => fetchSchedule({ year, month, token: cookie.AccessToken, userId }),
    {
      enabled: !!year && !!month && !!cookie.AccessToken,
      staleTime: 1000 * 60 * 5
    }
  )

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
  }, [params])

  return {
    adminSchedule: schedule?.schedule,
    reservedList: schedule?.reservedList,
    isFetching,
    year,
    month,
    day,
    isLoading,
    isError,
    isFetched,
    isSuccess
  }
}
