import { TicketListResponse } from '@/api/user/mypage'
import TicketListItem from './TicketListItem'

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
