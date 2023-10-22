import { User } from '@/models/user'
import api, { APIResponseBase } from './index'

export interface UserInformationAPIResponse extends APIResponseBase<User> {}

export const getUserInformationAPI = async (
  cookie: string
): Promise<{
  data: UserInformationAPIResponse['data']
}> => {
  const { data } = await api<UserInformationAPIResponse>({
    url: '/api',
    method: 'GET',
    headers: {
      Authorization: cookie
    }
  })
  return {
    data: data.data
  }
}
