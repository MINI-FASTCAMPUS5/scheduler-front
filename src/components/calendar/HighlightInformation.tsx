import React from 'react'

export default function HighlightInformation() {
  return (
    <div className='flex text-[0.7rem] top-0 font-bold'>
      <div className='flex items-center mr-[0.8rem]'>
        <div className='w-4 h-4 rounded-[7px] bg-main mr-[0.3rem]' />
        <p className='whitespace-nowrap'>행사 일정</p>
      </div>
      <div className='flex items-center mr-[0.8rem]'>
        <div className='w-4 h-4 rounded-[7px] bg-wait mr-[0.3rem]' />
        <p className='whitespace-nowrap'>승인 대기</p>{' '}
      </div>
      <div className='flex items-center mr-[0.8rem]'>
        <div className='w-4 h-4 rounded-[7px] bg-confirm mr-[0.3rem]' />
        <p className='whitespace-nowrap'>신청 확정</p>
      </div>
      <div className='flex items-center mr-[0.8rem]'>
        <div className='w-4 h-4 rounded-[7px] bg-point mr-[0.3rem]' />
        <p className='whitespace-nowrap'>승인 거절</p>
      </div>
    </div>
  )
}
