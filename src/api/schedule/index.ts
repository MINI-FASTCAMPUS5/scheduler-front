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
}

export const fetchSchedule = async ({
  year,
  month,
  userId,
  token
}: ScheduleRequestOption): Promise<{
  schedule: ProviderSchedule[]
  reservedList: ProviderReservedList[]
}> => {
  try {
    // * 최소 1초의 딜레이로 에니메이션을 보여줌
    const start = new Date()
    const res: { data: Schedule } = await api.get(`/user/schedule?year=${year}&month=${month}`, {
      headers: {
        Authorization: token
      }
    })
    const schedule = res.data.schedulerAdmin
      .map((s) => {
        return {
          id: s.user.id + s.createdAt, // post id PK가 안와서 임시로 만듬
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

    const reservedList = res.data.schedulerUser.map((s) => {
      const reservedDate = dayjs(s.scheduleStart).format(DATE_FORMAT)
      return {
        id: s.scheduleStart + s.createdAt,
        userID: s.user.id,
        profileImage: s.user.profileImage,
        fullName: s.user.fullName,
        role: s.user.role,
        sizeOfTicket: s.user.sizeOfTicket,
        reservedDate,
        progress: s.progress,
        title: s.schedulerAdmin.title // 고유 ID가 없어서 title로 schedule을 매칭합니다..
      }
    })

    const end = new Date()
    // * userId로 필터링 된 해당 년 월의 스케줄 정보
    await delay({}, 1000 - (end.getTime() - start.getTime()))
    if (userId)
      return {
        schedule: schedule.filter((s) => s.userId === userId),
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
