import { DATE_ROUTE_FORMAT } from '@/constants'
import useUser from '@/hooks/user'
import dayjs from 'dayjs'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function SignInAPITestPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useUser()

  const onClick = async () => {
    const loggedIn = await login(email, password)
    if (loggedIn) {
      const currentDate = dayjs(new Date()).format(DATE_ROUTE_FORMAT)
      navigate('/calendar/' + currentDate)
      return
    }
    toast.error('로그인에 실패하였습니다.')
  }

  return (
    <div>
      <p>로그인 페이지 입니다. 매니저는 manager1@test.io</p>
      <p>유저는 fan1@test.io</p>
      <p>비밀번호는 p@ssw0rd</p>
      <input
        type='email'
        placeholder='이메일을 입력해주세요'
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='password'
        placeholder='비밀번호를 입력해주세요'
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type='submit' onClick={onClick}>
        로그인
      </button>
    </div>
  )
}
