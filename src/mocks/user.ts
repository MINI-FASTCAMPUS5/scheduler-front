import { AdminUser, FanUser } from '@/models/user'

export const ADMIN_USER_1: AdminUser = {
  id: 'admin1',
  fullName: 'HIVE',
  email: 'hi@hive.com',
  profileImage: '/mock_image/hive_profile_image.png',
  role: 'ADMIN'
}
export const ADMIN_USER_2: AdminUser = {
  id: 'admin2',
  fullName: 'SM Entertainment',
  email: 'sm@sm_entertainment.com',
  profileImage: '/mock_image/sm_profile_image.png',
  role: 'ADMIN'
}
export const FAN_USER_1: FanUser = {
  id: 'fan1',
  fullName: 'john daho',
  email: 'fan1@aabbccdd.kr',
  profileImage: '/mock_image/user_profile_1.png',
  role: 'USER',
  sizeOfTicket: 12
}
export const FAN_USER_2: FanUser = {
  id: 'fan2',
  fullName: 'ellie brown',
  email: 'ellie2@acdefg.io',
  profileImage: '/mock_image/user_profile_2.png',
  role: 'USER',
  sizeOfTicket: 12
}
export const FAN_USER_3: FanUser = {
  id: 'fan3',
  fullName: 'any amond',
  email: 'amond@any.com',
  profileImage: '/mock_image/user_profile_3.png',
  role: 'USER',
  sizeOfTicket: 12
}
export const FAN_USER_4: FanUser = {
  id: 'fan4',
  fullName: 'alien icecream',
  email: 'icecream@amanda.com',
  profileImage: '/mock_image/user_profile_4.png',
  role: 'USER',
  sizeOfTicket: 12
}
export const FAN_USER_5: FanUser = {
  id: 'fan5',
  fullName: 'carl knife',
  email: 'icecream@amanda.com',
  profileImage: '/mock_image/user_profile_5.png',
  role: 'USER',
  sizeOfTicket: 12
}
