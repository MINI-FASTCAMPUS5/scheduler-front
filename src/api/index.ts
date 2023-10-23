import axios from 'axios'

export interface APIResponseBase<T> {
  data: T
  status: number
  msg: string
}
const api = axios.create({
  baseURL: import.meta.env.VITE_BACK_URL
})
export default api
