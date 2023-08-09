import api from '@/api'
import { DATE_FORMAT } from '@/constants'
import { ProviderReservedList, ProviderSchedule, Schedule } from '@/models/schedule'
import { delay } from '@/utils'
import dayjs from 'dayjs'

type ScheduleRequestOption = {
  year: number
  month: number
  token: string
  userId?: string
  keyword?: string
}

export const fetchSchedule = async ({
  year,
  month,
  userId,
  keyword,
  token
}: ScheduleRequestOption): Promise<{
  schedule: ProviderSchedule[]
  reservedList: ProviderReservedList[]
}> => {
  try {
    // * 최소 1초의 딜레이로 에니메이션을 보여줌
    let path = '/user/schedule'
    if (keyword)
      path += `/search?year=${year}&month=${month}&keyword=${encodeURIComponent(keyword)}`
    else path += `?year=${year}&month=${month}`

    const start = new Date()

    const res: { data: Schedule } = await api.get(path, {
      headers: {
        Authorization: token
      }
    })

    const reservedList = res.data.schedulerUser.map((s) => {
      const reservedDate = dayjs(s.scheduleStart).format(DATE_FORMAT)
      return {
        id: s.id,
        scheduleId: s.schedulerAdmin.id,
        progress: s.progress,
        reservedDate,
        user: {
          ...s.user
        }
      }
    })

    const schedule = res.data.schedulerAdmin
      .filter((s) => s)
      .map((s) => {
        return {
          id: s.id, // post id PK가 안와서 임시로 만듬
          userId: s.user.id,
          title: s.title,
          fullName: s.user.fullName,
          image: s.image,
          profileImage: s.user.profileImage,
          description: s.description,
          startDate: dayjs(s.scheduleStart).format(DATE_FORMAT),
          endDate: dayjs(s.scheduleEnd).format(DATE_FORMAT)
        }
      })
      .sort((a, b) => {
        if (a.startDate === b.startDate) {
          return a.endDate > b.endDate ? -1 : 1
        }
        return a.startDate > b.startDate ? 1 : -1
      })

    const end = new Date()
    // * userId로 필터링 된 해당 년 월의 스케줄 정보
    await delay({}, 1000 - (end.getTime() - start.getTime()))
    if (userId && !keyword)
      return {
        schedule: schedule.filter((s) => s.userId == userId),
        reservedList
      }
    return {
      schedule,
      reservedList
    }
  } catch (e) {
    console.error(e)
    return {
      schedule: [],
      reservedList: []
    }
  }
}
