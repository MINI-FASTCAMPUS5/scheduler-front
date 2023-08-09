import React, { useState, ChangeEvent } from 'react'
import { Link } from 'react-router-dom'
import useUser from '@/hooks/user'
import dayjs from 'dayjs'
import { DATE_ROUTE_FORMAT } from '@/constants'
import { toast } from 'react-toastify'

export default function SignUpPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailValid, setEmailValid] = useState(false)
  const [passwordValid, setPasswordValid] = useState(false)
  const { login } = useUser() // setUserInfo 가져오기
  const failToast = () => toast.error('아이디 또는 비밀번호를 다시 확인해주세요!')

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
      window.location.replace(`/calendar/${dayjs(new Date()).format(DATE_ROUTE_FORMAT)}`) // 메인 페이지로 이동
      return
    }
    failToast() // 로그인 실패 시 경고 메시지
  }

  return (
    <div className='flex w-full justify-center'>
      <div className='flex w-full flex-col'>
        <div className=' justify-center pl-[35px] pr-[35px] mb-[70px]'>
          <svg viewBox='0 0 300 81'>
            <image href='/YeonganIdolLogoOrigin.svg' width='300' height='81' />
          </svg>
        </div>
        <form onSubmit={handleSignIn} className='flex flex-col items-center'>
          <div className='flex flex-col w-full'>
            <div className='flex w-full justify-between'>
              {/* 가로로 정렬, 간격 추가 */}
              <label htmlFor='email' className='text-gray-600 mt-auto mb-auto'>
                이메일
              </label>
              <input
                type='text'
                id='email'
                value={email}
                onChange={checkEmail}
                className='pl-2 h-[36px] w-[250px] bg-inputbox rounded-[10px]'
              />
            </div>
            {!emailValid && (
              <div className='text-red-600 text-[12px] text-end mt-[5px]'>
                올바른 이메일 형식을 입력해 주세요.
              </div>
            )}
          </div>
          <div className='flex flex-col w-full'>
            <div className='flex w-full mt-5 justify-between'>
              {/* 가로로 정렬, 간격 추가 */}
              <label htmlFor='password' className='text-gray-600 mt-auto mb-auto'>
                비밀번호
              </label>
              <input
                type='password'
                id='password'
                value={password}
                onChange={checkPassword}
                className='pl-2 h-[36px] w-[250px] bg-inputbox rounded-[10px]'
              />
            </div>
            {!passwordValid && (
              <div className='text-red-600 text-[12px] text-end mt-[5px]'>
                비밀번호는 최소 8자 이상이어야 합니다.
              </div>
            )}
          </div>
          <button
            type='submit'
            className='py-2 w-[230px] bg-main text-white rounded-[14px] disabled:opacity-50 mt-[50px] transition hover:bg-hover'
            disabled={!emailValid || !passwordValid}
          >
            로그인
          </button>
        </form>
        <div className='flex text-[12px] justify-center mt-5'>
          <span className='flex text-black'>아직 계정이 없으신가요?</span>
          <Link to='/signup' className='flex text-main font-bold ml-2 hover:underline'>
            회원가입
          </Link>
        </div>
      </div>
    </div>
  )
}
