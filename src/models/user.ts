type User = {
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
