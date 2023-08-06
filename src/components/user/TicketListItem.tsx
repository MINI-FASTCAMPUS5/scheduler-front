import { SchedulerRoleUserList } from '@/api/user/mypage'
import { DATE_FORMAT } from '@/constants'
import dayjs from 'dayjs'
import React from 'react'

type Props = {
  data: SchedulerRoleUserList
}
export default function TicketListItem({ data }: Props) {
  const option = {
    ACCEPT: 'bg-confirm',
    REFUSE: 'bg-point',
    WAITING: 'bg-wait'
  }

  return (
    <div className='flex items-center mb-4 bg-boxbg px-4 py-2 rounded-xl'>
      <p className='flex-1 font-bold truncate'>{data.title}</p>
      <p className='mr-4 text-[0.9rem]'>{dayjs(data.scheduleStart).format(DATE_FORMAT)}</p>
      {/* ! 타입 임시 지정! */}
      <span
        className={`${option[data.progress]} w-[80px] text-center text-white 
        truncate lowercase font-bold  px-2 rounded-full`}
      >
        {data.progress}
      </span>
    </div>
  )
}
