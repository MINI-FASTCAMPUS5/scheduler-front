import api from '@/api'

export type UserProfileResponse = {
  id: string
  email: string
  fullName: string
  profileImage: string
  role: 'USER'
  sizeOfTicket: number
  usedTicket: number
}

// 프로필 수정 페이지 조회 API 요청 함수
export const getProfileUpdatePage = async (cookie: string): Promise<UserProfileResponse | null> => {
  try {
    const res = await api({
      url: '/mypage/update',
      method: 'GET',
      headers: {
        Authorization: cookie
      }
    })

    if (res.data.data) return res.data.data
    return null
  } catch (error) {
    console.error(error)
    return null
  }
}

// 프로필 이미지 등록/변경 API 요청 함수
export const uploadProfileImage = async (
  cookie: string,
  imageFile: File
): Promise<UserProfileResponse | null> => {
  try {
    const formData = new FormData()
    formData.append('file', imageFile)

    const res = await api({
      url: '/mypage/update/image',
      method: 'POST',
      headers: {
        Authorization: cookie
      },
      data: formData
    })

    if (res.data.data) return res.data.data
    return null
  } catch (error) {
    console.error(error)
    return null
  }
}

// 프로필 이미지 삭제 API 요청 함수
export const deleteProfileImage = async (cookie: string): Promise<UserProfileResponse | null> => {
  try {
    const res = await api({
      url: '/mypage/delete/image',
      method: 'POST',
      headers: {
        Authorization: cookie
      }
    })

    if (res.data.data) return res.data.data
    return null
  } catch (error) {
    console.error(error)
    return null
  }
}

// 사용자 정보 변경 API 요청 함수
type RequestData = {
  [key: string]: string | undefined
}

export const updateUserInformation = async (
  cookie: string,
  fullName: string | null,
  password: string | null
): Promise<UserProfileResponse | null> => {
  try {
    const requestData: RequestData = {}
    if (fullName !== null) requestData['fullName'] = fullName
    if (password !== null) requestData['password'] = password

    const res = await api({
      url: '/mypage/update',
      method: 'POST',
      headers: {
        Authorization: cookie
      },
      data: requestData
    })

    if (res.data.data) return res.data.data
    return null
  } catch (error) {
    console.error(error)
    return null
  }
}
