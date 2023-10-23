import { ScheduleAddFormData } from '@/components/calendar/AddForm'
import { ACCESS_TOKEN, DATE_REQEUST_FORMAT } from '@/constants'
import { useUser } from '@/hooks/user'
import { useAddMutation } from '@/mutates/addMutation'
import { useEditMutation } from '@/mutates/editMutation'
import { useReserveMutation } from '@/mutates/reserveMutation'
import { ProviderScheduleWithPos } from '@/utils/calendar'
import { useQueryClient } from '@tanstack/react-query'
import dayjs from 'dayjs'
import { useCookies } from 'react-cookie'
import { toast } from 'react-toastify'
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

    editMutation
      .mutateAsync({
        id: schedule.id,
        formData,
        token: cookie.AccessToken
      })
      .then(() => {
        toast.success('수정되었습니다.')
        onEdit()
      })
    // .catch(() => {
    //   toast.error('수정에 실패했습니다.')
    //   onEdit()
    // })
  }

  const handleSubmit = (schedule: ScheduleAddFormData) => {
    addMutation
      .mutateAsync({
        schedule,
        token: cookie.AccessToken
      })
      .then((isReflected) => {
        if (isReflected) toast.success('행사가 추가되었습니다.')
        else toast.error('행사 추가에 실패했습니다.')
        onSubmit()
      })
    // .catch(() => {
    //   toast.error('행사 추가에 실패했습니다.')
    //   onSubmit()
    // })
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
