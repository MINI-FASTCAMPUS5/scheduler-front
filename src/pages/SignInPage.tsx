import React, { useState, ChangeEvent, FormEvent } from 'react'
import { Link } from 'react-router-dom'
import useUser from '@/hooks/user'
import dayjs from 'dayjs'
import { DATE_ROUTE_FORMAT } from '@/constants'
import { toast } from 'react-toastify'

export default function SignUpPage() {
  const { login } = useUser()
  const failToast = () => toast.error('아이디 또는 비밀번호를 다시 확인해주세요!')

  const handleSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (emailValid && passwordValid) {
      const loggedIn = await login(email, password)
      if (loggedIn) {
        window.location.replace(`/calendar/${dayjs(new Date()).format(DATE_ROUTE_FORMAT)}`)
      } else {
        failToast()
      }
    }
  }

  const validatePassword = (value: string) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#^?&\\()\-=+])[A-Za-z\d$@$!%*#^?&\\()\-=+]{8,20}$/
    return regex.test(value)
  }

  const validateEmail = (value: string) => {
    const regex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
    return regex.test(value)
  }

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [emailValid, setEmailValid] = useState<boolean>(false)
  const [passwordValid, setPasswordValid] = useState<boolean>(false)

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value
    setEmail(newEmail)
    setEmailValid(validateEmail(newEmail))
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value
    setPassword(newPassword)
    setPasswordValid(validatePassword(newPassword))
  }

  return (
    <div className='flex w-full justify-center'>
      <div className='flex w-full flex-col'>
        <div className='justify-center pl-[35px] pr-[35px] mb-[70px]'>
          <svg viewBox='0 0 300 81'>
            <image href='/YeonganIdolLogoOrigin.svg' width='300' height='81' />
          </svg>
        </div>
        <form onSubmit={handleSignIn} className='flex flex-col items-center'>
          <div className='flex flex-col w-full'>
            <div className='flex w-full justify-between'>
              <label htmlFor='email' className='text-gray-600 mt-auto mb-auto font-gmarket'>
                이메일
              </label>
              <input
                type='text'
                id='email'
                value={email}
                onChange={handleEmailChange}
                className='pl-2 h-[36px] w-[250px] bg-inputbox rounded-[10px]'
              />
            </div>
            {email !== '' && !emailValid && (
              <div className='text-red-600 text-[12px] text-end mt-[5px]'>
                올바른 이메일 형식을 입력해 주세요.
              </div>
            )}
          </div>
          <div className='flex flex-col w-full'>
            <div className='flex w-full mt-5 justify-between'>
              <label htmlFor='password' className='text-gray-600 mt-auto mb-auto font-gmarket'>
                비밀번호
              </label>
              <input
                type='password'
                id='password'
                value={password}
                onChange={handlePasswordChange}
                className='pl-2 h-[36px] w-[250px] bg-inputbox rounded-[10px]'
              />
            </div>
            {password !== '' && !passwordValid && (
              <div className='text-red-600 text-[12px] text-end mt-[5px]'>
                비밀번호는 영문, 숫자, 특수문자 조합 8~20자 이내로 입력해주세요.
              </div>
            )}
          </div>
          <button
            type='submit'
            className='py-2 w-[230px] bg-main text-white rounded-[14px] disabled:opacity-50 mt-[50px] hover:bg-hover transition hover:scale-[0.98] font-gmarket font-bold'
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
