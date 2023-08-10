/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import AddEventListItem from './AddEventListItem'
import { ApprovalListResponse } from '@/api/admin/adminPage'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'
import { DATE_ROUTE_FORMAT } from '@/constants'

type Props = {
  data: ApprovalListResponse
}

export default function AddEventList(props: Props) {
  const { data } = props
  const datetime = new Date()

  return (
    <div className='flex flex-col h-[100%]'>
      <div className='flex text-3xl font-bold mb-2 font-gmarket'>등록한 행사 리스트</div>
      <div className='font-gmarket'>
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
            {data.schedulerRoleAdminList?.map((schedule: any, index: any) => (
              <AddEventListItem key={index} data={schedule} />
            ))}
        </div>
        <div className='flex w-full gap-5 mt-5 pl-10 pr-10'>
          <Link to={`/manager/event/calendar/${dayjs(datetime).format(DATE_ROUTE_FORMAT)}`} className='hover:scale-[0.98] flex h-20 w-full text-white text-[calc(1vw)] font-bold justify-center bg-main rounded-3xl transition hover:bg-[#411b92]'>
            <div className='flex m-auto font-gmarket'>행사 등록하기</div>
          </Link>
          <Link to={'/manager/approval'} className='hover:scale-[0.98] flex h-20 w-full text-white text-[calc(1vw)] font-bold justify-center bg-wait rounded-3xl transition hover:bg-[#ef8a0f]'>
            <div className='flex m-auto font-gmarket'>신청자 승인/취소 관리</div>
          </Link>
        </div>
      </div>
    </div>
  )
}
