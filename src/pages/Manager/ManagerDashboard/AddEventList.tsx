import React from 'react'
import AddEventListItem from './AddEventListItem'

export default function AddEventList() {
  return (
    <div className='flex flex-col h-[480px]'>
      <div className='flex text-3xl font-bold mb-2'>등록한 행사 리스트</div>
      <div>
        <div className='flex w-full h-10 text-white bg-main rounded-full pr-5 pl-5 mb-2 font-bold'>
          <div className='flex w-2/6 mt-auto mb-auto text-base font-bold justify-center'>
            행사명
          </div>
          <div className='flex w-2/6 mt-auto mb-auto text-base justify-center'>행사 설명</div>
          <div className='flex w-2/6 mt-auto mb-auto gap-2 justify-center'>행사일</div>
        </div>
      </div>
      <div className='flex flex-col border w-full mb-5 border-boxline p-4 rounded-3xl gap-2 overflow-auto scrollbar-hide'>
        <AddEventListItem />
        <AddEventListItem />
        <AddEventListItem />
        <AddEventListItem />
        <AddEventListItem />
        <AddEventListItem />
        <AddEventListItem />
        <AddEventListItem />
        <AddEventListItem />
        <AddEventListItem />
        <AddEventListItem />
        <AddEventListItem />
        <AddEventListItem />
        <AddEventListItem />
        <AddEventListItem />
        <AddEventListItem />
        <AddEventListItem />
        <AddEventListItem />
      </div>
    </div>
  )
}
