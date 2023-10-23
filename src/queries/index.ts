import { toast } from '@/utils/toast'
import { AxiosError, isAxiosError } from 'axios'

interface ErrorResponseBase {
  msg: string
  status: number
  data?: unknown
}
export const handleError = (error: unknown) => {
  let status = 500
  let msg: string = '알 수 없는 에러가 발생했습니다.'
  if (isAxiosError<ErrorResponseBase>(error)) {
    if (error.response?.data.msg) msg = error.response?.data.msg
    if (error.response?.data.status) status = error.response?.data.status
    else if (error.response?.status) status = error.response?.data.status
    switch (status) {
      case 404:
        handle404()
        break
      case 500:
        handle500(error)
        break
      default:
        handleDefault(error)
        break
    }
    return
  }
  toast(msg, 'error')
}

const handle404 = () => {
  return window.location.assign('/404')
}

const handle500 = (error: AxiosError<ErrorResponseBase>) => {
  //   window.location.assign('/500')
  toast(error.response?.data.msg ?? '', 'error')
}

const handleDefault = (error: AxiosError<ErrorResponseBase>) => {
  //   window.location.assign('/500')
  toast(error.response?.data.msg ?? '', 'error')
}
