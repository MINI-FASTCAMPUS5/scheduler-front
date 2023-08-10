import React, { useEffect, useState } from 'react'
import Button from '@/components/ui/Button'
import { getProfileUpdatePage, updateUserInformation, uploadProfileImage } from '@/api/user/edit'
import { useCookies } from 'react-cookie'
import { ACCESS_TOKEN, DATE_ROUTE_FORMAT } from '@/constants'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'

export default function Edit() {
  const navigate = useNavigate()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookies, setCookie, removeCookie] = useCookies([ACCESS_TOKEN])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [profileImage, setProfileImage] = useState<string | null>(null)
  const [uploadedImage, setUploadedImage] = useState<File | null>(null) // 업로드할 이미지 파일을 상태로 관리
  const [role, setRole] = useState('')

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
          setRole(profileInfo.role)
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
    toast('회원 정보 수정이 취소되었습니다.', {
      position: 'top-center'
    })
    if (role === 'USER') {
      return navigate('/user/mypage')
    }
    return navigate(`/calendar/${dayjs(new Date()).format(DATE_ROUTE_FORMAT)}`)
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
    <div className='flex flex-col pt-2 pb-2 ml-8 mr-8 h-[100vh]'>
      <div className='flex flex-col font-bold text-4xl mt-10 font-gmarket'>
        회원정보 수정
        <div className='border-b-2 border-boxline mb-6 mt-3' />
      </div>
      <div className='flex items-center'>
        <div className='w-[110px] h-[110px] mb-10 flex items-center justify-center overflow-hidden border-2 rounded-full'>
          {profileImage !== null ? (
            <img src={profileImage} alt='Profile Image' />
          ) : (
            <img src='/mock_image/user_default.png' alt='Default Image' />
          )}
        </div>
        <label className='pt-8' htmlFor='profile-image-input'>
          <div className='bg-point px-3 min-w-[70px] text-center rounded-full text-white cursor-pointer hover:bg-wait transition-all ease-in-out duration-300 font-gmarket text-[14px] pt-[1px] font-bold'>
            이미지 수정
          </div>
        </label>
        <input
          type='file'
          id='profile-image-input'
          accept='image/*'
          style={{ display: 'none' }}
          onChange={handleImageUpload}
        />
      </div>
      <div className='flex flex-col w-full'>
        <div className='flex border-t-2'>
          <div className='flex w-[150px] h-[160px] bg-boxbg items-center justify-center text-[16px] font-gmarket font-bold'>
            계정
          </div>
          <div className='flex flex-col w-[500px] pl-10'>
            <div className='flex justify-between h-[50%] items-center'>
              이름
              <div className='flex flex-col items-start'>
                <div className='flex items-center'>
                  <input
                    type='text'
                    id='name'
                    value={name}
                    onChange={handleNameChange}
                    className='pl-2 h-[36px] w-[250px] bg-inputbox rounded-[10px]'
                    style={{ width: '250px' }}
                  />
                </div>
              </div>
            </div>
            <div className='flex justify-between h-[50%] items-center'>
              이메일
              <div className='flex flex-col items-start col-start-3 row-start-2 text-main font-bold mr-1'>
                <p>{email}</p> {/* 이메일 값 출력 */}
              </div>
            </div>
          </div>
        </div>
        <div className='flex border-t-2 border-b-2'>
          <div className='flex w-[150px] h-[160px] bg-boxbg items-center justify-center text-[16px] font-gmarket font-bold'>
            비밀번호
          </div>
          <div className='flex flex-col w-[500px] pl-10'>
            <div className='flex justify-between h-[50%] items-center'>
              비밀번호
              <div className='flex flex-col mb-4 items-start col-start-3 row-start-4 border-gray-300 pl-4 pt-2'>
                <div className='flex items-center'>
                  <input
                    type='password'
                    id='newPassword'
                    value={newPassword}
                    onChange={handleNewPasswordChange}
                    className='pl-2 h-[36px] w-[250px] bg-inputbox rounded-[10px] text-[12px] placeholder-[12px] flex items-center'
                    style={{ width: '250px' }}
                    placeholder='특수문자를 포함, 최소 8자 이상'
                  />
                </div>
              </div>
            </div>
            <div className='flex justify-between h-[50%] items-center'>
              비밀번호 확인
              <div className='flex flex-col mb-4 items-start col-start-3 row-start-4 border-gray-300 pl-4 pt-2'>
                <div className='flex items-center'>
                  <input
                    type='password'
                    id='confirmPassword'
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    className='pl-2 h-[36px] w-[250px] bg-inputbox rounded-[10px] text-[12px] placeholder-[12px] flex items-center'
                    style={{ width: '250px' }}
                    placeholder='특수문자를 포함, 최소 8자 이상'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex w-[650px] mt-4 justify-end'>
          <div className='flex'>
            <div
              onClick={handleCancel}
              className='flex w-[150px] rounded-[14px] justify-center items-center mr-2 bg-point cursor-pointer text-white transition font-gmarket font-bold hover:bg-wait'
            >
              취소
            </div>
            <Button
              text='수정 완료'
              size='lg'
              onClick={handleEditComplete}
              className='w-[150px] px-4 py-2 bg-main text-white font-gmarket font-bold'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
