# 환경 설정 데모 저장소

## Vite

`npm create vite@latest`

react, typescript로 설정합니다

## eslint & prettier

vite에서 eslint를 제공하지만 'self-closing-comp'를 사용하기 위해서 `
eslint-plugin-react`를 추가로 설치합니다.

## Github

issue와 project 칸반 보드를 사용해서 로그를 관리합니다.

### Commit message

wiki에 따로 남겨두겠습니다!

## alias

```js
// tsconfig.json
"CompilerOptions" : {
   "baseUrl": "./src",
   "paths": {
     "@/*": ["*"]
   }
}
```

tsconfigPaths를 사용해서 typescript alias를 가져옵니다.

`npm install --save-dev vite-tsconfig-paths`

```js
// vite.config.ts
// tsconfigPaths를 사용해서 typescript alias를 가져옵니다.
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), tsconfigPaths()]
})
```

## react-query v4에서 변경된 내용

https://maxkim-j.github.io/posts/tanstack-query-v4-preview/

react-query에서 @tanstack/react-query로 이름이 변경되면서

react외 다른 프레임워크, 라이브러리를 지원합니다.

### status

v4에서는 기존 useQuery의 리턴값 중 하나였던 status가 fetchStatus와 status로 나뉩니다.

```
status: data, 쿼리 결과값에 대한 정보를 나타냄
loading: 아직 data가 없음
error: data는 없고 에러가 있음
success: data가 있음
fetchStatus: queryFn에 대한 정보를 나타냄
idle: 쿼리가 아무것도 안하고 있는 상태
paused: 쿼리가 패칭을 시도했지만 일시중지된 상태. network mode와 연관
fetching: 쿼리가 패칭중인 상태
```

### networdMode

v4에서는 query와 mutation의 명시적인 오프라인 모드를 제공하는 기능인 networkMode 옵션이 추가되었습니다.

offline 상태일때를 대비가능, 링크 참고 (지금은 필요하진 않음)

### Query Filters

```js
// 모든 쿼리를 취소
await queryClient.cancelQueries()
​
// 'posts'키로 시작하는 모든 inactive qurries를 제거
// Remove all inactive queries that begin with `posts` in the key
queryClient.removeQueries({ queryKey: ['posts'], type: 'inactive' })
​
// 'active' 상태인 쿼리들을 모두 refetch 즉 현제 페이지에서 쓰는 API전부 refetch
// Refetch all active queries
await queryClient.refetchQueries({ type: 'active' })
​
// 'pots'키로 시작하는 모든 active 쿼리를 refetch (즉 화면에 표시되고 있는 모든 posts로 시작하는 데이터를 refetch)
// Refetch all active queries that begin with `posts` in the key
await queryClient.refetchQueries({ queryKey: ['posts'], type: 'active' })
```

### onSuccess로 setQueryData 하지말기

아래와 같이 사용하잔

```js
const { data } = useQuery({ queryKey, queryFn })
React.useEffect(() => mySideEffectHere(data), [data])
```

### Tracked Query per default

data가 변경되지 않으면 리랜더링을 하지 않음

```js
// V4
function User() {
  // notifyOnChangeProps가 없어도 data가 바뀌었을 때만 리렌더링
  const { data } = useQuery('user', fetchUser)
  return <div>Username: {data.username}</div>
}
```

### callback이 undefined일 경우 데이터가 업데이트 되지 않음

아래 예시는 리렌더링이 일어나지 않는다.

```js
queryClient.setQueryData(['todo', id], (previousTodo) => (previousTodo ? { ...previousTodo, done: true } : undefined))
```

### interface 변화

queryKey로 반드시 배열을 넘길 것

```js
useQuery(['todos'], fetchTodos)
```

useQueries 사용 방법 변화

ueryFn이 undefined를 리턴할 수 없도록 타입, 런타임 단에서 동시에 막습니다

```js
useQueries({
  queries: [
    { queryKey1, queryFn1, options1 },
    { queryKey2, queryFn2, options2 }
  ]
})
```

### 추가로

5버전이 나오고 있습니다.

주 변경 사항은 onSuccess cb이 잘못된 방법으로 사용되기 때문에 삭제한다는 점과

클라이언트 상태 관리 라이브러리와의 호환 문제가 주요 변경 사항입니다.

https://velog.io/@cnsrn1874/breaking-react-querys-api-on-purpose

## react query 사용 방법

### useQuery기본 사용 방법

1. context API로 react-query를 감싸주는 것 보여주고 설명하기
2. Sample 페이지에서 useQuery를 사용하는 방법 보여주기

### staleTime, cacheTime

2. staleTime, cacheTime에 대해서 설명해주기

#### staleTime

staleTime : staleTime이 지나면 특정 조건에 부합할 경우 refetch를 합니다.

특정 조건이란

1. 페이지 이동 후 다시 돌아올때 (새로운 query instance가 마운트 됨)
2. 브라우저화면 이탈 후 다시 돌아올 떄
3. 네트워크가 다시 연결 될 때
4. 설정된 refetch interval에 의한 retfetch

즉 staleTime이 지나고 페이지를 나가면 다시 refetch한다고 보면 됩니다.

staleTime이 지난 data를 stale data, staleTime이 지나지 않는 data를 fresh data라고 합니다.

default : 0로 설정되어 있습니다.

> staleTime 0일 경우 아닐경우 보여주기

#### cacheTime

cacheTime : cacheTime이 지나면 cache를 삭제합니다.

default : 5min으로 5분이 지나면 gc됩니다.

추가로 refetch된 data가 기존 데이터와 같을 경우 react-query는 rerendering을 하지 않는데 (react-query v4 버전 이후, 위 Tracked Query per default 부분을 참고)

cacheTime이 0일 경우 비교할 수 있는 데이터가 없기 때문에 반드리 rerendering이 일어나게 됩니다.

## useMutaion

## onSuccess

Optimistic 페이지에서 onSuccess에 대해서 보여주기

## Optimistic UI

invalidateQueries가 동작하지 않는다면 Optimistic임을 알려주고

**추가된 데이터를 백엔드에서 가져오는 것이 아니라 바로 화면에 뿌려주면 얼마나 빠르게 동작되는지 극단적인 예시로 보여주기**

## onError

error시 roleback을 어떻게하는지 onError에서 보여주기

## mutataion의 status

mutaion.isLoading, idle, isError알려주기
