import { ProviderScheduleWithPos } from '@/utils/calendar'
import React from 'react'
import ReserveForm from './ReserveForm'
import { useNavigate } from 'react-router-dom'

type Props = {
  type: 'add' | 'edit' | 'reserve'
  schedule?: ProviderScheduleWithPos
}
export default function CalendarAction({ type, schedule }: Props) {
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
    <div>
      {type === 'add' && <div>add</div>}
      {type === 'edit' && <div>edit</div>}
      {type === 'reserve' && <ReserveForm schedule={schedule!} />}
    </div>
  )
}
