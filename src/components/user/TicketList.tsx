import { TicketListResponse } from '@/api/user/mypage'
import { TicketListItem } from './TicketListItem'

interface TicketListProps {
  data: TicketListResponse
}
export function TicketList({ data }: TicketListProps) {
  return (
    <ul>
      {data.schedulerRoleUserList?.map((schedule) => (
        <TicketListItem key={schedule.scheduleStart} data={schedule} />
      ))}
    </ul>
  )
}
