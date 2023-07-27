import { AdminUser, FanUser } from '@/models/user'
import React, { createContext, useState, useMemo, useEffect, useCallback } from 'react'

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
    return userInfo
  }, [userInfo])

  const value = useMemo(
    () => ({ getUserInfo, loading, loggedIn, setLoggedIn, setLoading, setUserInfo }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [getUserInfo, setLoggedIn, setLoading, setUserInfo]
  )

  useEffect(() => {
    console.info('LOGIN CONTEXT가 변경되었습니다.')
  }, [loggedIn, loading, userInfo])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default UserProvider
