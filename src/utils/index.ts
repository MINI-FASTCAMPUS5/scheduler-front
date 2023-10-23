// * mock API 테스트용 delay 함수
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
    console.error(error)
    if (error && typeof error === 'object' && 'message' in error) {
      return [{ message: `${error.message}` }, null]
    }
    return [{ message: '알 수 없는 에러가 발생했습니다.' }, null]
  }
}
