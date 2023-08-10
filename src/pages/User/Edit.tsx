import React, { useEffect, useState } from 'react'
import Button from '@/components/ui/Button'
import { getProfileUpdatePage, updateUserInformation, uploadProfileImage } from '@/api/user/edit'
import { useCookies } from 'react-cookie'
import { ACCESS_TOKEN } from '@/constants'
import { toast } from 'react-toastify'

export default function Edit() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookies, setCookie, removeCookie] = useCookies([ACCESS_TOKEN])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [profileImage, setProfileImage] = useState<string | null>(null)
  const [uploadedImage, setUploadedImage] = useState<File | null>(null) // 업로드할 이미지 파일을 상태로 관리

  // getProfileUpdatePage
  // 프로필 수정 페이지에 처음 접속할 때, 현재 사용자의 프로필 정보를 불러오는 역할
  // useEffect 훅으로 렌더링 될 때 가져와서 상태에 저장
  useEffect(() => {
    async function fetchProfileInfo() {
      try {
        const profileInfo = await getProfileUpdatePage(cookies[ACCESS_TOKEN])
        if (profileInfo) {
          setName(profileInfo.fullName)
          setEmail(profileInfo.email)
          setProfileImage(profileInfo.profileImage)
        }
      } catch (error) {
        console.error('프로필 정보 가져오기 오류:', error)
      }
    }

    fetchProfileInfo()
  }, [cookies])

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value)
  }

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value)
  }

  // handleImageUpload 함수는 프로필 이미지를 선택하고 업로드하는 역할
  // 프로필 이미지를 선택하고 업로드하는 역할

  // uploadProfileImage 함수를 호출해서 실제로 이미지를 업로드하고 서버에 저장
  // 업로드한 이미지 URL을 받아서 상태 변수 profileImage에 저장

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0] as File
      setUploadedImage(selectedFile) // 업로드할 이미지 파일 상태 업데이트
      const fileReader = new FileReader()
      fileReader.onload = (event) => {
        const uploadedImageUrl = event.target?.result as string
        setProfileImage(uploadedImageUrl) // 임시 프로필 이미지 상태 업데이트
      }
      fileReader.readAsDataURL(selectedFile)
    }
  }

  // '취소' 버튼을 클릭했을 때 실행
  const handleCancel = async () => {
    toast('회원 정보 수정이 취소되었습니다.')
  }

  // 수정 완료 버튼을 클릭했을때 비밀번호 변경 누락...빠르게 다시 수정!!!

  // '수정 완료' 버튼을 클릭했을 때 실행되는 로직
  // 사용자가 입력한 변경 사항을 서버로 전송하여 프로필 정보를 업데이트
  const handleEditComplete = async () => {
    try {
      if (!newPassword || !confirmPassword) {
        toast.warn('비밀번호와 비밀번호 확인을 모두 입력해주세요.')
        return
      }

      if (newPassword !== confirmPassword) {
        toast.error('비밀번호가 일치하지 않습니다.')
        return
      }

      if (newPassword.length < 8 || !/[!@#$%^&*()_+{}[\]:;<>,.?~\-=/\\]/.test(newPassword)) {
        toast.error('비밀번호는 특수문자를 포함하고, 최소 8자 이상 입력해주세요.')
        return
      }

      await updateUserInformation(cookies[ACCESS_TOKEN], name, newPassword)

      if (uploadedImage) {
        // 업로드된 이미지가 있다면 실행
        await uploadProfileImage(cookies[ACCESS_TOKEN], uploadedImage) // 서버에 이미지 업로드
      }

      // 수정 완료 후 추가 동작
      setProfileImage(null) // 프로필 이미지 초기화
      setUploadedImage(null) // 업로드된 이미지 파일 상태 초기화
      removeCookie(ACCESS_TOKEN, { path: '/' })
      alert('회원 정보 수정이 완료되었습니다. 다시 로그인해주세요.')
      window.location.replace('/login')
    } catch (error) {
      console.error('에러 발생:', error)
    }
  }

  return (
    <div className='flex flex-col ml-4 p-4 h-screen'>
      <h1 className='text-3xl font-bold border-b-2 pb-2 mb-8'>회원정보 수정</h1>

      <div className='flex items-center'>
        <div className='w-24 h-24 mb-10 flex items-center justify-center overflow-hidden rounded-full'>
          {profileImage !== null ? (
            <img src={profileImage} alt='Profile Image' />
          ) : (
            <div>프로필 이미지 없음</div>
          )}
        </div>
        <Button
          text='수정'
          size='sm'
          className='bg-point text-white rounded ml-8'
          onClick={() => {
            document.getElementById('profile-image-input')?.click()
          }}
        />
        <input
          type='file'
          id='profile-image-input'
          accept='image/*'
          style={{ display: 'none' }}
          onChange={handleImageUpload}
        />
      </div>

      {/* 그리드로 수정된 영역 */}
      <div className='grid grid-cols-3 grid-rows-4 min-w-[720px] max-w-[1392px]'>
        {/* 1 */}
        <div className='row-span-2 flex items-start border-t border-gray-300 bg-boxbg pl-4 pt-2'>
          <label htmlFor='name' className='text-sm font-medium'>
            계정
          </label>
        </div>

        {/* 2 */}
        <div className='flex flex-col mb-4 items-start border-t border-gray-300 pl-4 pt-2'>
          <label htmlFor='name' className='text-sm font-medium'>
            이름
          </label>
        </div>

        {/* 3 */}
        <div className='flex flex-col mb-4 items-start border-t border-gray-300 pl-4 pt-2'>
          <div className='flex items-center'>
            <input
              type='text'
              id='name'
              value={name}
              onChange={handleNameChange}
              className='border p-2 rounded mr-2'
              style={{ width: '250px' }}
            />
          </div>
        </div>

        {/* 4 */}
        <div className='flex flex-col mb-4 items-start col-start-2 row-start-2 pl-4 pt-2'>
          <label htmlFor='email' className='text-sm font-medium'>
            이메일
          </label>
        </div>

        {/* 5 */}
        <div className='flex flex-col mb-4 items-start col-start-3 row-start-2 pl-4 pt-2'>
          <p>{email}</p> {/* 이메일 값 출력 */}
        </div>

        {/* 6 */}
        <div className='flex flex-col mb-4 items-start row-span-2 row-start-3 border-t border-b border-gray-300 bg-boxbg pl-4 pt-2'>
          <label htmlFor='newPassword' className='text-sm font-medium'>
            비밀번호
          </label>
        </div>

        {/* 7 */}
        <div className='flex flex-col mb-4 items-start row-start-3 border-t border-gray-300 pl-4 pt-2'>
          <label htmlFor='newPassword' className='text-sm font-medium'>
            비밀번호
          </label>
        </div>

        {/* 8 */}
        <div className='flex flex-col mb-4 items-start row-start-3 border-t border-gray-300 pl-4 pt-2'>
          <div className='flex items-center'>
            <input
              type='password'
              id='newPassword'
              value={newPassword}
              onChange={handleNewPasswordChange}
              className='border p-2 rounded mr-2'
              style={{ width: '250px' }}
              placeholder='특수문자를 포함, 최소 8자 이상'
            />
          </div>
        </div>

        {/* 9 */}
        <div className='flex flex-col mb-4 items-start col-start-2 row-start-4 border-b border-gray-300 pl-4 pt-2'>
          <label htmlFor='confirmPassword' className='text-sm font-medium'>
            비밀번호 확인
          </label>
        </div>

        {/* 10 */}
        <div className='flex flex-col mb-4 items-start col-start-3 row-start-4 border-b border-gray-300 pl-4 pt-2'>
          <div className='flex items-center'>
            <input
              type='password'
              id='confirmPassword'
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className='border p-2 rounded mr-2'
              style={{ width: '250px' }}
              placeholder='특수문자를 포함, 최소 8자 이상'
            />
          </div>
        </div>
      </div>

      <div className='flex justify-center'>
        <Button
          text='취소'
          size='lg'
          onClick={handleCancel}
          className='w-[150px] px-4 py-2 mr-2 bg-point text-white rounded'
        />
        <Button
          text='수정 완료'
          size='lg'
          onClick={handleEditComplete}
          className='w-[150px] px-4 py-2 bg-main text-white rounded'
        />
      </div>
    </div>
  )
}
