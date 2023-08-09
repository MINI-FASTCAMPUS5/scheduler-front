import { AxiosResponse } from 'axios'
import api from './index'

interface ApiResponse<T> {
  data: T
}

export async function loginUser(email: string, password: string) {
  try {
    const response: AxiosResponse<ApiResponse<{ accessToken: string }>> = await api.post('/login', {
      email,
      password
    })
    return response.headers.authorization // 쿠키에 저장 토큰임
  } catch (err) {
    return null
  }
}

export async function signUpUser(
  email: string,
  password: string,
  fullName: string,
  profileImage: File | undefined,
  role: 'ADMIN' | 'USER'
) {
  try {
    const formData = new FormData()

    // 프로필 이미지가 있는 경우에만 FormData에 추가합니다.
    if (profileImage) {
      formData.append('file', profileImage)
    }

    formData.append(
      'dto',
      new Blob([JSON.stringify({ email, password, fullName, role })], {
        type: 'application/json'
      })
    )

    const response: AxiosResponse<ApiResponse<{ accessToken: string }>> = await api.post(
      '/join',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    )

    return response.data.data
  } catch (err) {
    console.error(err)
    return false
  }
}
