import api from '@/api'

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
    return true
  } catch (err) {
    console.error(err)
    return false
  }
}
