import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ProviderScheduleWithPos } from '@/utils/calendar'
import ReserveForm from '@/components/calendar/ReserveForm'
import EditForm from '@/components/calendar/EditForm'
import AddForm, { ScheduleAddFormData } from '@/components/calendar/AddForm'

type Props = {
  type: 'add' | 'edit' | 'reserve'
  user: 'admin' | 'fan'
  schedule?: ProviderScheduleWithPos
  date: string
  onCancle: () => void
  onReserve: (schedule: ProviderScheduleWithPos, selectedDate: string) => void
  onEdit: (schedule: ProviderScheduleWithPos) => void
  onSubmit: (schedule: ScheduleAddFormData) => void
}
export default function CalendarAction({
  type,
  user,
  schedule,
  date,
  onCancle,
  onReserve,
  onEdit,
  onSubmit
}: Props) {
  const nativate = useNavigate()
  if (type === 'reserve' || type === 'edit') {
    if (!schedule) {
      alert('잘못된 접근입니다.')
      // todo :  navigate to main
      nativate('/')
      return
    }
  }

  return (
    <>
      {type === 'add' && user == 'admin' && (
        <AddForm onCancle={onCancle} onSubmit={onSubmit} date={date} />
      )}
      {type === 'edit' && user == 'admin' && (
        <EditForm onCancle={onCancle} onEdit={onEdit} schedule={schedule!} />
      )}
      {type === 'reserve' && (
        <ReserveForm onCancle={onCancle} onReserve={onReserve} schedule={schedule!} user={user} />
      )}
    </>
  )
}
