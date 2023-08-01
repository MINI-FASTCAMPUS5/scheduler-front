import { ProviderScheduleWithPos } from '@/utils/calendar'
import React from 'react'
import Banner from '../Banner'
import ReserveFormInfomation from './ReserveFormInfomation'
import Button from '../ui/Button'

type Props = {
  schedule: ProviderScheduleWithPos
}

export default function ReserveForm({ schedule }: Props) {
  return (
    <section className='overflow-hidden h-full p-4 px-12'>
      <div className='h-full flex flex-col justify-between rounded-2xl'>
        <Banner
          className='py-4'
          src='/YeonganIdolLogoOrigin.svg'
          type='post'
          alt='newjeans banner'
        />
        <div className='flex-1'>
          <ReserveFormInfomation schedule={schedule} />
        </div>
        <div className='flex justify-around py-4'>
          <Button text='신청하기' size='lg' className='w-3/12 font-bold' />
          <Button text='취소' type='red' size='lg' className='w-3/12 font-bold' />
        </div>
      </div>
    </section>
  )
}
