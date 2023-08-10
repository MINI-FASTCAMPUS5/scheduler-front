import { Link, useNavigate } from 'react-router-dom'
import React, { useState, ChangeEvent } from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import { MdInfo } from 'react-icons/md'
import api from '@/api'
import { toast } from 'react-toastify'

const SignupPage = (): JSX.Element => {
  const navigate = useNavigate()
  // 회원가입 폼 요소들의 상태 관리
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [fullName, setFullName] = useState('')
  const [profileImg, setProfileImg] = useState('')
  const [file, setFile] = useState<File>()

  // 이메일, 비밀번호 형식 체크를 위한 상태 관리
  const [passwordLength, setPasswordLength] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordMatch, setPasswordMatch] = useState('')

  const imageOverSize = () => toast.error('프로필 이미지 크기는 1MB 이하여야 합니다.')
  const successToast = () => toast.success('회원가입이 성공적으로 완료되었습니다.')
  const failToast = () => toast.error('회원가입에 실패하였습니다.')
  const requireToast = () => toast.error('필수 정보를 입력해주세요.')

  // 이메일 체크
  const handleEmailCheck = (e: ChangeEvent<HTMLInputElement>): void => {
    const newEmail = e.target.value
    setEmail(newEmail)

    if (!newEmail.includes('@') || !newEmail.includes('.')) {
      setEmailError('올바른 이메일 형식을 입력해 주세요.')
    } else {
      setEmailError('')
    }
  }

  // 비밀번호 체크
  const handlePasswordLength = (e: ChangeEvent<HTMLInputElement>): void => {
    const newPassword = e.target.value
    setPassword(newPassword)

    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#^?&\\()\-=+])[A-Za-z\d$@$!%*#^?&\\()\-=+]{8,20}$/
    if (regex.test(newPassword)) {
      setPasswordLength('')
    } else {
      setPasswordLength('비밀번호는 영문, 숫자, 특수문자 조합 8~20자 이내로 입력해주세요.')
    }
  }

  // 비밀번호 확인 체크
  const handlePasswordConfirm = (e: ChangeEvent<HTMLInputElement>): void => {
    const confirmPassword = e.target.value
    setPasswordConfirm(confirmPassword)

    if (confirmPassword !== password) {
      setPasswordMatch('비밀번호가 일치하지 않습니다.')
    } else {
      setPasswordMatch('')
    }
  }

  // 이미지 클 경우
  const uploadImage = (e: ChangeEvent<HTMLInputElement>): void => {
    const files = e.target.files as FileList
    const file = files[0]
    const maxSize = 1024 * 1024 // 1MB

    if (file.size > maxSize) {
      imageOverSize()
      return
    }
    setFile(file)
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.addEventListener('load', (e) => {
      setProfileImg(e.target?.result as string)
    })
  }

  // 회원가입 요청을 보내는 함수
  const signUp = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (!email || !password || !passwordConfirm || !fullName || !profileImg || !file) {
        requireToast()
        return
      }
      const formData = new FormData()
      formData.append('file', file)
      formData.append(
        'dto',
        new Blob(
          [
            JSON.stringify({
              fullName,
              password: password,
              email: email,
              role: 'USER'
            })
          ],
          {
            type: 'application/json'
          }
        )
      )
      await api({
        url: '/join',
        method: 'POST',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      successToast()
      navigate('/login')
    } catch (error) {
      failToast()
    }
  }

  return (
    <section className='flex w-full justify-center'>
      <div className='flex w-full flex-col'>
        <div className='flex text-[38px] font-bold justify-center mb-[30px]'>회원가입</div>
        <form onSubmit={signUp}>
          {/* 회원가입 폼 요소들 */}
          <div className='flex flex-col'>
            <div className='flex w-full justify-center'>
              <div className='flex h-[120px] w-[120px] relative  justify-center'>
                {profileImg ? (
                  <img className='flex rounded-full border' src={profileImg} alt='등록 이미지' />
                ) : (
                  <img
                    className='flex rounded-full'
                    src='/mock_image/user_default.png'
                    alt='기본 이미지'
                  />
                )}
                <label
                  htmlFor='imageUploadInputLabel'
                  className='absolute bottom-[5px] right-[-10px]'
                >
                  <div className='flex text-[28px] bg-whit text-point px-3 w-full text-center rounded-full cursor-pointer transition hover:text-main'>
                    <AiFillPlusCircle />
                  </div>
                </label>
              </div>
            </div>

            <div>
              <input
                id='imageUploadInputLabel'
                className=' opacity-0'
                type='file'
                onChange={uploadImage}
              />
            </div>

            <div className='flex justify-between mt-2'>
              <div className='text-gray-600 mt-auto mb-auto font-gmarket'>이름</div>
              <input
                className='pl-2 h-[36px] w-[250px] bg-inputbox rounded-[10px] text-[12px] placeholder-[12px] flex items-center'
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder='이름'
              />
            </div>

            <div className='flex justify-between mt-5 '>
              <div className='text-gray-600 mt-auto mb-auto font-gmarket'>이메일</div>
              <input
                type='email'
                className='pl-2 h-[36px] w-[250px] bg-inputbox rounded-[10px] text-[12px] placeholder-[12px] flex items-center'
                value={email}
                onChange={handleEmailCheck}
                placeholder='이메일'
              />
            </div>
            {emailError && (
              <div className='text-red-600 text-[12px] text-end mt-[5px]'>{emailError}</div>
            )}

            <div className='flex justify-between mt-5 '>
              <div className='text-gray-600 mt-auto mb-auto font-gmarket'>비밀번호</div>
              <input
                className='pl-2 h-[36px] w-[250px] bg-inputbox rounded-[10px] text-[12px] placeholder-[12px] flex items-center'
                value={password}
                onChange={handlePasswordLength}
                placeholder='비밀번호'
                type='password'
              />
            </div>
            {passwordLength && (
              <div className='text-red-600 text-[12px] text-end mt-[5px]'>{passwordLength}</div>
            )}

            <div className='flex justify-between mt-5'>
              <div className='text-gray-600 mt-auto mb-auto font-gmarket'>비밀번호 확인</div>
              <input
                className='pl-2 h-[36px] w-[250px] bg-inputbox rounded-[10px] text-[12px] placeholder-[12px] flex items-center'
                value={passwordConfirm}
                onChange={handlePasswordConfirm}
                placeholder='비밀번호 확인'
                type='password'
              />
            </div>
            {passwordMatch && <div className='text-red-600 text-[12px] text-end mt-[5px]'>{passwordMatch}</div>}
          </div>

          <div className='flex w-full mt-6'>
            <div className='flex text-point text-[38px] items-center mr-[10px]'>
              <MdInfo />
            </div>
            <div className='flex flex-col w-full text-[12px]'>
              <div className='mb-[2px] text-[#878787]'>
                행사 관리 매니저는 회원가입 후 관리자에게 권한을 요청하세요.
              </div>
              <div className='flex text-[#878787]'>
                관리자에게 이메일 보내기
                <span className='flex ml-1 text-[10px] text-[#878787] border border-[#cccccc] rounded-full pl-2 pr-2 cursor-pointer'>
                  이메일 보내기
                </span>
              </div>
            </div>
          </div>

          <div className='flex justify-center'>
            <button
              className='py-2 w-[230px] bg-main text-white rounded-[14px] disabled:opacity-50 mt-[50px] transition hover:bg-hover hover:scale-[0.98] font-gmarket font-bold'
              type='submit'
            >
              회원가입
            </button>
          </div>
        </form>

        <div className='flex text-[12px] justify-center mt-5'>
          <span className='flex text-black'>이미 계정이 있으신가요?</span>
          <Link to='/login' className='flex text-main font-bold ml-2 hover:underline'>
            로그인 전환
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SignupPage
