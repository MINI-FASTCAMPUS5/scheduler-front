import React, { useState, ChangeEvent, FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signUpUser } from '../api/api'
import { useCookies } from 'react-cookie'

const SignupPage: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [fullName, setFullName] = useState('')
  const [profileImg, setProfileImg] = useState<File>()
  const [passwordLength, setPasswordLength] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordMatch, setPasswordMatch] = useState('')
  const [successModalVisible, setSuccessModalVisible] = useState(false)
  const [imgModalVisible, setImgModalVisible] = useState(false)

  const navigate = useNavigate()
  const [, setCookie] = useCookies(['userToken'])

  const handleEmailCheck = (e: ChangeEvent<HTMLInputElement>): void => {
    const newEmail = e.target.value
    setEmail(newEmail)

    if (!newEmail.includes('@') || !newEmail.includes('.')) {
      setEmailError('올바른 이메일 형식을 입력해 주세요.')
    } else {
      setEmailError('')
    }
  }

  const handlePasswordLength = (e: ChangeEvent<HTMLInputElement>): void => {
    const newPassword = e.target.value
    setPassword(newPassword)

    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/

    if (!regex.test(newPassword)) {
      setPasswordLength('비밀번호는 영문, 숫자, 특수문자 조합 8~20자 이내로 입력해주세요.')
    } else {
      setPasswordLength('')
    }
  }

  const handlePasswordConfirm = (e: ChangeEvent<HTMLInputElement>): void => {
    const confirmPassword = e.target.value
    setPasswordConfirm(confirmPassword)

    if (confirmPassword !== password) {
      setPasswordMatch('비밀번호가 일치하지 않습니다.')
    } else {
      setPasswordMatch('')
    }
  }

  const uploadImage = (e: ChangeEvent<HTMLInputElement>): void => {
    const files = e.target.files as FileList
    const file = files[0]
    const maxSize = 1024 * 1024 // 1MB

    if (file.size > maxSize) {
      setImgModalVisible(true)
      return
    }
    // const reader = new FileReader();
    // reader.readAsDataURL(file);
    // reader.addEventListener('load', e => {
    // });

    setProfileImg(file)
  }

  const handleSignUp = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    const userJwtToken = await signUpUser(email, password, fullName, profileImg, 'USER')
    // 회원가입 성공시 처리 (예: 토큰 저장, 페이지 이동 등)
    if (userJwtToken) {
      alert('회원가입 성공!')
      setCookie('userToken', userJwtToken)
      navigate('/login') // 메인 페이지로 이동
      return
    }
  }

  return (
    <section>
      <div className='contentWrap'>
        <div className='page_title'>회원가입</div>
        <form onSubmit={handleSignUp}>
          {/* 회원가입 폼 요소들 */}
          <div className='signup-inputBox'>
            <div className='input-title'>이메일</div>
            <input
              className='signup-input'
              value={email}
              onChange={handleEmailCheck}
              placeholder='(필수) 이메일을 입력해주세요.'
            />
            {emailError && <div className='valid_desc text-red-500'>{emailError}</div>}

            <div className='input-title'>비밀번호</div>
            <input
              className='signup-input'
              value={password}
              onChange={handlePasswordLength}
              placeholder='(필수) 비밀번호를 입력해 주세요.'
              type='password'
            />
            {passwordLength && <div className='valid_desc text-red-500'>{passwordLength}</div>}

            <div className='input-title'>비밀번호 확인</div>
            <input
              className='signup-input'
              value={passwordConfirm}
              onChange={handlePasswordConfirm}
              placeholder='(필수) 비밀번호를 다시 입력해 주세요.'
              type='password'
            />
            {passwordMatch && <div className='valid_desc text-red-500'>{passwordMatch}</div>}

            <div className='input-title'>이름</div>
            <input
              className='signup-input'
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder='(필수) 이름을 입력해 주세요.'
            />

            <div className='input-title'>프로필 이미지</div>
            <input className='imginput' type='file' onChange={uploadImage} />
          </div>

          <div className='sign-btn'>
            <button
              className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'
              type='submit'
            >
              회원가입
            </button>
          </div>
        </form>

        {/* 필수 입력정보를 확인해주세요. 모달 */}
        {successModalVisible && (
          <div className='modal fixed inset-0 flex items-center justify-center z-10'>
            <div className='modal-overlay absolute inset-0 bg-black opacity-50' />
            <div className='modal-container bg-white w-full max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto'>
              <div className='modal-content py-4 text-left px-6'>
                <div className='flex justify-between items-center pb-3'>
                  <p className='text-2xl font-bold'>알림</p>
                  <button onClick={() => setSuccessModalVisible(false)}>&times;</button>
                </div>
                <p>회원가입이 성공적으로 완료되었습니다!</p>
              </div>
            </div>
          </div>
        )}

        {/* 이미 가입된 이메일 모달 */}
        {imgModalVisible && (
          <div className='modal fixed inset-0 flex items-center justify-center z-10'>
            <div className='modal-overlay absolute inset-0 bg-black opacity-50' />
            <div className='modal-container bg-white w-full max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto'>
              <div className='modal-content py-4 text-left px-6'>
                <div className='flex justify-between items-center pb-3'>
                  <p className='text-2xl font-bold'>알림</p>
                  <button onClick={() => setImgModalVisible(false)}>&times;</button>
                </div>
                <p>프로필 이미지 크기는 1MB 이하여야 합니다. 이미지를 변경해주세요.</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className='mt-4'>
        <Link to='/login' className='text-blue-500 hover:underline'>
          이미 계정이 있으신가요? 로그인하러 가기
        </Link>
      </div>
    </section>
  )
}

export default SignupPage
