import api from '@/api'

export interface SchedulerRoleUserList {
  scheduleStart: string
  title: string
  progress: ScheduleProgress
}
export interface TicketListResponse {
  getUserInfoDTO: {
    id: number
    email: string
    fullName: string
    profileImage: string
    role: UserRole
    sizeOfTicket: number
    usedTicket: number
  }
  schedulerRoleUserList: SchedulerRoleUserList[]
}

export const getMyTicketList = async (cookie: string): Promise<TicketListResponse | null> => {
  const { data } = await api({
    url: '/mypage?role=USER',
    method: 'GET',
    headers: {
      Authorization: cookie
    }
  })
  return data.data
}
