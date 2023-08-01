import { ProviderScheduleWithPos } from '@/utils/calendar'
import React from 'react'

type Props = {
  schedule: ProviderScheduleWithPos
}
export default function ReserveForm({ schedule }: Props) {
  return <div>reserve form 입니당 {schedule.fullName}</div>
}
