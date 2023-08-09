import api from '@/api'

export type SchedulerRoleUserList = {
  scheduleStart: string
  title: string
  progress: 'WAITING' | 'ACCEPT' | 'REFUSE'
}
export type TicketListResponse = {
  getUserInfoDTO: {
    id: number
    email: string
    fullName: string
    profileImage: string
    role: 'USER' | 'ADMIN'
    sizeOfTicket: number
    usedTicket: number
  }
  schedulerRoleUserList: SchedulerRoleUserList[]
}
export const getMyTicketList = async (cookie: string): Promise<TicketListResponse | null> => {
  try {
    const res = await api({
      url: '/mypage?role=USER',
      method: 'GET',
      headers: {
        Authorization: cookie
      }
    })

    if (res.data.data) return res.data.data
    return null
  } catch (error) {
    return null
  }
}
