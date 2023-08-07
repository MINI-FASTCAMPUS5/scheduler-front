import React from 'react'
import AddFormInformation from './AddFormInformation'

export type ScheduleAddFormData = {
  startDate: string
  endDate: string
  title: string
  description: string
  imageFile: File
}

type Props = {
  date: string
  onCancle: () => void
  onSubmit: (schedule: ScheduleAddFormData) => void
}
export default function AddForm({ date, onCancle, onSubmit }: Props) {
  return (
    <section className='overflow-y-scroll h-full p-4 px-12 scrollbar-hide'>
      <div className='h-full flex flex-col justify-between rounded-2xl'>
        <AddFormInformation date={date} onCancle={onCancle} onSubmit={onSubmit} />
      </div>
    </section>
  )
}
