import React from 'react'
import { ProviderScheduleWithPos } from '@/utils/calendar'
import ReserveForm from '@/components/calendar/ReserveForm'
import EditForm from '@/components/calendar/EditForm'
import AddForm, { ScheduleAddFormData } from '@/components/calendar/AddForm'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useCookies } from 'react-cookie'
import { addSchedule } from '@/api/schedule/user'
import dayjs from 'dayjs'
// import useUser from '@/hooks/user'
import { ACCESS_TOKEN, DATE_REQEUST_FORMAT } from '@/constants'
import api from '@/api'
import { createSchedule } from '@/api/schedule/admin'

type Props = {
  type: 'add' | 'edit' | 'reserve'
  user: 'admin' | 'fan'
  schedule: ProviderScheduleWithPos
  date: string
  onCancle: () => void
  onReserve: (message: string) => void
  onEdit: (isEdit: boolean) => void
  onSubmit: (message: string) => void
}

export default function CalendarAction({
  type,
  user,
  schedule,
  date,
  onEdit,
  onCancle,
  onReserve,
  onSubmit
}: Props) {
  const [cookie] = useCookies([ACCESS_TOKEN])
  // const { getUserInfo } = useUser()
  const queryClient = useQueryClient()

  const reserveMutation = useMutation({
    mutationFn: ({ adminId, selectDate }: { adminId: string; selectDate: string }) => {
      return addSchedule(adminId, selectDate, cookie.AccessToken)
    },
    onSuccess: async () => {
      queryClient.invalidateQueries(['schedule'])
    },
    onError: (error) => {
      console.error(error)
    }
  })

  const addMutation = useMutation({
    mutationFn: ({ schedule, token }: { schedule: ScheduleAddFormData; token: string }) => {
      return createSchedule(schedule, token)
    },
    onSuccess: async () => {
      queryClient.invalidateQueries(['schedule'])
    },
    onError: (error) => {
      console.error(error)
    }
  })

  const handleReserve = (schedule: ProviderScheduleWithPos, selectDate: string) => {
    reserveMutation
      .mutateAsync({
        adminId: schedule.id,
        selectDate: dayjs(selectDate).format(DATE_REQEUST_FORMAT)
      })
      .then((isReflected) => {
        if (isReflected) {
          queryClient.invalidateQueries(['schedule'])
          onReserve('예약되었습니다.')
        } else onReserve('예약을 실패했습니다.')
      })
      .catch(() => {
        onReserve('예약을 실패했습니다.')
      })
  }

  const handleEdit = (
    schedule: ProviderScheduleWithPos & {
      imgFile?: File
    }
  ) => {
    const formData = new FormData()
    if (schedule.imgFile) formData.append('file', schedule.imgFile as Blob)
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
    api(`/admin/schedule/update/${schedule.id}`, {
      method: 'POST',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: cookie.AccessToken
      }
    })
      .then(() => {
        onEdit(true)
      })
      .catch((err) => {
        console.error(err)
        onEdit(false)
      })
  }

  const handleSubmit = (schedule: ScheduleAddFormData) => {
    addMutation
      .mutateAsync({
        schedule,
        token: cookie.AccessToken
      })
      .then((isReflected) => {
        if (isReflected) {
          queryClient.invalidateQueries(['schedule'])
          onSubmit('행사가 추가되었습니다.')
        } else onSubmit('행사 추가에 실패했습니다.')
      })
      .catch(() => {
        onSubmit('행사 추가에 실패했습니다.')
      })
  }

  return (
    <>
      {type === 'add' && user == 'admin' && (
        <AddForm onCancle={onCancle} onSubmit={handleSubmit} date={date} />
      )}
      {type === 'edit' && user == 'admin' && (
        <EditForm onCancle={onCancle} onEdit={handleEdit} schedule={schedule!} />
      )}
      {type === 'reserve' && (
        <ReserveForm
          onCancle={onCancle}
          onReserve={handleReserve}
          schedule={schedule}
          user={user}
        />
      )}
    </>
  )
}
