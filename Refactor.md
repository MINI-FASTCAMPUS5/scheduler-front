1. toast 함수로 빼기
2. [O] settings.json "source.organizeImports": true
3. [O] 불필요한 주석 제거
4. svg 색상만 다른 경우 currentColor (YeonGanIdolLogoWhite.svg)
5. CalendarAction.tsx => user === "admin" 위로 올리고 SwiteCase 컴포넌트
6. [x] 불필요한 익명함수 제거 @@@ (type 지정이 번거로운데 어떻게 하는게 좋을까?) @@@
7. [O] src/components/calendar/CalendarSwiper.tsx 두 번 실행 제거
8. [배럴 파일 진행 중...] src/components/calendar/Daily.tsx treeShaking 막기 named export + 배럴 파일
9. [O] bgStyle 지우기
10. [O] App.css 삭제
11. [O] 비어있는 엠티 파일인데 import 할 필요가 있을까요?! @App.css
12. [O] 'WAITING' | 'ACCEPT' | 'REFUSE', 'USER' | 'ADMIN' d.ts 이동
13. [O] profileImage?: File api/api.ts
14. URL env
15. axios instance단에서 interceptor처리
16. [O] src/api/schedule/index.ts 변수명 s 수정
17. 제네릭으로 활용해서 타입 추론을 하는 연습을 해보세요! (api 함수 호출 부분)
18. [O] dayjs(new Date()) => dayjs()
19. [O] src/components/AdminActionBar.tsx 한 줄로 import
20. [O] src/components/AdminActionBar.tsx 사이드바 개선 (사진 참고)
21. [O] !menu 제어문 제거
22. [O] src/components/Banner.tsx type?: 이렇게 선언하셔야 합니다.
23. [O] `tsconfig와 eslint를 같이 수정하면 불필요하게 import 를 할 필요가 없습니다.
어떻게 하면 없앨 수 있는지 한 번 공부해보세요!`
24. [O] 'react/jsx-no-useless-fragment': 'error' 을 다시면 불필요한 fragment를 지울 수 있습니다!
25. src/components/SideBar.tsx
26. let calendarPath =
    year && month && day
    ? `/calendar/${year}/${month}/${day}`
    : `/calendar/${dayjs(new Date()).format(DATE_ROUTE_FORMAT)}` 훅으로 뺴기
27. [O] VoidFunction 활용
28. src/components/calendar/AddFormInformation.tsx 유효성 검사가 가장 먼저 이루어져야, 불필요하게 file 관련된 스크립트가 실행되는 걸 막아줄 수 있을 것 같아요
29. src/components/calendar/AddFormInformation.tsx 이미지 src= {imgSrc || '/mock_image/event_default.jpg'}로 수정
30. 오타 잡는 extention spell
31. mutation은 파일로 관리해서 return 해주게 처리하는 게 관리가 편리합니다!

```
const useReserveMutation = () => {
  return useMutation({})
}
```

32. src/components/calendar/CalendarAction.tsx

```
user === "admin" 을 맨 위로 올려서 한 번만 검증하고,

type 별로 SwitchCase를 적용하면 가독성이 더 좋아질 것 같습니다.
```

```
import useSchedule from '@/hooks/schedule'
import useResize from '@/hooks/resize'
import useUser from '@/hooks/user'
import useHover from '@/hooks/hover'

이 부분 named export로 트리쉐이킹 막고, 여러 함수를 배럴로 호출가능
```

- [O] bgStyle 삭제
