import React from 'react'

type Props = {
  data: {
    id: string
    title: string
    date: string
    progress: string
  }
}
export default function TicketListItem({ data }: Props) {
  const option = {
    fulfilled: 'bg-confirm',
    rejected: 'bg-point',
    pending: 'bg-wait'
  }

  return (
    <div className='flex items-center mb-4 bg-boxbg px-4 py-2 rounded-xl'>
      <p className='flex-1 font-bold truncate'>{data.title}</p>
      <p className='mr-4 text-[0.9rem]'>{data.date}</p>
      {/* ! 타입 임시 지정! */}
      <span
        className={`${
          option[data.progress as 'fulfilled']
        } w-[80px] truncate text-center text-white font-bold  px-2 rounded-full`}
      >
        {data.progress}
      </span>
    </div>
  )
}
