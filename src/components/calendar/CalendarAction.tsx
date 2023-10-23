import { ScheduleAddFormData } from '@/components/calendar/AddForm'
import { ACCESS_TOKEN, DATE_REQEUST_FORMAT } from '@/constants'
import { useUser } from '@/hooks/user'
import { useAddMutation } from '@/mutates/addMutation'
import { useEditMutation } from '@/mutates/editMutation'
import { useReserveMutation } from '@/mutates/reserveMutation'
import { to } from '@/utils'
import { ProviderScheduleWithPos } from '@/utils/calendar'
import { toast } from '@/utils/toast'
import { useQueryClient } from '@tanstack/react-query'
import dayjs from 'dayjs'
import { useCookies } from 'react-cookie'
import { CalendarFormSwitchCase } from './CalendarFormSwitchCase'

interface CalendarActionProps {
  type: DaillyCalendarPortalType
  schedule: ProviderScheduleWithPos
  date: string
  onCancle: () => void
  onReserve: () => void
  onEdit: () => void
  onSubmit: () => void
}

export function CalendarAction({
  type,
  schedule,
  onEdit,
  onCancle,
  onReserve,
  onSubmit
}: CalendarActionProps) {
  const [cookie] = useCookies([ACCESS_TOKEN])
  const queryClient = useQueryClient()

  const reserveMutation = useReserveMutation(queryClient, cookie.AccessToken)
  const editMutation = useEditMutation(queryClient)
  const addMutation = useAddMutation(queryClient)

  const { getUserInfo } = useUser()
  const { role } = getUserInfo()

  const handleReserve = (schedule: ProviderScheduleWithPos, selectDate: string) => {
    to(
      reserveMutation.mutateAsync({
        adminId: schedule.id,
        selectDate: dayjs(selectDate).format(DATE_REQEUST_FORMAT)
      })
    ).then(([error, data]) => {
      if (error?.message) toast(error.message, 'error')
      else if (data?.message) toast(data.message, 'success')
      onReserve()
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

    to(
      editMutation.mutateAsync({
        id: schedule.id,
        formData,
        token: cookie.AccessToken
      })
    ).then(([error, data]) => {
      if (error?.message) toast(error.message, 'error')
      else if (data?.message) toast(data.message, 'success')
      onEdit()
    })
  }

  const handleSubmit = (schedule: ScheduleAddFormData) => {
    to(
      addMutation.mutateAsync({
        schedule,
        token: cookie.AccessToken
      })
    ).then(([error, isRejected]) => {
      if (error?.message) toast(error.message, 'error')
      else if (isRejected) toast('일정이 추가되었습니다.', 'success')
      onSubmit()
    })
  }

  return (
    <CalendarFormSwitchCase
      role={role}
      type={type}
      schedule={schedule}
      onCancle={onCancle}
      onReserve={handleReserve}
      onSubmit={handleSubmit}
      onEdit={handleEdit}
    />
  )
}
