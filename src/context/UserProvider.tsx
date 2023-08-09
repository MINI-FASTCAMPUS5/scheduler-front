import api from '@/api'
import { auth } from '@/api/login/auth'
// import { auth } from '@/api/login/auth'
import { ACCESS_TOKEN } from '@/constants'
import { AdminUser, FanUser } from '@/models/user'
import React, { createContext, useState, useMemo, useCallback, useEffect } from 'react'
import { useCookies } from 'react-cookie'

interface IUserContext {
  loading: boolean
  loggedIn: boolean
  getUserInfo: () => AdminUser | FanUser
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
}

export const UserContext = createContext<IUserContext>({
  loggedIn: false,
  loading: true,
  getUserInfo: () => ({}) as AdminUser | FanUser,
  login: async () => {
    return false
  },
  logout: () => {}
})

type Props = {
  children: React.ReactNode
}

function UserProvider({ children }: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookies, setCookie, removeCookie] = useCookies([ACCESS_TOKEN])
  const [userInfo, setUserInfo] = useState({} as AdminUser | FanUser)
  const [loggedIn, setLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)

  // todo : 원래는 getUserInfo안에서 비동기적으로 데이터의 정합성을 검사해야하지만, 이미 작성된 로직이 많고 시간 관계상 따로 뺏습니다.
  // * 사용자 정보가 없다면, 서버에 요청을 보내 사용자 정보를 가져옵니다.
  const getUserInfo = useCallback(() => {
    if (!userInfo.id) return {} as AdminUser | FanUser
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
      setCookie(ACCESS_TOKEN, res.headers.authorization, { path: '/' })
      setUserInfo(res.data.data as AdminUser | FanUser)
      setLoggedIn(true)
      setLoading(false)
      return true
    } catch (error) {
      console.error(error)
      removeCookie('AccessToken', { path: '/' })
      setLoggedIn(false)
      setLoading(false)
      return false
    }
  }
  const logout = useCallback(() => {
    removeCookie(ACCESS_TOKEN, { path: '/' })
    setLoggedIn(false)
    setUserInfo({} as AdminUser | FanUser)
    window.location.replace('/login')
  }, [removeCookie])

  useEffect(() => {
    setLoading(true)
    if (loggedIn || userInfo.id) {
      setLoading(false)
      return
    }
    if (!cookies[ACCESS_TOKEN]) {
      removeCookie(ACCESS_TOKEN, { path: '/' })
      setLoading(false)
      return
    }
    auth(cookies[ACCESS_TOKEN])
      .then((user) => {
        if (user) {
          setUserInfo(user as AdminUser | FanUser)
          setLoggedIn(true)
        } else {
          removeCookie(ACCESS_TOKEN, { path: '/' })
          window.location.replace('/login')
        }
        setLoading(false)
      })
      .catch((error) => {
        console.error(error)
        removeCookie(ACCESS_TOKEN, { path: '/' })
        setLoading(false)
        window.location.replace('/login')
      })
  }, [cookies, loggedIn, removeCookie, userInfo.id])

  const value = useMemo(
    () => ({ getUserInfo, loggedIn, setUserInfo, setLoggedIn, login, loading, logout }),
    [getUserInfo, setLoggedIn, setUserInfo, loggedIn, login, loading, logout]
  )

  return <UserContext.Provider value={{ ...value }}>{children}</UserContext.Provider>
}

export default UserProvider
