import React from 'react'

export default function SideBarAd() {
  return (
    <div className='max-h-[350px] text-white py-8 overflow-y-scroll scrollbar-hide transition hover:scale-[0.98] cursor-pointer'>
      <img className='m-auto max-h-[260px]' src='/side_add.png' alt='side bar advertisement' />
      <div className='flex items-center justify-center'>
        <button
          className={`text-white font-bold border-[1px] border-white rounded-full mt-1 px-2 text-[0.8rem]
        hover:text-main hover:border-white hover:bg-white transition-color ease-out duration-100`}
        >
          굳덕 티켓 신청
        </button>
      </div>
    </div>
  )
}
