import React, { useState, ChangeEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../api/api'
import { useCookies } from 'react-cookie'
import useUser from '@/hooks/user'
import dayjs from 'dayjs'
import { DATE_ROUTE_FORMAT } from '@/constants'

const SignInPage: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [emailValid, setEmailValid] = useState<boolean>(false)
  const [passwordValid, setPasswordValid] = useState<boolean>(false)
  const navigate = useNavigate()
  const [, setCookie] = useCookies(['userToken'])
  const { setUserInfo } = useUser() // setUserInfo 가져오기

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

    const result = await loginUser(email, password)

    if (result !== null) {
      const { data, userJwtToken } = result
      setUserInfo(data) // setUserInfo 사용
      // JWT 토큰을 쿠키에 저장
      setCookie('userToken', userJwtToken)
      // 유저정보를 보내고,
      alert('로그인 성공!')
      const currentDate = dayjs(new Date()).format(DATE_ROUTE_FORMAT)
      navigate(`/calendar/${currentDate}`) // 메인 페이지로 이동
    } else {
      alert('로그인 실패!') // 로그인 실패 시 경고 메시지
    }
  }

  return (
    <div className='w-[100vw] h-[100vh] bg-wait relative'>
      <div
        className='flex  bg-main #6C27FF absolute top-[50px] right-[200px] rounded-xl w-[450px] h-[500px]'
        style={{
          backgroundPosition: 'center', // 이미지 위치
          backgroundSize: 'cover', // 이미지 꽉차게
          backgroundRepeat: 'no-repeat' // 이미지 반복 지정
          // width: '250px' // 배경이미지 크기
        }}
      >
        <div>
          {/* 로그인 폼 */}
          <form onSubmit={handleSignIn}>
            <input type='text' value={email} onChange={checkEmail} placeholder='이메일' />
            {emailValid ? null : <div>올바른 이메일 형식을 입력해 주세요.</div>}
            <input
              type='password'
              value={password}
              onChange={checkPassword}
              placeholder='비밀번호'
            />
            {passwordValid ? null : <div>비밀번호는 최소 8자 이상이어야 합니다.</div>}
            <button type='submit'>로그인</button>
          </form>

          {/* 회원가입으로 가는 네비게이션 버튼 */}
          <Link to='/SignupPage'>회원가입</Link>
        </div>
      </div>
    </div>
  )
}

export default SignInPage
