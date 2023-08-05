import { AdminUser, FanUser } from './user'

export type ProviderSchedule = {
  id: string
  userId: string
  title: string
  fullName: string
  profileImage: string
  startDate: string
  endDate: string
}

export type AdminSchedule = {
  createdAt: string
  description: string
  scheduleEnd: string
  scheduleStart: string
  title: string
  user: AdminUser
}

/**
 * @description GET user/schedule?year=number&month=number, AccessToken 필요
 */
export type Schedule = {
  schedulerAdmin: AdminSchedule[]
  schedulerUser: FanUser[]
}
