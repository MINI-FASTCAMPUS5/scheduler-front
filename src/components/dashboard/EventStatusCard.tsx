import React from 'react'
import { TbCalendarUp, TbFaceId, TbCircleCheckFilled, TbCircleXFilled } from 'react-icons/tb'

type Props = {
  waiting: string
  accepted: string
  refused: string
  events: string
}

export default function EventStatusCard({ waiting, accepted, refused, events }: Props) {
  return (
    <div className='flex flex-col h-[30%] w-full mb-[50px]'>
      <div className='flex text-3xl font-bold mb-2'>행사현황</div>
      <div className='flex w-full gap-4'>
        <div className='flex flex-col w-full border-4 border-main rounded-2xl justify-center text-main'>
          <div className='flex justify-center mb-3'>
            <TbCalendarUp className='pt-[10px] text-[7vh]' />
          </div>
          <div className='flex text-[2vh] font-bold justify-center'>등록 행사</div>
          <div className='flex text-[4vh] font-bold mb-2 justify-center'>
          {events ? events : 0}<div className='text-[2vh] mt-5'>개</div>
          </div>
        </div>
        <div className='flex flex-col w-full border-4 border-wait rounded-2xl justify-center text-wait'>
          <div className='flex justify-center mb-3'>
            <TbFaceId className='pt-[10px] text-[7vh]' />
          </div>
          <div className='flex text-[2vh] font-bold justify-center'>승인 대기</div>
          <div className='flex text-[4vh] font-bold mb-2 justify-center'>
            {waiting ? waiting : 0}
            <div className='text-[2vh] mt-5'>개</div>
          </div>
        </div>
        <div className='flex flex-col w-full border-4 border-confirm rounded-2xl justify-center text-confirm'>
          <div className='flex justify-center mb-3'>
            <TbCircleCheckFilled className='pt-[10px] text-[7vh]' />
          </div>
          <div className='flex text-[2vh] font-bold justify-center'>승인</div>
          <div className='flex text-[4vh] font-bold mb-2 justify-center'>
            {accepted ? accepted : 0}
            <div className='text-[2vh] mt-5'>개</div>
          </div>
        </div>
        <div className='flex flex-col w-full border-4 border-point rounded-2xl justify-center text-point'>
          <div className='flex justify-center mb-3'>
            <TbCircleXFilled className='pt-[10px] text-[7vh]' />
          </div>
          <div className='flex text-[2vh] font-bold justify-center'>취소</div>
          <div className='flex text-[4vh] font-bold mb-2 justify-center'>
            {refused ? refused : 0}
            <div className='text-[2vh] mt-5'>개</div>
          </div>
        </div>
      </div>
    </div>
  )
}
