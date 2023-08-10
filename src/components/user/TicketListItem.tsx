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

  const text = data.progress === 'ACCEPT' ? '승인완료' : '승인거절'
  data.progress === 'WAITING' && '승인대기'
  return (
    <div className='flex w-full h-[calc(6vh-2px)] items-center mb-4 bg-boxbg px-4 py-2 rounded-xl transition hover:scale-[0.98]'>
      <p className='flex-1 font-bold truncate'>{data.title}</p>
      <p className='mr-4 text-[0.9rem]'>{dayjs(data.scheduleStart).format(DATE_FORMAT)}</p>
      {/* ! 타입 임시 지정! */}
      <span
        className={`${option[data.progress]} flex w-[calc(3vw+5px)] text-[calc(1vw-6px)] text-center text-white 
        truncate lowercase font-bold  px-2 rounded-full`}
      >
        {text}
      </span>
    </div>
  )
}
