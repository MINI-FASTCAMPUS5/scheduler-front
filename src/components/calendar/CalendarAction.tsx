import { ProviderScheduleWithPos } from '@/utils/calendar'
import React from 'react'
import ReserveForm from './ReserveForm'
import { useNavigate } from 'react-router-dom'

type Props = {
  type: 'add' | 'edit' | 'reserve'
  schedule?: ProviderScheduleWithPos
  onCancle?: () => void
  onReserve?: (schedule: ProviderScheduleWithPos, selectedDate: string) => void
}
export default function CalendarAction({ type, schedule, onCancle, onReserve }: Props) {
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
      {type === 'add' && <div>add</div>}
      {type === 'edit' && <div>edit</div>}
      {type === 'reserve' && (
        <ReserveForm
          onCancle={() => onCancle && onCancle()}
          onReserve={(...args) => onReserve && onReserve(...args)}
          schedule={schedule!}
        />
      )}
    </>
  )
}
