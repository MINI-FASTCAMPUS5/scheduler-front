import React from 'react'
import ApprovalList from '@/components/approval/ApprovalList'

export default function ApprovalPage() {
  return (
    <div className='flex flex-col pt-2 pb-2 ml-8 mr-8 h-[100vh]'>
      <div className='flex flex-col font-bold text-4xl mt-10 relative'>
        신청 승인/거절
        <div className='border-b-2 border-boxline mb-6 mt-3' />
        <div className='flex mb-[34px] absolute right-0 bottom-0'>
          <div className='flex text-[28px]'>
            승인대기
            <div className='flex ml-[10px] mr-[20px] rounded-xl pl-3 pr-3 bg-wait'>
              <div className='flex text-[20px] text-white'>총 0명</div>
            </div>
          </div>
          <div className='flex text-[28px]'>
            취소
            <div className='flex ml-[10px] mr-[20px] rounded-xl pl-3 pr-3 bg-point'>
              <div className='flex text-[20px] text-white'>총 0명</div>
            </div>
          </div>
          <div className='flex text-[28px]'>
            승인
            <div className='flex ml-[10px] mr-[20px] rounded-xl pl-3 pr-3 bg-confirm'>
              <div className='flex text-[20px] text-white'>총 0명</div>
            </div>
          </div>
        </div>
      </div>
      <ApprovalList />
    </div>
  )
}
