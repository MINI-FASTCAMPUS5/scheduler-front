import React from 'react'
import AddEventListItem from './AddEventListItem'

export default function AddEventList() {
  const mockdata = [
    {
      adminScheduleId: '12dsa7423',
      title: 'BTS 부산 공연',
      description: 'BTS 서울 공연 진행합니다.',
      scheduleStart: '2023-06-05'
    },
    {
      adminScheduleId: '12dsa1423',
      title: '뉴진스 서울 공연',
      description: '뉴진스 서울 공연 진행합니다.',
      scheduleStart: '2023-06-15'
    },
    {
      adminScheduleId: '12dsa2563',
      title: '르세라핌 서울 공연',
      description: '르세라핌 서울 공연 진행합니다.',
      scheduleStart: '2023-06-23'
    },
    {
      adminScheduleId: '13dsa1323',
      title: 'BTS 부산 공연',
      description: 'BTS 서울 공연 진행합니다.',
      scheduleStart: '2023-07-05'
    },
    {
      adminScheduleId: '12dsa673',
      title: '뉴진스 서울 공연',
      description: '뉴진스 서울 공연 진행합니다.',
      scheduleStart: '2023-07-15'
    },
    {
      adminScheduleId: '12dsa2523',
      title: '르세라핌 서울 공연',
      description: '르세라핌 서울 공연 진행합니다.',
      scheduleStart: '2023-07-23'
    },
    {
      adminScheduleId: '12dsa1323',
      title: 'BTS 부산 공연',
      description: 'BTS 서울 공연 진행합니다.',
      scheduleStart: '2023-08-05'
    }
  ]

  // const idlink = 0
  // if(location.pethname.includes('/manager/approval')) idlink

  return (
    <div className='flex flex-col h-[100%]'>
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
      <div className='flex flex-col h-[100%]'>
        <div className='flex flex-col h-[300px] border border-boxline p-4 rounded-3xl gap-2 overflow-y-scroll scrollbar-hide'>
          {mockdata.map((data) => (
            <AddEventListItem key={data.adminScheduleId} data={data} />
          ))}
        </div>
        <div className='flex w-full gap-5 mt-5 pl-10 pr-10'>
          <button className='flex h-20 w-full text-white text-[calc(1vw)] font-bold justify-center bg-main rounded-3xl transition hover:bg-[#411b92]'>
            <div className='flex m-auto'>행사 등록하기</div>
          </button>
          <button className='flex h-20 w-full text-white text-[calc(1vw)] font-bold justify-center bg-wait rounded-3xl transition hover:bg-[#ef8a0f]'>
            <div className='flex m-auto'>신청자 승인/취소 관리</div>
          </button>
        </div>
      </div>
    </div>
  )
}
