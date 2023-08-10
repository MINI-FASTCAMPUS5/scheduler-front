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
import { toast } from 'react-toastify'

type Props = {
  type: 'add' | 'edit' | 'reserve'
  user: 'admin' | 'fan'
  schedule: ProviderScheduleWithPos
  date: string
  onCancle: () => void
  onReserve: (message: string) => void
  onEdit: (message: string) => void
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
  const queryClient = useQueryClient()

  // * Reserve Mutation
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
  const handleReserve = (schedule: ProviderScheduleWithPos, selectDate: string) => {
    reserveMutation
      .mutateAsync({
        adminId: schedule.id,
        selectDate: dayjs(selectDate).format(DATE_REQEUST_FORMAT)
      })
      .then((res) => {
        // * 시간 관계상 에러 처리를 깔끔하게 하지 못했습니다 ㅠㅠ
        if (!res.status || !res.message) {
          toast.error('예약 실패')
          return
        }
        if (res.status > 300) {
          toast.error(res.message)
          return
        } else if (res.status > 200) {
          toast.success(res.message)
          return
        }
        onReserve(res.message)
      })
      .catch(() => {
        // toast.error('예약 실패')
      })
  }

  // * Edit Mutation
  const editMutation = useMutation({
    mutationFn: ({ id, formData, token }: { id: string; formData: FormData; token: string }) => {
      return api(`/admin/schedule/update/${id}`, {
        method: 'POST',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: token
        }
      })
    },
    onSuccess: async () => {
      queryClient.invalidateQueries(['schedule'])
    },
    onError: (error) => {
      console.error(error)
    }
  })
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
    editMutation
      .mutateAsync({
        id: schedule.id,
        formData,
        token: cookie.AccessToken
      })
      .then(() => {
        onEdit('수정되었습니다.')
      })
      .catch(() => {
        onEdit('수정에 실패했습니다.')
      })
  }

  // * Add(Submit) Mutation
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
  const handleSubmit = (schedule: ScheduleAddFormData) => {
    addMutation
      .mutateAsync({
        schedule,
        token: cookie.AccessToken
      })
      .then((isReflected) => {
        if (isReflected) {
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
