import React, { useEffect, useState } from 'react'
import Button from '@/components/ui/Button'
import { getProfileInfo, updateUserProfile } from '@/api/userEdit'
//uploadProfileImage
import { useCookies } from 'react-cookie'

export default function Edit() {
  const [cookies] = useCookies(['AccessToken'])

  //const [profileImage, setProfileImage] = useState<File | null>(null)
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [newPassword, setNewPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')

  useEffect(() => {
    async function fetchProfileInfo() {
      try {
        const profileInfo = await getProfileInfo(cookies.AccessToken)
        //setProfileImage(profileInfo.data.profileImage)
        setName(profileInfo.data.fullName)
        setEmail(profileInfo.data.email)
      } catch (error) {
        console.error('프로필 정보 가져오기 오류:', error)
      }
    }

    fetchProfileInfo()
  }, [cookies.AccessToken])

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value)
  }

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value)
  }

  const handleCancel = () => {
    // 취소 버튼 클릭 시 동작할 내용 추가
  }

  const handleEditComplete = async () => {
    try {
      if (newPassword !== confirmPassword) {
        console.error('비밀번호가 일치하지 않습니다.')
        return
      }

      await updateUserProfile(cookies.AccessToken, name, newPassword)

      // if (profileImage !== null) {
      //   const imageUrl = URL.createObjectURL(profileImage)
      //   await uploadProfileImage(cookies.AccessToken, profileImage)
      //   setProfileImage(imageUrl)
      // }

      // 수정 완료 후 추가 동작
    } catch (error) {
      console.error('에러 발생:', error)
    }
  }

  return (
    <div className='flex flex-col ml-4 p-4 h-screen'>
      <h1 className='text-3xl font-bold border-b-2 pb-2 mb-8'>회원정보 수정</h1>

      <div className='flex items-center'>
        <div className='w-24 h-24 mb-10 flex items-center justify-center overflow-hidden rounded-full'>
          {/* {profileImage !== null ? (
            <img src={profileImage} alt='Profile Image' />
          ) : (
            <div>프로필 이미지 없음</div>
          )} */}
        </div>
        <Button
          text='수정'
          size='sm'
          className='bg-point text-white rounded ml-8'
          onClick={() => {
            document.getElementById('profile-image-input')?.click()
          }}
        />
        {/* <input
          type='file'
          id='profile-image-input'
          accept='image/*'
          style={{ display: 'none' }}
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              const selectedFile = e.target.files[0] as File
              const fileReader = new FileReader()
              fileReader.onload = (event) => {
                const uploadedImageUrl = event.target?.result as string
                setProfileImage(uploadedImageUrl)
              }
              fileReader.readAsDataURL(selectedFile)
            }
          }}
        /> */}
      </div>

      {/* 그리드로 수정된 영역 */}
      <div className='grid grid-cols-3 grid-rows-4 min-w-[720px] max-w-[1392px]'>
        {/* 1 */}
        <div className='row-span-2 flex items-start border-t border-gray-300 bg-boxbg'>
          <label htmlFor='name' className='text-sm font-medium'>
            계정
          </label>
        </div>

        {/* 2 */}
        <div className='flex flex-col mb-4 items-start border-t border-gray-300'>
          <label htmlFor='name' className='text-sm font-medium'>
            이름
          </label>
        </div>

        {/* 3 */}
        <div className='flex flex-col mb-4 items-start border-t border-gray-300'>
          <div className='flex items-center'>
            <input
              type='text'
              id='name'
              value={name}
              onChange={handleNameChange}
              className='border p-2 rounded mr-2'
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
        <div className='flex flex-col mb-4 items-start row-span-2 row-start-3 border-t border-b border-gray-300 bg-boxbg'>
          <label htmlFor='newPassword' className='text-sm font-medium'>
            비밀번호
          </label>
        </div>

        {/* 7 */}
        <div className='flex flex-col mb-4 items-start row-start-3 border-t border-gray-300'>
          <label htmlFor='newPassword' className='text-sm font-medium'>
            비밀번호
          </label>
        </div>

        {/* 8 */}
        <div className='flex flex-col mb-4 items-start row-start-3 border-t border-gray-300'>
          <div className='flex items-center'>
            <input
              type='password'
              id='newPassword'
              value={newPassword}
              onChange={handleNewPasswordChange}
              className='border p-2 rounded mr-2'
              placeholder='********'
            />
          </div>
        </div>

        {/* 9 */}
        <div className='flex flex-col mb-4 items-start col-start-2 row-start-4 border-b border-gray-300'>
          <label htmlFor='confirmPassword' className='text-sm font-medium'>
            비밀번호 확인
          </label>
        </div>

        {/* 10 */}
        <div className='flex flex-col mb-4 items-start col-start-3 row-start-4 border-b border-gray-300'>
          <div className='flex items-center'>
            <input
              type='password'
              id='confirmPassword'
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className='border p-2 rounded mr-2'
              placeholder='********'
            />
          </div>
        </div>
      </div>

      <div className='flex'>
        <Button
          text='취소'
          size='lg'
          onClick={handleCancel}
          className='px-4 py-2 mr-4 bg-point text-white rounded'
        />
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
