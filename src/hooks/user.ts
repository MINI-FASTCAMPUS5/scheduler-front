import { useContext } from 'react'
import { UserContext } from '@/context/UserProvider'

export default function useUser() {
  const { getUserInfo, loggedIn, login, loading, logout } = useContext(UserContext)

  return { getUserInfo, login, loggedIn, loading, logout }
}
