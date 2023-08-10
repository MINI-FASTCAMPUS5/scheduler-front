import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { useCookies } from 'react-cookie'
import { getMyTicketList } from '@/api/user/mypage'
import Ticket from './Ticket'
import TicketList from './TicketList'
import { FanUser } from '@/models/user'
import { ACCESS_TOKEN } from '@/constants'

type Props = {
  user: FanUser
}
export default function ReserveDetail({ user }: Props) {
  const [cookie] = useCookies([ACCESS_TOKEN])

  const { data, isSuccess } = useQuery(
    ['myTicketList', user.id ? user.id : ''],
    () => getMyTicketList(cookie.AccessToken),
    {
      staleTime: 1000 * 60 * 5
    }
  )

  return (
    <>
      <div className='flex justify-between font-gmarket'>
        {isSuccess && data && (
          <div className='flex gap-3'>
            <Ticket type='used' ticket={data?.getUserInfoDTO.usedTicket} />
            <Ticket type='rest' ticket={data?.getUserInfoDTO.sizeOfTicket} />
          </div>
        )}
      </div>
      <div>
        <h2 className='text-2xl font-bold pt-10 font-gmarket'>나의 티켓 리스트</h2>
        <div className='border-[1px] p-4 mt-4 rounded-2xl h-[500px] overflow-y-scroll scrollbar-hide'>
          {isSuccess && data && <TicketList data={data} />}
          {isSuccess && !data && (
            <div className='relative flex justify-center h-full min-h-[20rem]'>
              <h2 className='text-2xl font-bold p-5'>예약된 정보가 없습니다!</h2>
              <img
                className='absolute inset-0 m-auto opacity-20'
                src='/YeonganIdolLogoOrigin.svg'
                alt="Yeongan Idol's Logo"
              />
            </div>
          )}
        </div>
      </div>
    </>
  )
}
