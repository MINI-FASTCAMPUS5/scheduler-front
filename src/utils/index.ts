// * mock API 테스트용 delay 함수

import { isAxiosError } from 'axios'

/**
 * @description mock API 테스트용 delay 함수
 */
export const delay = async <T>(mock: T, ms: number): Promise<T> =>
  new Promise((response) =>
    setTimeout(() => {
      response(mock)
    }, ms)
  )

export async function to<T>(promise: Promise<T>): Promise<[{ message: string } | null, T | null]> {
  try {
    const data = await promise
    const result: [null, T] = [null, data]
    return result
  } catch (error) {
    if (import.meta.env.MODE === 'development') console.error(error)
    console.error(error)
    if (!isAxiosError(error) || typeof error !== 'object' || !('message' in error)) {
      return [{ message: '알 수 없는 에러가 발생했습니다.' }, null]
    }

    if (typeof error.response?.data.data === 'string') {
      return [{ message: error.response.data.data }, null]
    }

    if (typeof error.response?.data.message === 'string') {
      return [{ message: error.response.data.message }, null]
    }

    return [{ message: '알 수 없는 에러가 발생했습니다.' }, null]
  }
}
