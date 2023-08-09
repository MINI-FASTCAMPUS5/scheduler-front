import React from 'react'

type Props = {
  state: {
    accepted: number
    refused: number
    waiting: number
  }
}
export default function QuickState({state}: Props) {
  return (
    <div className='flex mb-[34px] absolute right-0 bottom-0'>
      <div className='flex text-[28px]'>
        승인대기
        <div className='flex ml-[10px] mr-[20px] rounded-xl pl-3 pr-3 bg-wait'>
          <div className='flex text-[20px] text-white'>총 {state.waiting ? state.waiting : 0 }명</div>
        </div>
      </div>
      <div className='flex text-[28px]'>
        취소
        <div className='flex ml-[10px] mr-[20px] rounded-xl pl-3 pr-3 bg-point'>
          <div className='flex text-[20px] text-white'>총 {state.refused ? state.refused : 0 }명</div>
        </div>
      </div>
      <div className='flex text-[28px]'>
        승인
        <div className='flex ml-[10px] mr-[20px] rounded-xl pl-3 pr-3 bg-confirm'>
          <div className='flex text-[20px] text-white'>총 {state.accepted ? state.accepted : 0 }명</div>
        </div>
      </div>
    </div>
  )
}
