import api from '@/api'

export const addSchedule = async (adminId: string, selectDate: string, cookie: string) => {
  try {
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
    console.info(res)
    return true
  } catch (err) {
    console.error(err)
    return false
  }
}
