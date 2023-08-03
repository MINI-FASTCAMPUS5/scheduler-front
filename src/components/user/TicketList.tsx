import React from 'react'
import TicketListItem from './TicketListItem'

export default function TicketList() {
  const mockData = [
    {
      id: '123asd',
      title: '뉴진스 서울 공연',
      date: '2021-10-24',
      progress: 'fulfilled'
    },
    {
      id: '12asd3asd',
      title: '뉴진스 부산 공연',
      date: '2021-01-10',
      progress: 'fulfilled'
    },
    {
      id: '12zzsd3asd',
      title: '뉴진스 마라도 공연',
      date: '2022-10-10',
      progress: 'rejected'
    },
    {
      id: 'fhn123r12',
      title: '뉴진스 울릉도 공연',
      date: '2023-10-10',
      progress: 'rejected'
    },
    {
      id: 'gfdg3',
      title: '뉴진스 인도네시아 공연',
      date: '2023-12-10',
      progress: 'pending'
    },
    {
      id: '123asd',
      title: '뉴진스 서울 공연',
      date: '2021-10-24',
      progress: 'fulfilled'
    },
    {
      id: '12asd3asd',
      title: '뉴진스 부산 공연',
      date: '2021-01-10',
      progress: 'fulfilled'
    },
    {
      id: '12zzsd3asd',
      title: '뉴진스 마라도 공연',
      date: '2022-10-10',
      progress: 'rejected'
    },
    {
      id: 'fhn123r12',
      title: '뉴진스 울릉도 공연',
      date: '2023-10-10',
      progress: 'rejected'
    },
    {
      id: 'gfdg3',
      title: '뉴진스 인도네시아 공연',
      date: '2023-12-10',
      progress: 'pending'
    }
  ]
  // TODO: 이름별, 날짜별 정렬 버튼 있으면 좋을 듯
  return (
    <div className='border-[1px] p-4 mt-4 rounded-2xl max-h-[500px] overflow-y-scroll scrollbar-hide'>
      {mockData.map((data) => (
        <TicketListItem key={data.id} data={data} />
      ))}
    </div>
  )
}
