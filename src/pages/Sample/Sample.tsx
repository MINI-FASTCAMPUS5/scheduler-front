import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'

function getPosts(postNumber: number) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postNumber}`).then((res) => res.json())
}

type Post = {
  userId?: number
  title?: string
}

export default function Sample() {
  const [postNumber, setPostNumber] = useState(1)

  //  * key는 반드시 배열
  const { data, isLoading, error } = useQuery<Post, Error>(
    ['post', postNumber],
    () => getPosts(postNumber),
    {
      // * staleTiem : fresh 상태일 때는 Refetch 트리거(위의 3가지 경우)가 발생해도 Refetch가 일어나지 않는다!
      staleTime: 1000 * 60 * 5,
      // * inactive상태일 때 (unmount시 inactive) fetch하는 동안 임시로!! 보여줄 데이터
      // * cacheTime이 지나면 gb에 의해 삭제된다.
      cacheTime: 1000 * 60 * 5
    }
  )

  const [post, setPost] = useState<Post>(data ? data : {})
  // https://jsonplaceholder.typicode.com/posts/1

  // ! 이 로직은 필요 없음 지워서 보여주기
  // ! 이 로직을 작성해둔 이유는 서버 상태를
  // ! 클라이언트에서 어떻개 관리할 수 있는지 알려주기 위함! (여기서 context API, Redux, Recoil, Mobx)등을 추가하면 됨
  useEffect(() => {
    // * 빈 배열은 true이기 때문에 return되지 않습니다! 'undefined'만 early return 됩니다!
    if (typeof data === 'undefined') return
    setPost(data ? data : {})
  }, [data])

  if (error) {
    console.error(error)
  }

  return (
    <div>
      <h1>React query sample</h1>
      <div style={{ margin: '30px' }}>
        {post && !isLoading && (
          <div>
            포스트 제목 :<h1> {post.title}</h1>
          </div>
        )}
      </div>
      <div style={{ margin: '30px' }}>
        <div style={{ margin: '30px' }}>
          {'get post를 누르면 '}
          <h1>{postNumber}</h1>
          {'번째 포스트가 나옵니다.'}
        </div>
        <button onClick={() => setPostNumber((prev) => prev + 1)}>Increse Post Number</button>
        <button onClick={() => setPostNumber((prev) => prev - 1)}>Decrese Post Number</button>
      </div>
    </div>
  )
}
