import { AdminUser, FanUser } from '@/models/user'
import React, { createContext, useState, useMemo, useCallback } from 'react'

interface IUserContext {
  loading: boolean
  loggedIn: boolean
  setLoggedIn: (loggedIn: boolean) => void
  setLoading: (loading: boolean) => void
  setUserInfo: (userInfo: AdminUser | FanUser) => void
  getUserInfo: () => Partial<AdminUser | FanUser>
}

export const UserContext = createContext<IUserContext>({
  loading: false,
  loggedIn: false,
  setLoggedIn: () => {},
  setLoading: () => {},
  setUserInfo: () => {},
  getUserInfo: () => ({})
})

type Props = {
  children: React.ReactNode
}

function UserProvider({ children }: Props) {
  const [userInfo, setUserInfo] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)
  const [loading, setLoading] = useState(false)

  const getUserInfo = useCallback(() => {
    if (userInfo) return userInfo
    // ! userInfo가 없으면 /auth/user를 호출합니다.
    return userInfo
  }, [userInfo])

  const value = useMemo(
    () => ({ getUserInfo, loading, loggedIn, setUserInfo, setLoggedIn, setLoading }),
    [getUserInfo, setLoggedIn, setLoading, setUserInfo, loading, loggedIn]
  )

  return <UserContext.Provider value={{ ...value }}>{children}</UserContext.Provider>
}

export default UserProvider
