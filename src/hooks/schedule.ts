import { fetchSchedule } from '@/api/schedule'
import { ACCESS_TOKEN } from '@/constants'
import { useUser } from '@/hooks/user'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { useLocation, useParams } from 'react-router-dom'

export const useSchedule = () => {
  // * URL에서 년, 월, 일을 가져옴
  const params = useParams()
  const [year, setYear] = useState(Number(params.year) || 0)
  const [month, setMonth] = useState(Number(params.month) || 0)
  const [day, setDay] = useState(Number(params.day) || 0)

  // * URL에서 검색어를 가져옴
  const { search, pathname } = useLocation()
  const searchParams = new URLSearchParams(search)
  const [keyword, setKeyword] = useState(searchParams.get('keyword') || '')
  const [cookie] = useCookies([ACCESS_TOKEN])
  const { getUserInfo } = useUser()
  const user = getUserInfo()

  // * 관리자가 아니고 manger/event/calendar 페이지가 아닐경우 userId를 빈 문자열로 설정
  const userId = user.role === 'ADMIN' && pathname.includes('manager/event/calendar') ? user.id : ''
  const fetchScheduleOptions = {
    year,
    month,
    userId,
    keyword,
    token: cookie.AccessToken
  }
  const {
    data: schedule,
    isFetching,
    isLoading,
    isError,
    isFetched,
    isSuccess
  } = useQuery(
    ['schedule', year, month, userId, keyword],
    () => fetchSchedule(fetchScheduleOptions),
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
      throw new Error('잘못된 접근입니다.')
    }

    setYear(parseInt(params.year))
    setMonth(parseInt(params.month))
    setDay(parseInt(params.day))
    const searchParams = new URLSearchParams(location.search)
    setKeyword(searchParams.get('keyword') || '')
  }, [params, search])

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
