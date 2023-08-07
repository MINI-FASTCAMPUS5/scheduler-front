import { AdminUser, FanUser } from './user'

export type ProviderSchedule = {
  id: string
  userId: string
  title: string
  description: string
  fullName: string
  profileImage: string
  image: string
  startDate: string
  endDate: string
}

export type ProviderReservedList = {
  id: string
  scheduleId: string
  reservedDate: string
  progress: 'WAITING' | 'ACCEPT' | 'REFUSE'
  user: FanUser
}

export type AdminSchedule = {
  id: string
  createdAt: string
  description: string
  scheduleEnd: string
  scheduleStart: string
  image: string
  title: string
  user: AdminUser
}

export type UserSchedule = {
  id: string
  scheduleStart: string // reservedDate
  createdAt: string
  progress: 'WAITING' | 'ACCEPT' | 'REFUSE'
  user: FanUser
  schedulerAdmin: AdminSchedule
}

/**
 * @description GET user/schedule?year=number&month=number, AccessToken 필요
 */
export type Schedule = {
  schedulerAdmin: AdminSchedule[]
  schedulerUser: UserSchedule[]
}
