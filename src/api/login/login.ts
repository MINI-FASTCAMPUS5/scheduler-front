import { User } from '@/models/user'
import api, { APIResponseBase } from '../index'

export interface LoginResponse extends APIResponseBase<User> {
  token: string
}

export async function LoginAPI(
  email: string,
  password: string
): Promise<{
  data: LoginResponse['data']
  token: LoginResponse['token']
}> {
  const response = await api<LoginResponse>('/login', {
    method: 'POST',
    data: {
      email: email,
      password: password
    },
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return {
    data: response.data.data,
    token: response.headers.authorization
  }
}
