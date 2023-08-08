import React, { useState, ChangeEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useUser from '@/hooks/user'
import dayjs from 'dayjs'
import { DATE_ROUTE_FORMAT } from '@/constants'

export default function SignUpPage() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [emailValid, setEmailValid] = useState<boolean>(false)
  const [passwordValid, setPasswordValid] = useState<boolean>(false)
  const navigate = useNavigate()
  const { login } = useUser() // setUserInfo 가져오기

  const checkEmail = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value)
    const regex =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
    if (regex.test(e.target.value)) {
      setEmailValid(true)
    } else setEmailValid(false)
  }

  const checkPassword = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value)
    const regex = /^(?!.*[^a-zA-Z0-9$`~!@$!%*#^?&\\()\-=+])[a-zA-Z0-9$`~!@$!%*#^?&\\()\-=+]{8,}$/
    if (regex.test(e.target.value)) {
      setPasswordValid(true)
    } else setPasswordValid(false)
  }

  const handleSignIn = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault()
    const loggedIn = await login(email, password)
    if (loggedIn) {
      alert('로그인 성공!')
      navigate(`/calendar/${dayjs(new Date()).format(DATE_ROUTE_FORMAT)}`) // 메인 페이지로 이동
      return
    }
    alert('로그인 실패!') // 로그인 실패 시 경고 메시지
  }

  return (
    <div>
      {/* 로그인 폼 */}
      <form onSubmit={handleSignIn}>
        <input type='text' value={email} onChange={checkEmail} placeholder='이메일' />
        {emailValid ? null : <div>올바른 이메일 형식을 입력해 주세요.</div>}
        <input type='password' value={password} onChange={checkPassword} placeholder='비밀번호' />
        {passwordValid ? null : <div>비밀번호는 최소 8자 이상이어야 합니다.</div>}
        <button type='submit'>로그인</button>
      </form>
      {/* 회원가입으로 가는 네비게이션 버튼 */}
      <Link to='/signup'>회원가입</Link>
    </div>
  )
}
