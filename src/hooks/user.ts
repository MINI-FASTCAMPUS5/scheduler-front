import { UserContext } from '@/context/UserProvider'
import { useContext } from 'react'

export default function useUser() {
  const { getUserInfo, loggedIn, login, loading, logout } = useContext(UserContext)

  return { getUserInfo, login, loggedIn, loading, logout }
}
