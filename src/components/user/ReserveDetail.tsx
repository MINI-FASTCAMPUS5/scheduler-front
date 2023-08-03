import React from 'react'
import Ticket from './Ticket'
import TicketList from './TicketList'

export default function ReserveDetail() {
  return (
    <>
      <div className='flex justify-center'>
        <Ticket type='used' ticket={5} />
        <Ticket type='rest' ticket={7} />
      </div>
      <div>
        <h2 className='text-2xl font-bold pt-20'>나의 티켓 리스트</h2>
        <TicketList />
      </div>
    </>
  )
}
