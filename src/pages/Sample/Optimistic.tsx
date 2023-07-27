import React, { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import styles from './Optimistic.module.css'

function fetchComments(postNumber: number) {
  return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postNumber}`).then((res) =>
    res.json()
  )
}

async function addComment(postNumber: number, newComment: Comment) {
  // * 임의로 데이터를 업데이트 한다고 가정, 실제로는 서버에서 업데이트가 일어난다.
  // * 실제로는 fetch("https//json...", method : "PUT", body : newComment)와 같은 형식으로 업데이트가 일어나고 서버에서는 데이터를 업데이트 한다.
  // * 그리고 response로 무언가 받아온다. 여기서는 추가된 댓글을 가져오는 척 하자.
  await new Promise((res) => setTimeout(res, 3000))
  return newComment
}

type Comment = {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export default function Optimistic() {
  const queryClient = useQueryClient()

  const [postNumber, setPostNumber] = useState(1)
  //  * key는 반드시 배열
  const { data: comments, isLoading } = useQuery<Comment[], Error>(
    ['post', postNumber],
    () => fetchComments(postNumber),
    {
      staleTime: 1000 * 60, // * staleTime을 0 ~ 1000으로 설정해서 네트워크 요청이 얼마나 가는지 보여주기 (default : 0)
      cacheTime: 1000 * 60 * 5 // * cache가 0일 경우 refetch시 비교할 수 있는 데이터가 없기 떄문에 반드시 rerendering이 일어난다. (default : 5min)
      // enabled : !!postNumber // mount될 때 fetch를 하지 않으려면 아래와 같이 enabled를 사용한다.
    }
  )

  const mutation = useMutation({
    mutationFn: (newComment: Comment) => {
      return addComment(postNumber, newComment)
    },
    onSuccess: async (comment) => {
      // * addComment함수의 실행이 성공적이였을 경우 성공적으로 입력된 comment가 도작했다면?
      queryClient.setQueryData(['comments', postNumber], (prev: Comment[] | undefined) => {
        if (!prev) return [comment]
        return [...prev, comment]
      })

      // * API를 새로 호출하고 싶다면?
      await new Promise((res) => {
        setTimeout(res, 2000)
      })
      const isYes = prompt('"yes"를 입력하면 정말로 새로운 포스트를 받아옵니다!!!')
      if (isYes === 'yes') queryClient.invalidateQueries(['comments', postNumber])
      // ! 낙관적 업데이트시 두번 연속 클릭이 일어나면 어떻게 되는지 보여주기
    },
    onError(error, newComment, ctx) {
      console.error(error)
      console.info('context : ', ctx)
      // 1. 서버에 다시 comments를 요청
      // queryClient.setQueryData(['post', postNumber], (prev: Comment[] | undefined) =>  ....

      // 2. 아니면 원래 comments로 복구하기
      return comments
      // ! 위와 아래는 같은 코드임 왜 이렇게하는지 서버 API를 어떻게 달라할 때 무엇을 생각해야하는지 알려주기
      if (typeof comments === 'undefined') return []
      return comments
    }
  })

  const updateComments = () => {
    const dummyComment: Comment = {
      postId: postNumber,
      id: Math.floor(Math.random() * 99999),
      name: '익명의 사용자',
      email: 'unknown@unknown.com',
      body: '익명의 댓글입니다.'
    }
    mutation.mutate(dummyComment)
  }

  return (
    <div>
      <h1 className={styles.title}>React queryOptimistic Data Fetching</h1>
      <div style={{ margin: '30px' }}>
        {mutation.isLoading && <div>데이터를 패칭하고 있습니다... 잠시만 기다려주세요</div>}
        {comments &&
          !isLoading &&
          comments.map((comment, i) => {
            return (
              <div style={{ display: 'block' }} key={comment.id}>
                <h4>{i + 1}</h4>
                <p>name : {comment.name}</p>
                <span>body :{comment.body.slice(0, 10)}</span>
              </div>
            )
          })}
        ------------------------------------------------------------------------------
      </div>
      <div style={{ margin: '30px' }}>
        <div style={{ margin: '30px' }}>
          {'get post를 누르면 '}
          <h1>{postNumber}</h1>
          {'번째 포스트의 댓글이 나옵니다.'}
        </div>
        <button onClick={() => setPostNumber((prev) => prev + 1)}>Increse Post Number</button>
        <button onClick={() => setPostNumber((prev) => prev - 1)}>Decrese Post Number</button>
      </div>
      <div style={{ margin: '30px' }}>
        <button onClick={updateComments}>낙관적으로 댓글을 추가해봅시다!</button>
      </div>
    </div>
  )
}
