# Front Scheduler

아래 내용은 Wiki로 이동될 내용입니다!

## 개발 가이드

### 페이지 구조

**src/main.tsx**

Global context를 다루는 파일입니다.

`react-router-dom`의 Provider와 User Context(로그인 한 유저 정보)가 이곳에 래핑되어 있습니다.

**src/App.tsx**

라우터를 작성하는 파일입니다.

`react-router-dom`을 사용합니다

**src/pages/\***

페이지를 이곳에 생성합니다.

**src/components/\***

모든 컴포넌트는 이곳에 생성합니다.

layout 컴포넌트는 **src/components/layouts/\***에 생성합니다.

그룹화가 가능한 컴포넌트라면 하위 폴더를 만드셔도 무방합니다.

```
# 편한방식으로 해주세요.

src/components/layout/sidebar

src/components/layout/ui

src/components/loginPage
```

**src/models/\***

백엔드 API Response type을 정의합니다.

**src/mocks/\***

백엔드 API 명세서를 참고하여 mock data를 정의합니다.

**src/hooks/\***

hooks는 이 곳에 정의해주세요

**/src/api/\***

react-query의 fetcher에 해당하는 함수는 이곳에 정의해주세요.

예를들어서 아래처럼 작성해주시면 됩니다.

```js
// api/calendar.ts
export async function getMonthlyCalendar(year: number, month: number) {
  try {
  const response = await axios.get<CalendarResponse>(
    `${process.env.REACT_APP_API_URL}/calendar/${year}/${month}`
  );
  return response.data;
  } catch (error) {
    process.env.NODE_ENV === 'development' && console.error(error)
    return []
  }
}

// src/pages/calendar.tsx
import { useQuery } from 'react-query'
import { getMonthlyCalendar } from '@/api/calendar'
import {CALENDAR_STALE_TIME} from '@/constants'

// useQuery가 장황하다면 hooks로 빼셔도 됩니다! 편한방식으로 해주세요.
const {data, isLoading} = useQuery(['calendar', year, month], () => getMonthlyCalendar(year, month), {
  enabled: !!year && !!month
  staleTime: CALENDER_STALE_TIME
})
```

**src/constants/\***

상수는 이곳에 작성해주세요.

예를들어 regex, date format, 고정된 자산의 URL (가짜로 사용할 배너 URL) 등이 있습니다.

**src/utils/\***

아래처럼 로직이 장황하다면 utils로 함수를 뺴주세요.

컴포넌트의 사이즈가 작다면 굳이 빼지 않으셔도 됩니다. (가독성이 좋을 것 같은 방향으로 작성해주세요!)

```js
/**
 * @description mock API 테스트용 delay 함수
 */
export const delay = async <T>(mock: T, ms: number): Promise<T> =>
  new Promise((response) =>
    setTimeout(() => {
      response(mock)
    }, ms)
  )
```
