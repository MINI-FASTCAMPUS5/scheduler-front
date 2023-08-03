import React from 'react'
import { TbCalendarUp, TbFaceId, TbCircleCheckFilled, TbCircleXFilled } from 'react-icons/tb'

export default function EventStatusCard() {
  return (
    <div className='flex flex-col w-full mb-[50px]'>
      <div className='flex text-3xl font-bold mb-2'>행사현황</div>
      <div className='flex w-full gap-4'>
        <div className='flex flex-col w-full h-48 border-4 border-main rounded-2xl justify-center text-main'>
          <div className='flex justify-center mb-3'>
            <TbCalendarUp className=' text-6xl' />
          </div>
          <div className='flex text-2xl font-bold justify-center'>등록 행사</div>
          <div className='flex text-4xl font-bold mb-2 justify-center'>
            0<div className='text-lg mt-3'>개</div>
          </div>
        </div>
        <div className='flex flex-col w-full h-48 border-4 border-wait rounded-2xl justify-center text-wait'>
          <div className='flex justify-center mb-3'>
            <TbFaceId className=' text-6xl' />
          </div>
          <div className='flex text-2xl font-bold justify-center'>승인 대기</div>
          <div className='flex text-4xl font-bold mb-2 justify-center'>
            0<div className='text-lg mt-3'>개</div>
          </div>
        </div>
        <div className='flex flex-col w-full h-48 border-4 border-confirm rounded-2xl justify-center text-confirm'>
          <div className='flex justify-center mb-3'>
            <TbCircleCheckFilled className=' text-6xl' />
          </div>
          <div className='flex text-2xl font-bold justify-center'>승인</div>
          <div className='flex text-4xl font-bold mb-2 justify-center'>
            0<div className='text-lg mt-3'>개</div>
          </div>
        </div>
        <div className='flex flex-col w-full h-48 border-4 border-point rounded-2xl justify-center text-point'>
          <div className='flex justify-center mb-3'>
            <TbCircleXFilled className=' text-6xl' />
          </div>
          <div className='flex text-2xl font-bold justify-center'>취소</div>
          <div className='flex text-4xl font-bold mb-2 justify-center'>
            0<div className='text-lg mt-3'>개</div>
          </div>
        </div>
      </div>
    </div>
  )
}
