import React, { useEffect, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../SideBar'
import { UserContext } from '@/context/UserProvider'
import { delay } from '@/utils'
import { FAN_USER_1 } from '@/mocks/user'
import { FanUser } from '@/models/user'

export default function CalendarLayout() {
  // * 로그인을 시도할 때도 이 Context를 사용합니다. fetch("/login", {body : {...formData}}).then(...) <= 이 부분이 아래 dealy함수 부분입니다.
  // todo : hooks로 빼기
  const { getUserInfo, loading, loggedIn, setUserInfo, setLoading, setLoggedIn } = useContext(UserContext)
  useEffect(() => {
    // * 아이디가 있다면 로그인 상태로 간주하고 로그인 요청을 다시 하지 않습니다.
    if (getUserInfo().id) return
    setLoading(true)
    delay<FanUser>(FAN_USER_1, 2000)
      .then((user) => {
        setUserInfo(user)
        setLoading(false)
        setLoggedIn(true)
      })
      .catch(() => {
        // login 페이지로 redirect 합니다.
      })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main className='flex min-h-screen'>
      {loggedIn && !loading ? (
        <>
          <SideBar />
          <Outlet />
        </>
      ) : (
        <div>LOADING ...</div>
      )}
    </main>
  )
}
