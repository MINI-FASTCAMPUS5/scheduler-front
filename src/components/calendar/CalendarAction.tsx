import React from 'react'
import { ProviderScheduleWithPos } from '@/utils/calendar'
import ReserveForm from '@/components/calendar/ReserveForm'
import EditForm from '@/components/calendar/EditForm'
import AddForm, { ScheduleAddFormData } from '@/components/calendar/AddForm'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useCookies } from 'react-cookie'
import { addSchedule } from '@/api/schedule/user'
import dayjs from 'dayjs'
import useUser from '@/hooks/user'
import { DATE_REQEUST_FORMAT } from '@/constants'

type Props = {
  type: 'add' | 'edit' | 'reserve'
  user: 'admin' | 'fan'
  schedule: ProviderScheduleWithPos
  date: string
  onCancle: () => void
  onReserve: (message: string) => void
  onEdit: (isEdit: boolean) => void
  onSubmit: (schedule: ScheduleAddFormData) => void
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
  const [cookie] = useCookies(['AccessToken'])
  const { getUserInfo } = useUser()
  const queryClient = useQueryClient()

  const reserveMutation = useMutation({
    mutationFn: ({ adminId, selectDate }: { adminId: string; selectDate: string }) => {
      return addSchedule(adminId, selectDate, cookie.AccessToken)
    },
    onSuccess: async () => {
      const year = dayjs(date).year()
      const month = dayjs(date).month() + 1
      const { id: userId } = getUserInfo()
      queryClient.invalidateQueries(['schedule', year, month, `${userId ? userId : ''}`])
    },
    onError: (error) => {
      console.error(error)
    }
  })

  const handleReserve = (schedule: ProviderScheduleWithPos, selectDate: string) => {
    reserveMutation
      .mutateAsync({
        adminId: schedule.userId,
        selectDate: dayjs(selectDate).format(DATE_REQEUST_FORMAT)
      })
      .then((isReflected) => {
        if (isReflected) onReserve('행사가 추가되었습니다.')
        else onReserve('행사 추가에 실패했습니다.')
      })
      .catch(() => {
        onReserve('행사 추가에 실패했습니다.')
      })
  }

  const handleEdit = (
    schedule: ProviderScheduleWithPos & {
      imgFile?: File
    }
  ) => {
    console.info('HANDLE SCHEDULE', schedule)
    onEdit(true)
  }

  return (
    <>
      {type === 'add' && user == 'admin' && (
        <AddForm onCancle={onCancle} onSubmit={onSubmit} date={date} />
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
