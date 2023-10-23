export type UserRole = 'ADMIN' | 'USER'
export type User = {
  id: string
  email: string
  profileImage: string
  role: UserRole
  fullName: string
  sizeOfTicket: string
}

// * Fan User Type
type Fan = {
  role: 'USER'
  sizeOfTicket: string
}
export type FanUser = Fan & User

// * Admin User Type
type Admin = {
  role: 'ADMIN'
}
export type AdminUser = Admin & User
