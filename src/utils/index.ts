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
