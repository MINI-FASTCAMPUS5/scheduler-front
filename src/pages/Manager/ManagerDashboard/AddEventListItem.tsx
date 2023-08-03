import React from 'react'

export default function AddEventListItem() {
  return (
    <div>
      <div className='flex w-full h-[48px] bg-boxbg rounded-xl pr-5 pl-5'>
        <div className='flex w-2/6 pr-6 mt-auto mb-auto text-base font-bold justify-center'>
          BTS 서울 공연
        </div>
        <div className='flex w-2/6 mt-auto mb-auto text-base'>
          BTS의 서울 여름 공연 진행합니다...
        </div>
        <div className='flex w-2/6 pl-6 mt-auto mb-auto gap-2 justify-center'>2023-08-20</div>
      </div>
    </div>
  )
}
