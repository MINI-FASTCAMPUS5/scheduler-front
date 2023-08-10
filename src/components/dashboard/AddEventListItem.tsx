import { ScheduleDtoType } from '@/api/admin/adminPage'
import React from 'react'

type Props = {
  data: ScheduleDtoType
}

export default function AddEventListItem({ data }: Props) {

  return (
    <div>
      <div className='flex w-full h-[48px] bg-boxbg rounded-xl pr-5 pl-5 transition hover:scale-[0.98]'>
        <div className='flex text-[calc(1vw-5px)] w-2/6 pr-6 mt-auto mb-auto text-base font-bold justify-center'>
          {data.title}
        </div>
        <div className='flex text-[calc(1vw-5px)] w-2/6 mt-auto mb-auto text-base justify-center'>
          {data.description.substring(0, 20) + '...'}
        </div>
        <div className='flex text-[calc(1vw-5px)] w-2/6 pl-6 mt-auto mb-auto gap-2 justify-center'>
          {data.scheduleStart.split('T')[0]}
        </div>
      </div>
    </div>
  )
}
