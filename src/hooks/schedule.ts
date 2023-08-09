import { fetchSchedule } from '@/api/schedule'
import { ACCESS_TOKEN } from '@/constants'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { useLocation, useParams } from 'react-router-dom'
import useUser from './user'
import { toast } from 'react-toastify'

export default function useSchedule() {
  const params = useParams()
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const [cookie] = useCookies([ACCESS_TOKEN])
  // ? year, month가 없는 경우 체크 필요 redirect 해야함
  const [year, setYear] = useState(params.year ? parseInt(params.year) : 0)
  const [month, setMonth] = useState(params.month ? parseInt(params.month) : 0)
  const [day, setDay] = useState(params.day ? parseInt(params.day) : 0)
  const [keyword, setKeyword] = useState(searchParams.get('keyword') || '')

  const { pathname } = useLocation()
  const { getUserInfo } = useUser()
  const user = getUserInfo()
  const userId = user.role === 'ADMIN' && pathname.includes('manager/event/calendar') ? user.id : ''

  const {
    data: schedule,
    isFetching,
    isLoading,
    isError,
    isFetched,
    isSuccess
  } = useQuery(
    ['schedule', year, month, `${userId ? userId : ''}`, `${keyword ? keyword : ''}`],
    () =>
      fetchSchedule({
        year,
        month,
        userId: `${userId ? userId : ''}`,
        keyword: `${keyword ? keyword : ''}`,
        token: cookie.AccessToken
      }),
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
      toast.error('잘못된 접근입니다.')
      return
    }

    setYear(parseInt(params.year))
    setMonth(parseInt(params.month))
    setDay(parseInt(params.day))
    const searchParams = new URLSearchParams(location.search)
    setKeyword(searchParams.get('keyword') || '')
  }, [params, location.search])

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
