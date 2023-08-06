import api from '@/api'
import { AdminUser, FanUser } from '@/models/user'
import React, { createContext, useState, useMemo, useCallback } from 'react'
import { useCookies } from 'react-cookie'

interface IUserContext {
  loggedIn: boolean
  getUserInfo: () => AdminUser | FanUser
  login: (email: string, password: string) => Promise<boolean>
}

export const UserContext = createContext<IUserContext>({
  loggedIn: false,
  getUserInfo: () => ({}) as AdminUser | FanUser,
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
  const [userInfo, setUserInfo] = useState({} as AdminUser | FanUser)
  const [loggedIn, setLoggedIn] = useState(false)

  const getUserInfo = useCallback(() => {
    return userInfo
    // ! userInfo가 없으면 /auth/user를 호출합니다.
    // ! 아직 API가 구현되지 않아서 주석 처리합니다.
  }, [userInfo])

  // * 로그인 후 cookie를 저장하고, 로그인 상태를 true로 변경합니다.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const login = async (email: string, password: string) => {
    try {
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
      setUserInfo(res.data.data as AdminUser | FanUser)

      setLoggedIn(true)
      return true
    } catch (error) {
      console.error(error)
      removeCookie('AccessToken', { path: '/' })

      setLoggedIn(false)
      return false
    }
  }

  const value = useMemo(
    () => ({ getUserInfo, loggedIn, setUserInfo, setLoggedIn, login }),
    [getUserInfo, setLoggedIn, setUserInfo, loggedIn, login]
  )

  return <UserContext.Provider value={{ ...value }}>{children}</UserContext.Provider>
}

export default UserProvider
