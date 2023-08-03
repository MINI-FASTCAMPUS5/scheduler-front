import useUser from '@/hooks/user'
import React, { useEffect } from 'react'

export default function Edit() {
  // useUser 훅으로부터 필요한 상태와 함수들을 가져옵니다.
  const { getUserInfo, loggedIn } = useUser()

  // 사용자의 프로필 이미지, 이름, 이메일, 새로운 비밀번호에 대한 상태들을 정의합니다.
  const [profileImage, setProfileImage] = React.useState<string>('')
  const [name, setName] = React.useState<string>('')
  const [email, setEmail] = React.useState<string>('')
  const [newPassword, setNewPassword] = React.useState<string>('')

  // useUser 훅으로부터 가져온 사용자 정보를 user 변수에 저장합니다.
  const user = getUserInfo()

  useEffect(() => {
    // 사용자가 로그인한 상태라면, useUser 훅으로부터 가져온 정보를 사용하여 상태를 업데이트합니다.
    if (loggedIn) {
      setProfileImage(() => (user?.profileImage ? user?.profileImage : ''))
      setName(() => (user?.fullName ? user?.fullName : ''))
      setEmail(() => (user?.email ? user?.email : ''))
    }
  }, [loggedIn])

  // 이름 변경 이벤트 핸들러
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  // 새로운 비밀번호 입력 이벤트 핸들러
  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value)
  }

  // 비밀번호 변경 함수
  const handlePasswordChange = () => {
    // API를 호출하여 새로운 비밀번호를 서버에 전달하고, 변경된 정보를 받아온다.
  }

  return (
    <div className='ml-4'>
      {/* 타이틀 */}
      <h2 className='text-2xl font-bold mb-4'>회원정보 수정</h2>

      {/* 프로필 이미지 영역 */}
      <div className='flex items-center mb-4'>
        <div className='w-16 h-16 overflow-hidden rounded-full mr-4'>
          <img src={profileImage} alt='Profile Image' />
        </div>

        {/* 회원정보 입력 영역 */}
        <div>
          {/* 이름 수정 input */}
          <input
            type='text'
            value={name}
            onChange={handleNameChange}
            className='border-b border-gray-300 mb-2'
          />
          {/* 이메일 출력 */}
          <p>Email: {email}</p>
          {/* 새로운 비밀번호 입력 input */}
          <input
            type='password'
            value={newPassword}
            onChange={handleNewPasswordChange}
            className='border-b border-gray-300'
          />
          {/* 비밀번호 변경 버튼 */}
          <button
            onClick={handlePasswordChange}
            className='px-4 py-2 mt-4 bg-blue-500 text-white rounded'
          >
            비밀번호 변경
          </button>
        </div>
      </div>
    </div>
  )
}
