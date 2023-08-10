import api from '@/api'
import { AxiosError } from 'axios'

export const addSchedule = async (adminId: string, selectDate: string, cookie: string) => {
  try {
    await api({
      url: `/user/schedule/create?schedulerAdminId=${adminId}`,
      method: 'POST',
      headers: {
        Authorization: cookie
      },
      data: {
        scheduleStart: selectDate
      }
    })
    return {
      message: '일정이 추가되었습니다.',
      status: 200
    }
  } catch (err) {
    console.error(err)

    return {
      message: (err as AxiosError<{ data: string }>).response?.data?.data,
      status: (err as AxiosError<{ data: string }>).response?.status
    }
  }
}
