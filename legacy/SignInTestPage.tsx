import React, { useEffect, useState, useContext } from 'react'
import {
  ADMIN_USER_1,
  ADMIN_USER_2,
  FAN_USER_1,
  FAN_USER_2,
  FAN_USER_3,
  FAN_USER_4,
  FAN_USER_5
} from '@/mocks/user'
import { AdminUser, FanUser } from '@/models/user'
import { delay } from '@/utils'
import { useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'
import { DATE_ROUTE_FORMAT } from '@/constants'
import { UserContext } from '@/context/UserProvider'
// import useUser from '@/hooks/user'

// ! 사용자가 브라우저 url을 조작할 경우 로그인이 풀립니다.
// ! 이때 API가 있다면 다시 API를 호출해서 로그인을 유지해야 합니다.
export default function SignInOrUpTestPage() {
  const navigation = useNavigate()
  const [errorMsg, setErrorMsg] = useState('')
  const { getUserInfo, loading, loggedIn, setLoggedIn, setLoading, setUserInfo } =
    useContext(UserContext)

  useEffect(() => {
    // * login check (백엔드) API가 완성되면 백엔드에 요청을 보내서 로그인 여부를 판단합니다.
    if (loggedIn && getUserInfo().id) {
      const date = new Date()
      const currentDate = dayjs(date).format(DATE_ROUTE_FORMAT)
      navigation(`/calendar/${currentDate}`)
    }
  }, [loggedIn, getUserInfo, navigation])

  if (errorMsg) {
    setTimeout(() => setErrorMsg(''), 3000)
  }

  return (
    <div>
      <h1>Logout Form</h1>
      {loading && <div>로그인을 시도하고 있습니다.</div>}
      {errorMsg && <div>{errorMsg}</div>}
      <div className='m-4 border-black border-2'>
        <button
          onClick={() => {
            setLoading(true)
            delay<FanUser>(FAN_USER_1, 3000)
              .then((res) => {
                setUserInfo(res)
                setLoggedIn(true)
                setLoading(false)
              })
              .catch(() => {
                setErrorMsg('로그인에 실패했습니다.')
                setLoading(false)
                setLoggedIn(false)
              })
          }}
        >
          user1로 로그인
        </button>
      </div>
      <div className='m-4 border-black border-2'>
        <button
          onClick={() => {
            setLoading(true)
            delay<FanUser>(FAN_USER_2, 3000)
              .then((res) => {
                setUserInfo(res)
                setLoggedIn(true)
                setLoading(false)
              })
              .catch(() => {
                setErrorMsg('로그인에 실패했습니다.')
                setLoading(false)
                setLoggedIn(false)
              })
          }}
        >
          user2로 로그인
        </button>
      </div>
      <div className='m-4 border-black border-2'>
        <button
          onClick={() => {
            setLoading(true)
            delay<FanUser>(FAN_USER_3, 3000)
              .then((res) => {
                setUserInfo(res)
                setLoggedIn(true)
                setLoading(false)
              })
              .catch(() => {
                setErrorMsg('로그인에 실패했습니다.')
                setLoading(false)
                setLoggedIn(false)
              })
          }}
        >
          user3로 로그인
        </button>
      </div>
      <div className='m-4 border-black border-2'>
        <button
          onClick={() => {
            setLoading(true)
            delay<FanUser>(FAN_USER_4, 3000)
              .then((res) => {
                setUserInfo(res)
                setLoggedIn(true)
                setLoading(false)
              })
              .catch(() => {
                setErrorMsg('로그인에 실패했습니다.')
                setLoading(false)
                setLoggedIn(false)
              })
          }}
        >
          user4로 로그인
        </button>
      </div>
      <div className='m-4 border-black border-2'>
        <button
          onClick={() => {
            setLoading(true)
            delay<FanUser>(FAN_USER_5, 3000)
              .then((res) => {
                setUserInfo(res)
                setLoggedIn(true)
                setLoading(false)
              })
              .catch(() => {
                setLoading(false)
                setLoggedIn(false)
              })
          }}
        >
          user5로 로그인
        </button>
      </div>
      <div className='m-4 border-black border-2'>
        <button
          onClick={() => {
            setLoading(true)
            delay<AdminUser>(ADMIN_USER_1, 3000)
              .then((res) => {
                setUserInfo(res)
                setLoggedIn(true)
                setLoading(false)
              })
              .catch(() => {
                setErrorMsg('로그인에 실패했습니다.')
                setLoading(false)
                setLoggedIn(false)
              })
          }}
        >
          admin1로 로그인
        </button>
      </div>
      <div className='m-4 border-black border-2'>
        <button
          onClick={() => {
            setLoading(true)
            delay<AdminUser>(ADMIN_USER_2, 3000)
              .then((res) => {
                setUserInfo(res)
                setLoggedIn(true)
                setLoading(false)
              })
              .catch(() => {
                setErrorMsg('로그인에 실패했습니다.')
                setLoading(false)
                setLoggedIn(false)
              })
          }}
        >
          admin2로 로그인
        </button>
      </div>
    </div>
  )
}
