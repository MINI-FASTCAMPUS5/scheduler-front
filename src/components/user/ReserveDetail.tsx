import React from 'react'
import Ticket from './Ticket'
import TicketList from './TicketList'
import { FanUser } from '@/models/user'

type Props = {
  user: FanUser
}
export default function ReserveDetail({ user }: Props) {
  return (
    <>
      <div className='flex justify-center'>
        <Ticket type='used' ticket={user.sizeOfTicket} />
        <Ticket type='rest' ticket={12 - user.sizeOfTicket} />
      </div>
      <div>
        <h2 className='text-2xl font-bold pt-20'>나의 티켓 리스트</h2>
        <TicketList />
      </div>
    </>
  )
}
