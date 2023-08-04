import api from '@/api'
import { AdminUser, FanUser } from '@/models/user'
import React, { createContext, useState, useMemo, useCallback } from 'react'
import { useCookies } from 'react-cookie'

interface IUserContext {
  loading: boolean
  loggedIn: boolean
  setLoggedIn: (loggedIn: boolean) => void
  setLoading: (loading: boolean) => void
  setUserInfo: (userInfo: AdminUser | FanUser) => void
  getUserInfo: () => Partial<AdminUser | FanUser>
  login: (email: string, password: string) => Promise<boolean>
}

export const UserContext = createContext<IUserContext>({
  loading: false,
  loggedIn: false,
  setLoggedIn: () => {},
  setLoading: () => {},
  setUserInfo: () => {},
  getUserInfo: () => ({}),
  login: async () => {
    alert('잘못된 접근입니다.')
    return false
  }
})

type Props = {
  children: React.ReactNode
}

function UserProvider({ children }: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookies, setCookie, removeCookie] = useCookies(['AccessToken'])
  const [userInfo, setUserInfo] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)
  const [loading, setLoading] = useState(false)

  const getUserInfo = useCallback(() => {
    if (userInfo) return userInfo
    // ! userInfo가 없으면 /auth/user를 호출합니다.
    return userInfo
  }, [userInfo])

  // * 로그인 후 cookie를 저장하고, 로그인 상태를 true로 변경합니다.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const login = async (email: string, password: string) => {
    try {
      setLoading(true)
      setLoggedIn(false)
      const res = await api('/login', {
        method: 'POST',
        data: {
          email: email,
          password: password
        },
        headers: {
          'Content-Type': 'application/json'
        }
      })
      setCookie('AccessToken', res.headers.authorization, { path: '/' })
      setUserInfo(res.data.data)
      setLoading(false)
      setLoggedIn(true)
      return true
    } catch (error) {
      console.error(error)
      removeCookie('AccessToken', { path: '/' })
      setLoading(false)
      setLoggedIn(false)
      return false
    }
  }

  const value = useMemo(
    () => ({ getUserInfo, loading, loggedIn, setUserInfo, setLoggedIn, setLoading, login }),
    [getUserInfo, setLoggedIn, setLoading, setUserInfo, loading, loggedIn, login]
  )

  return <UserContext.Provider value={{ ...value }}>{children}</UserContext.Provider>
}

export default UserProvider
