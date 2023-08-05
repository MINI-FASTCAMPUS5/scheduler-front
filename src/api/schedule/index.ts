import api from '@/api'
import { DATE_FORMAT } from '@/constants'
import { ProviderSchedule, Schedule } from '@/models/schedule'
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
}: ScheduleRequestOption): Promise<ProviderSchedule[]> => {
  try {
    // * 최소 1초의 딜레이로 에니메이션을 보여줌
    const start = new Date()
    const res: { data: Schedule } = await api.get(`/user/schedule?year=${year}&month=${month}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    const schedule = res.data.schedulerAdmin.map((s, i) => {
      return {
        id: s.user.id + i + s.title, // post id PK가 안와서 임시로 만듬
        userId: s.user.id,
        title: s.title,
        fullName: s.user.fullName,
        profileImage: s.user.profileImage,
        startDate: dayjs(s.scheduleStart).format(DATE_FORMAT),
        endDate: dayjs(s.scheduleEnd).format(DATE_FORMAT)
      }
    })

    const end = new Date()
    // * userId로 필터링 된 해당 년 월의 스케줄 정보
    await delay({}, 1000 - (end.getTime() - start.getTime()))
    if (userId) return schedule.filter((s) => s.userId === userId)

    return schedule
  } catch (e) {
    console.error(e)
    return []
  }
}
