import { ScheduleAddFormData } from '@/components/calendar/AddForm'
import { DATE_REQEUST_FORMAT } from '@/constants'
import dayjs from 'dayjs'
import api from '..'

export const createSchedule = async (schedule: ScheduleAddFormData, token: string) => {
  try {
    const formData = new FormData()
    formData.append('file', schedule.imageFile)
    formData.append(
      'dto',
      new Blob(
        [
          JSON.stringify({
            title: schedule.title,
            scheduleStart: dayjs(schedule.startDate).format(DATE_REQEUST_FORMAT),
            scheduleEnd: dayjs(schedule.endDate).format(DATE_REQEUST_FORMAT),
            description: schedule.description
          })
        ],
        {
          type: 'application/json'
        }
      )
    )
    await api('/admin/schedule/create', {
      method: 'POST',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: token
      }
    })
    return true
  } catch (err) {
    console.error(err)
    return false
  }
}
