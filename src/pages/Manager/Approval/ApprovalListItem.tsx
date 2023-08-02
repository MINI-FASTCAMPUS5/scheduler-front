import React from 'react'

export default function ApprovalListItem() {
  return (
    <div className='flex w-full h-10 bg-box-bg-color rounded-xl pr-5 pl-5'>
      <div className='flex w-3/5 mt-auto mb-auto text-base font-bold'>BTS 서울 공연</div>
      <div className='flex w-1/5 mt-auto mb-auto text-base'>2023-08-20</div>
      <div className='flex w-1/5 mt-auto mb-auto gap-2 justify-end'>
        <button className='flex w-16 border text-main-color border-main-color rounded-lg justify-center text-sm'>수정</button>
        <button className='flex w-16 border text-point-color border-point-color rounded-lg justify-center text-sm'>취소</button>
      </div>
    </div>
  )
}
