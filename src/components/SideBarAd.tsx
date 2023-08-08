import React from 'react'

export default function SideBarAd() {
  return (
    <div className='max-h-[300px] border-dotted border-y-2 border-white text-white p-4 pb-8 overflow-y-scroll scrollbar-hide'>
      <img className='m-auto max-h-[300px]' src='/side_add.png' alt='side bar advertisement' />
      <div className='flex items-center justify-center'>
        <button className='text-white border-2 border-white rounded-full mt-2 px-2'>
          굳덕 티켓 신청
        </button>
      </div>
    </div>
  )
}
