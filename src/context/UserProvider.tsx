import { LoginAPI } from '@/api/login/login'
import { getUserInformationAPI } from '@/api/user'
import { ACCESS_TOKEN } from '@/constants'
import { User } from '@/models/user'
import { to } from '@/utils'
import { createContext, useCallback, useEffect, useMemo, useState } from 'react'
import { useCookies } from 'react-cookie'
import { useLocation } from 'react-router-dom'

interface IUserContext {
  loading: boolean
  loggedIn: boolean
  getUserInfo: () => User
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
}

export const UserContext = createContext<IUserContext>({
  loggedIn: false,
  loading: true,
  getUserInfo: () => ({}) as User,
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
  const [userInfo, setUserInfo] = useState<User | null>(null)
  const [loggedIn, setLoggedIn] = useState(false)
  const [loading, setLoading] = useState(false)
  const { pathname } = useLocation()

  const getUserInfo = useCallback(() => {
    if (!userInfo) {
      window.location.assign('/login')
      throw new Error('유저 정보가 없습니다.')
    }
    return userInfo
  }, [userInfo])

  const login = useCallback(
    async (email: string, password: string) => {
      const [errorMessage, response] = await to(LoginAPI(email, password))
      if (errorMessage || response === null) return false
      setCookie(ACCESS_TOKEN, response.token, { path: '/' })
      setUserInfo(response.data)
      setLoggedIn(true)
      return true
    },
    [setCookie]
  )

  const logout = useCallback(() => {
    removeCookie(ACCESS_TOKEN, { path: '/' })
    setLoggedIn(false)
    setUserInfo(null)
    window.location.assign('/login')
  }, [removeCookie])

  useEffect(() => {
    if (loggedIn && userInfo) return
    if (!cookies[ACCESS_TOKEN]) return
    setLoading(true)
    to(getUserInformationAPI(cookies[ACCESS_TOKEN])).then(([errorMessage, res]) => {
      if (errorMessage || res === null) {
        setLoggedIn(false)
        setLoading(false)
        setUserInfo(null)
        removeCookie(ACCESS_TOKEN, { path: '/' })
        return
      }
      errorMessage && console.error(errorMessage)
      setUserInfo(res.data)
      setLoggedIn(true)
      setLoading(false)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  const value = useMemo(
    () => ({ getUserInfo, loggedIn, setUserInfo, setLoggedIn, login, loading, logout }),
    [getUserInfo, setLoggedIn, setUserInfo, loggedIn, login, loading, logout]
  )

  return <UserContext.Provider value={{ ...value }}>{children}</UserContext.Provider>
}

export default UserProvider
