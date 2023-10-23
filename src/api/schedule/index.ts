import api from '@/api'
import { DATE_FORMAT } from '@/constants'
import { ProviderReservedList, ProviderSchedule, Schedule } from '@/models/schedule'
import { delay } from '@/utils'
import dayjs from 'dayjs'

interface ScheduleRequestOption {
  year: number
  month: number
  token: string
  userId?: string
  keyword?: string
}
// HACK : 템플릿 엔진기준으로 API가 만들어져서, 프론트에서 필요한 데이터만 추출해서 사용하도록 응답을 수정했습니다.
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
    // * 최소 1초의 딜레이로 애니메이션을 보여줌
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
          id: schedule.id, // * post id PK가 안와서 임시로 만듬
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

export const addSchedule = async (adminId: string, selectDate: string, cookie: string) => {
  const res = await api({
    url: `/user/schedule/create?schedulerAdminId=${adminId}`,
    method: 'POST',
    headers: {
      Authorization: cookie
    },
    data: {
      scheduleStart: selectDate
    }
  })
  if (res.data.status === 200) {
    return {
      message: '일정이 추가되었습니다.',
      status: 200
    }
  }
  return {
    message: res.data.message ?? '일정 추가에 실패했습니다.',
    status: res.data.status ?? 404
  }
}

export const editSchedule = async (id: string, formData: FormData, token: string) => {
  const res = await api(`/admin/schedule/updat/${id}`, {
    method: 'POST',
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: token
    }
  })
  if (res.data.status === 200) {
    return {
      message: '수정이 완료되었습니다.',
      status: 200
    }
  }
  return {
    message: res.data.message ?? '수정에 실패했습니다.',
    status: res.data.status ?? 404
  }
}
