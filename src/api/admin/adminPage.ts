import api from '@/api'

export type ScheduleDtoType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  schedulerRoleAdminList: any
  description: string
  fullName?: string
  title: string
  progress: 'WAITING' | 'ACCEPT' | 'REFUSE'
  scheduleStart: string
  adminScheduleId: number
  userScheduleId: number
}
export type ApprovalListResponse = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registeredEventCount: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  countProcessDTO: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  schedulerRoleAdminList: []
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getRoleAdminCountProgressDTO: any
  scheduleDto: ScheduleDtoType[]
  countProcessDto: {
    waiting: number
    refused: number
    accepted: number
  }
  userDTO: {
    id: number
    email: string
    fullName: string
    sizeOfTicket: string
    profileImage: string
    role: 'USER' | 'ADMIN'
  }
}

export const getAdminDashbordlList = async (
  cookie: string
): Promise<ApprovalListResponse | null> => {
  try {
    const res = await api({
      url: '/mypage?role=ADMIN',
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
