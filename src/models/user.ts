// * 실제 유저 정보 응답에는 관리자도 sizeOfTicket을 가지고 있습니다.

// * General User Type
export type User = {
  id: string
  email: string
  profileImage: string
  role: 'ADMIN' | 'USER'
  fullName: string
}

// * Fan User Type
type Fan = {
  role: 'USER'
  sizeOfTicket: number
}
export type FanUser = Fan & User

// * Admin User Type
type Admin = {
  role: 'ADMIN'
}
export type AdminUser = Admin & User
