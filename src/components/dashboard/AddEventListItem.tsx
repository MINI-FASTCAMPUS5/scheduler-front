import React from 'react'

type AddEventProps = {
  data: { adminScheduleId: string; title: string; description: string; scheduleStart: string }
}

export default function AddEventListItem({ data }: AddEventProps) {
  return (
    <div>
      <div className='flex w-full h-[48px] bg-boxbg rounded-xl pr-5 pl-5'>
        <div className='flex text-[calc(1vw-5px)] w-2/6 pr-6 mt-auto mb-auto text-base font-bold justify-center'>
          {data.title}
        </div>
        <div className='flex text-[calc(1vw-5px)] w-2/6 mt-auto mb-auto text-base justify-center'>
          {data.description}
        </div>
        <div className='flex text-[calc(1vw-5px)] w-2/6 pl-6 mt-auto mb-auto gap-2 justify-center'>
          {data.scheduleStart}
        </div>
      </div>
    </div>
  )
}
