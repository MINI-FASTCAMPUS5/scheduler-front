import React from 'react'
import TicketListItem from './TicketListItem'
import { TicketListResponse } from '@/api/user/mypage'

type Props = {
  data: TicketListResponse
}
export default function TicketList({ data }: Props) {
  return (
    <ul>
      {data.schedulerRoleUserList?.map((schedule) => (
        <TicketListItem key={schedule.scheduleStart} data={schedule} />
      ))}
    </ul>
  )
}
