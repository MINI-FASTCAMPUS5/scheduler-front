import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// * 예시입니다! 이런 느낌으로 hooks를 만들어주세요
type DateParams = {
  year: string
  month: string
  day: string
}
export default async function useDateParams() {
  const params = useParams()
  const [year, setYear] = useState(params.year)
  const [month, setMonth] = useState(params.month)
  const [day, setDay] = useState(params.day)

  useEffect(() => {
    new Promise((res) =>
      setTimeout(() => {
        res({ year: '2023', month: '01', day: '31' })
      }, 1000)
    ).then((response) => {
      const r = response as DateParams
      setYear(r.year)
      setMonth(r.month)
      setDay(r.day)
    })
  }, [year, month, day])

  return { year, month, day, setYear, setMonth, setDay }
}
