import api from '@/api'

export type SchedulerRoleUserList = {
  scheduleStart: string
  title: string
  progress: 'WAITING' | 'ACCEPT' | 'REFUSE'
}
export type TicketListResponse = {
  createdAt: string
  email: string
  fullName: string
  profileImage: string
  schedulerRoleUserList: SchedulerRoleUserList[]
  sizeOfTicket: number
  usedTicket: number
}
export const getMyTicketList = async (cookie: string): Promise<TicketListResponse | null> => {
  try {
    const { data } = await api({
      url: '/mypage?role=USER',
      method: 'GET',
      headers: {
        Authorization: cookie
      }
    })
    if (data.data) return data.data
    return null
  } catch (error) {
    console.error(error)
    return null
  }
}
