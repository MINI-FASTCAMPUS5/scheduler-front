import api, { APIResponseBase } from '@/api/index'
import { User } from '@/models/user'

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
