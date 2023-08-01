import React from 'react'
import ApprovalListItem from './ApprovalListItem'

export default function ApprovalList() {
  return (
    <div className='flex flex-col h-full'>
      <div className='flex h-10'>등록한 행사 리스트</div>
      <div className='flex w-full h-10 text-white bg-main-color rounded-full pr-5 pl-5 mb-2 font-bold'>
        <div className='flex w-3/5 mt-auto mb-auto text-base font-bold pl-3'>행사명</div>
        <div className='flex w-1/5 mt-auto mb-auto text-base'>행사일</div>
        <div className='flex w-1/5 mt-auto mb-auto gap-2 justify-end pr-14'>수정/취소</div>
      </div>
      <div className='flex h-full gap-y-2 border border-box-line-color p-4 rounded-3xl relative'>
        <ApprovalListItem />
        <button className='flex w-32 h-8 bg-main-color rounded-xl text-white justify-center leading-8 mt-2 absolute left-0 right-0 bottom-6 m-auto'>
          + 행사등록
        </button>
      </div>
    </div>
  )
}
