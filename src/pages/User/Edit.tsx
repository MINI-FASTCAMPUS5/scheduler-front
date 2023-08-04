import useUser from '@/hooks/user'
import Button from '@/components/ui/Button'
import React, { useEffect } from 'react'

export default function Edit() {
  // useUser 훅으로부터 필요한 상태와 함수들을 가져온다.
  const { getUserInfo, loggedIn } = useUser()

  // 사용자의 프로필 이미지, 이름, 이메일, 새로운 비밀번호에 대한 상태들을 정의한다.
  const [profileImage, setProfileImage] = React.useState<string>('')
  const [name, setName] = React.useState<string>('')
  const [email, setEmail] = React.useState<string>('')
  const [newPassword, setNewPassword] = React.useState<string>('')
  const [confirmPassword, setConfirmPassword] = React.useState<string>('')

  // useUser 훅으로부터 가져온 사용자 정보를 user 변수에 저장한다.
  const user = getUserInfo()

  useEffect(() => {
    // 사용자가 로그인한 상태라면, useUser 훅으로부터 가져온 정보를 사용하여 상태를 업데이트한다.
    if (loggedIn) {
      setProfileImage(() => (user?.profileImage ? user?.profileImage : ''))
      setName(() => (user?.fullName ? user?.fullName : ''))
      setEmail(() => (user?.email ? user?.email : ''))
    }
  }, [loggedIn, user?.email, user?.fullName, user?.profileImage])

  // 이름 변경 이벤트 핸들러
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  // 새로운 비밀번호 입력 이벤트 핸들러
  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value)
  }

  // 비밀번호 확인 입력 이벤트 핸들러
  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value)
  }

  // "취소" 버튼 클릭 핸들러
  const handleCancel = () => {
    // 취소 버튼 클릭 시 동작할 내용을 작성
  }

  // "수정 완료" 버튼 클릭 핸들러
  const handleEditComplete = () => {
    // 수정 완료 버튼 클릭 시 동작할 내용을 작성
  }

  return (
    <div className='flex flex-col ml-4 p-4 h-screen'>
      {/* 타이틀 */}
      <h1 className='text-3xl font-bold border-b-2 pb-2 mb-8'>회원정보 수정</h1>

      <div className='flex items-center'>
        {/* 프로필 이미지 영역 */}
        <div className='w-24 h-24 mb-10 flex items-center justify-center overflow-hidden rounded-full'>
          <img src={profileImage} alt='Profile Image' />
        </div>
        {/* "수정" 버튼 */}
        <Button
          text='수정'
          size='sm'
          className='w-20 bg-point text-white rounded ml-8'
          onClick={() => {
            // "수정" 버튼을 클릭하면 숨겨진 파일 선택 창을 트리거한다.
            document.getElementById('profile-image-input')?.click()
          }}
        />
        {/* 숨겨진 파일 입력 창 */}
        <input
          type='file'
          id='profile-image-input'
          accept='image/*'
          style={{ display: 'none' }}
          onChange={(e) => {
            // 여기서 선택된 파일을 처리합니다.
            if (e.target.files && e.target.files[0]) {
              const fileReader = new FileReader()
              fileReader.onload = (event) => {
                const uploadedImageUrl = event.target?.result as string
                // 선택한 이미지로 프로필 이미지를 설정합니다.
                setProfileImage(uploadedImageUrl)
              }
              fileReader.readAsDataURL(e.target.files[0])
            }
          }}
        />
      </div>

      {/* 그리드로 수정된 영역 */}
      <div className='grid grid-cols-3 grid-rows-4 gap-4 min-w-[720px] max-w-[1392px]'>
        {/* 1 */}
        <div className='row-span-2 flex items-start'>
          <label htmlFor='name' className='text-sm font-medium'>
            계정
          </label>
        </div>

        {/* 2 */}
        <div className='flex flex-col mb-4 items-start'>
          <label htmlFor='name' className='text-sm font-medium'>
            이름
          </label>
        </div>

        {/* 3 */}
        <div className='flex flex-col mb-4 items-start'>
          <div className='flex items-center'>
            <input
              type='text'
              id='name'
              value={name}
              onChange={handleNameChange}
              className='border-b border-gray-300 mr-2'
            />
          </div>
        </div>

        {/* 4 */}
        <div className='flex flex-col mb-4 items-start col-start-2 row-start-2'>
          <label htmlFor='email' className='text-sm font-medium'>
            이메일
          </label>
        </div>

        {/* 5 */}
        <div className='flex flex-col mb-4 items-start col-start-3 row-start-2'>
          <p id='email'>{email}</p>
        </div>

        {/* 6 */}
        <div className='flex flex-col mb-4 items-start row-span-2 row-start-3'>
          <label htmlFor='newPassword' className='text-sm font-medium'>
            비밀번호
          </label>
        </div>

        {/* 7 */}
        <div className='flex flex-col mb-4 items-start row-start-3'>
          <label htmlFor='newPassword' className='text-sm font-medium'>
            비밀번호
          </label>
        </div>

        {/* 8 */}
        <div className='flex flex-col mb-4 items-start row-start-3'>
          <div className='flex items-center'>
            <input
              type='password'
              id='newPassword'
              value={newPassword}
              onChange={handleNewPasswordChange}
              className='border-b border-gray-300 mr-2'
              placeholder='********'
            />
          </div>
        </div>

        {/* 9 */}
        <div className='flex flex-col mb-4 items-start col-start-2 row-start-4'>
          <label htmlFor='confirmPassword' className='text-sm font-medium'>
            비밀번호 확인
          </label>
        </div>

        {/* 10 */}
        <div className='flex flex-col mb-4 items-start col-start-3 row-start-4'>
          <div className='flex items-center'>
            <input
              type='password'
              id='confirmPassword'
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className='border-b border-gray-300 mr-2'
              placeholder='********'
            />
          </div>
        </div>
      </div>

      {/* 버튼들은 그대로 유지합니다. */}
      <div className='flex'>
        {/* "취소" 버튼 */}
        <Button
          text='취소'
          size='lg'
          onClick={handleCancel}
          className='px-4 py-2 mr-4 bg-point text-white rounded'
        />
        {/* "수정 완료" 버튼 */}
        <Button
          text='수정 완료'
          size='lg'
          onClick={handleEditComplete}
          className='px-4 py-2 bg-main text-white rounded'
        />
      </div>
    </div>
  )
}
