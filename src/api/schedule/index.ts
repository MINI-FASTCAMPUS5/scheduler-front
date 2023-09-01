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

    const reservedList = res.data.schedulerUser.map((schedule) => {
      const reservedDate = dayjs(schedule.scheduleStart).format(DATE_FORMAT)
      return {
        id: schedule.id,
        scheduleId: schedule.schedulerAdmin.id,
        progress: schedule.progress,
        reservedDate,
        user: {
          ...schedule.user
        }
      }
    })

    const schedule = res.data.schedulerAdmin
      .map((schedule) => {
        return {
          id: schedule.id, // post id PK가 안와서 임시로 만듬
          userId: schedule.user.id,
          title: schedule.title,
          fullName: schedule.user.fullName,
          image: schedule.image,
          profileImage: schedule.user.profileImage,
          description: schedule.description,
          startDate: dayjs(schedule.scheduleStart).format(DATE_FORMAT),
          endDate: dayjs(schedule.scheduleEnd).format(DATE_FORMAT)
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
