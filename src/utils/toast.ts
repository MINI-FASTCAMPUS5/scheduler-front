import { toast as reactToast, type ToastOptions, type TypeOptions } from 'react-toastify'

interface ToastPrams {
  message: string
  options: ToastOptions
}
export function toast(
  message: ToastPrams['message'],
  type: TypeOptions,
  options: ToastPrams['options'] = {
    autoClose: 2000
  }
) {
  reactToast(message, {
    type,
    ...options
  })
}
