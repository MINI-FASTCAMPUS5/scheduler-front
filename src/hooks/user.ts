import { UserContext } from '@/context/UserProvider'
import { useContext } from 'react'

export const useUser = () => {
  const { getUserInfo, loggedIn, login, loading, logout } = useContext(UserContext)

  return { getUserInfo, login, loggedIn, loading, logout }
}
