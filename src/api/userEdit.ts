import api from '@/api/index'

const baseURL = 'http://minischeduler-env.eba-m9yfe83y.ap-northeast-2.elasticbeanstalk.com'

// 프로필 정보 가져오기 API 호출 함수
export const getProfileInfo = async (token: string) => {
  try {
    const response = await api.get('/mypage/update', {
      baseURL,
      headers: { Authorization: `Bearer ${token}` }
    })
    // eslint-disable-next-line no-console
    console.log('여기', response)
    return { success: true, data: response.data }
  } catch (error) {
    console.error('프로필 정보 가져오기 오류:', error)
    return { success: false, error }
  }
}

// eslint-disable-next-line no-console

// 프로필 이미지 업로드 API 호출 함수
export const uploadProfileImage = async (token: string, imageFile: File) => {
  const formData = new FormData()
  formData.append('file', imageFile)

  try {
    const response = await api.post('/mypage/update/image', formData, {
      baseURL,
      headers: { Authorization: `Bearer ${token}` }
    })
    return { success: true, data: response.data }
  } catch (error) {
    console.error('프로필 이미지 업로드 오류:', error)
    return { success: false, error }
  }
}

// 마이페이지 정보 가져오기
export const getMyPageInfo = async (token: string, role: string) => {
  try {
    const response = await api.get(`/mypage?role=${role}`, {
      baseURL,
      headers: { Authorization: `Bearer ${token}` }
    })
    return { success: true, data: response.data }
  } catch (error) {
    console.error('마이페이지 정보 가져오기 오류:', error)
    return { success: false, error }
  }
}

// 프로필 이미지 삭제
export const deleteProfileImage = async (token: string) => {
  try {
    const response = await api.post('/mypage/delete/image', null, {
      baseURL,
      headers: { Authorization: `Bearer ${token}` }
    })
    return { success: true, data: response.data }
  } catch (error) {
    console.error('프로필 이미지 삭제 오류:', error)
    return { success: false, error }
  }
}

// 사용자 정보 변경
export const updateUserProfile = async (token: string, fullName: string, password: string) => {
  const requestBody = {
    fullName,
    password
  }

  try {
    const response = await api.post('/mypage/update/user', requestBody, {
      baseURL,
      headers: { Authorization: `Bearer ${token}` }
    })
    return { success: true, data: response.data }
  } catch (error) {
    console.error('사용자 정보 변경 오류:', error)
    return { success: false, error }
  }
}
