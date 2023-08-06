import api from '..'

export const addSchedule = async (adminId: string, selectDate: string, cookie: string) => {
  try {
    console.info({
      url: `/user/schedule/create?schedulerAdminId=${adminId}`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${cookie}`
      },
      data: {
        scheduleStart: selectDate
      }
    })

    await api({
      url: `/user/schedule/create?schedulerAdminId=${adminId}`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${cookie}`
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
