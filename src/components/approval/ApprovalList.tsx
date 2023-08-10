import React, { useEffect, useState } from 'react'
import ApprovalListItem from './ApprovalListItem'
import ApprovalPaging from './ApprovalPagination'
import CheerUpLoading from '../ui/CheerUpLoading'
import { implScheduleDtoType } from '@/api/admin/approvalPage'


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ApprovalList(props: any) {
  // eslint-disable-next-line react/prop-types
  const { data } = props

  const [postPerPage] = useState(10) //한 페이지에 보여질 아이템 수
  const [count, setCount] = useState(10) //아이템 총 개수
  const [currentPage, setCurrentPage] = useState(1) //현재 페이지. 기본값 '1'
  const [indexOfLastPost, setIndexOfLastPost] = useState(0) //현재 페이지의 마지막 아이템 인덱스
  const [indexOfFirstPost, setIndexOfFirstPost] = useState(0) //현재 페이지의 첫번째 아이템 인덱스
  const [currentPosts, setCurrentPosts] = useState<implScheduleDtoType[]>([]) //현재 페이지에서 보여지는 아이템
  const [approvalList, setApprovallist] = useState<implScheduleDtoType[]>([]) //리스트에 나타낼 아이템
  const [londing, setLoding] = useState(true)

  useEffect(() => {
    setLoding(true)
    const fetchData = () => {
      try {
        setApprovallist(data)
        setCount(data.length)
        setLoding(false)
      } catch (error) {
        console.error('신청 승인/거절 영역 오류', error)
      }
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setIndexOfLastPost(currentPage * postPerPage) // 현재 페이지와 한 페이지에 보여질 아이템 수를 곱하여 결과 값을 setIndexOfLastPost에 넘깁니다.
    setIndexOfFirstPost(indexOfLastPost - postPerPage) // indexOfLastPost의 값과 한 페이지에 보여질 아이템 수를 뺀 결과를 setIndexOfFirstPost에 전달합니다.
    setCurrentPosts(approvalList.slice(indexOfFirstPost, indexOfLastPost)) // approvalList 배열에서 현재 페이지의 첫번째와 마지막 인덱스까지의 값을 복사하여 setCurrentPosts에 전달합니다.
  }, [currentPage, postPerPage, approvalList, indexOfLastPost, indexOfFirstPost]) // useEffect를 실행할 조건들을 배열에 명시합니다.

  const setPage = (pageNumber: number) => {
    setCurrentPage(pageNumber) // 페이지를 설정하는 함수입니다. ApprovalPaging 컴포넌트에서 호출됩니다.
  }

  return (
    <div className='flex flex-col h-[100%]'>
      {londing && (
        <div className='fixed flex flex-col w-full h-full left-0 top-0 bg-purple-50 z-[99999] justify-center items-center opacity-90 overflow-hidden'>
          <div className='text-black  text-7xl font-extrabold opacity-80 mb-12'>
            데이터를 가져오고 있습니다!
          </div>
          <CheerUpLoading />
        </div>
      )}
      <div>
        <div className='flex w-full h-10 text-white bg-main rounded-full mb-2 font-bold pl-[40px] pr-[40px] font-gmarket'>
          <div className='flex w-[20%] mt-auto mb-auto text-base justify-center font-bold'>
            행사명
          </div>
          <div className='flex w-[40%] mt-auto mb-auto text-base justify-center'>행사 설명</div>
          <div className='flex w-[10%] mt-auto mb-auto text-base justify-center'>신청자</div>
          <div className='flex w-[20%] mt-auto mb-auto text-base justify-center'>신청일</div>
          <div className='flex w-[10%] mt-auto mb-auto gap-2 justify-center pl-[16px]'>
            승인 여부
          </div>
        </div>
      </div>

      <div className='flex flex-col h-full p-4 rounded-3xl relative'>
        {currentPosts && currentPosts.length > 0 ? (
          currentPosts.map((data) => <ApprovalListItem key={data.userScheduleId} data={data} />)
        ) : (
          <div className='flex m-auto text-[#a9a9a9]'>데이터가 없습니다.</div>
        )}
      </div>
      <div className='flex h-[100px] justify-center'>
        <ApprovalPaging page={currentPage} count={count} setPage={setPage} />
      </div>
    </div>
  )
}
